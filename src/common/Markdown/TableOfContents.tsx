import { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';

import { StylesGroup } from '../../typings';
import { IMarkdownHeading } from '../../Utils/MarkdownUtils';
import { WebUtils } from '../../Utils/WebUtils';
import { Content } from '../Content/Content';
import { PageScrollBoxContext } from '../SiteLayout/SiteLayout';

const styles: StylesGroup = {
    container: {
        minWidth: '275px',
        maxWidth: '275px',
        flex: 'initial',
        position: 'relative',
        '@media screen and (max-width: 767.95px)': {
            display: 'none',
        },
    },
    scrollBox: {
        position: 'sticky',
        top: 0,
        maxHeight: 'calc(100vh - 68px)',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
    },
    header: {
        paddingLeft: 1,
        borderLeft: '4px solid transparent',
    },
    contentList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    contentItemBase: (theme) => ({
        fontSize: '14px',
        color: 'unset',
        textDecoration: 'none !important',
        boxSizing: 'content-box',
        display: 'block',
        paddingTop: 0.5,
        paddingBottom: 0.5,
        paddingLeft: 1,
        borderLeft: '4px solid transparent',
        '&:hover': {
            borderLeft: `4px solid ${theme.palette.grey[400]}`,
        },
    }),
    contentItemActive: (theme) => ({
        borderLeft: `4px solid ${theme.palette.primary.main} !important`,
        fontWeight: 600,
    }),
    nestedItem: (theme) => ({
        paddingLeft: `${theme.spacing(2.5)}px !important`,
    }),
};

const AESTHETIC_OFFSET_PIXELS = 16;

interface ISubHeaderItem {
    value: string;
    index: number;
}

interface IProps {
    headings?: IMarkdownHeading[];
}

/** Generates a table of contents from markdown headings */
export const TableOfContents = ({ headings = [] }: IProps) => {
    const isVisible = useMediaQuery('(min-width:768px)', {
        defaultMatches: true,
    });

    /** Element for the apps primary scroll container  */
    const pageScrollBoxElement = useContext(PageScrollBoxContext);

    /** Ref for tracking the scrolling table of contents div */
    const scrollingRef = useRef<HTMLDivElement>(null);

    /** Ref for tracking and manipulating header elements */
    const headerMapRef = useRef<Map<string, HTMLAnchorElement>>(new Map());

    /** contentIndex is the index of the heading of the on-screen content */
    const [contentIndex, setContentIndex] = useState(-1);

    /** Layout effect to determine what the user is looking at */
    useLayoutEffect(() => {
        /** Skip computation if not showing the table of contents (performance optimization) */
        if (!isVisible || !pageScrollBoxElement) {
            return;
        }

        /** List the scroll offsets for each heading */
        let scrollOffsets: number[] = [];

        /** Scroll event handler */
        const handleScroll = WebUtils.withThrottling(() => {
            /** Read current window scroll position, and add small offset for aesthetic behavior */
            const target = pageScrollBoxElement.scrollTop + AESTHETIC_OFFSET_PIXELS;

            /** Determine what were looking at */
            const prevClosest =
                contentIndex >= 0 && contentIndex < scrollOffsets.length ? scrollOffsets[contentIndex] : -1;
            let closestResult = contentIndex;

            /** Look at the neighbors of our previous active index in the direction we scrolled (performance optimization) */
            if (target <= AESTHETIC_OFFSET_PIXELS || (scrollOffsets.length > 0 && target < scrollOffsets[0])) {
                /** The user is looking well above all the headers / content based on their scroll position. Nothing is active */
                closestResult = -1;
            } else if (target === prevClosest) {
                /** We can quit early if we haven't truly moved and are right on the header */
                return;
            } else if (target > prevClosest) {
                /** The user has scrolled down. The active header is lowest one not below our target */
                for (let i = contentIndex + 1; i < scrollOffsets.length; i++) {
                    /** Update the closest result until we pass the final answer, at which point we can break from the loop */
                    if (target >= scrollOffsets[i]) {
                        closestResult = i;
                    } else {
                        break;
                    }
                }
            } else {
                /** The user has scrolled up. The active header is highest one not above our target. Note that we proceed backwards (performance optimization) */
                for (let i = contentIndex - 1; i >= 0; i--) {
                    /** Update the closest result until we pass the final answer, at which point we can break from the loop */
                    if (target >= scrollOffsets[i]) {
                        closestResult = i;
                        break;
                    }
                }
            }

            /** Perform update only if necessary */
            if (contentIndex !== closestResult) {
                /** Store new active header to state */
                setContentIndex(closestResult);

                /** Follow the user and automatically scroll to new active header within the table of contents column if necessary */
                if (scrollingRef.current) {
                    if (closestResult >= 0) {
                        /** Grab element */
                        const activeElement = headerMapRef.current.get(headings[closestResult].value);

                        if (!activeElement) {
                            return;
                        }

                        /** Compare the scroll height against the current table of contents view */
                        const viewportHeight = WebUtils.windowHeight();
                        const distanceFromTopOfWindow = activeElement.getBoundingClientRect().top;
                        if (distanceFromTopOfWindow < viewportHeight * 0.25) {
                            /** Element is too high — scroll down by 2/3vh */
                            const targetScroll = distanceFromTopOfWindow - viewportHeight * 0.667;
                            scrollingRef.current.scrollTop += targetScroll;
                        } else if (distanceFromTopOfWindow > viewportHeight * 0.75) {
                            /** Element is too low — scroll up by 1/3vh */
                            const targetScroll = distanceFromTopOfWindow - viewportHeight * 0.333;
                            scrollingRef.current.scrollTop += targetScroll;
                        }
                    } else if (scrollingRef.current.scrollTop !== 0) {
                        /** Reset scroll */
                        scrollingRef.current.scrollTop = 0;
                    }
                }
            }
        }, 50);

        /** Resize event handler */
        const handleResize = WebUtils.withThrottling(() => {
            /** (Re)compute scroll offset of each header on window resize */
            scrollOffsets = headings.map(({ value }) => {
                const element = document.getElementById(WebUtils.makeURL(value));
                return (element && element.offsetTop) || 0;
            });

            handleScroll();
        }, 500);

        /** Register event handlers on component mount */
        pageScrollBoxElement.addEventListener('scroll', handleScroll, false);
        pageScrollBoxElement.addEventListener('resize', handleResize, false);

        /** Invoke resize handler to start */
        handleResize();

        /** Cleanup event handlers on unmount */
        return function cleanup() {
            pageScrollBoxElement.removeEventListener('scroll', handleScroll);
            pageScrollBoxElement.removeEventListener('resize', handleResize);
        };
    }, [pageScrollBoxElement, contentIndex, headings, isVisible]);

    /** Preprocess headings, grouping them by depth (i.e. how nested they are) */
    const groupedHeadings = useMemo(() => {
        const { result, subHeaderBuffer } = headings.reduce<{
            result: { values: ISubHeaderItem[]; depth: number }[];
            subHeaderBuffer: ISubHeaderItem[];
        }>(
            ({ result, subHeaderBuffer }, { value, depth }, i) => {
                /** Elements deeper than 1 are grouped into subHeaderBuffer */
                if (depth > 2) {
                    /** Add subheading to nested list */
                    subHeaderBuffer.push({ value, index: i });

                    return { result, subHeaderBuffer };
                }

                /* We've reached a new major header, so we need to flush subHeaderBuffer to the previous major heading level */
                if (subHeaderBuffer.length > 0) {
                    result.push({ values: subHeaderBuffer, depth: 2 });
                }

                /** Add major heading to result list */
                result.push({ values: [{ value, index: i }], depth: 1 });

                /** Reset the subHeaderBuffer on return */
                return { result, subHeaderBuffer: [] };
            },
            { result: [], subHeaderBuffer: [] }
        );

        /** Flush the final subHeaderBuffer if necessary */
        if (subHeaderBuffer.length > 0) {
            result.push({ values: subHeaderBuffer, depth: 2 });
        }

        return result;
    }, [headings]);

    /** On small screens, we render nothing */
    if (!isVisible) {
        return null;
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.scrollBox} ref={scrollingRef}>
                <Content>
                    <Typography variant='subtitle1' sx={styles.header}>
                        {`Contents`}
                    </Typography>
                    <Box component='ul' sx={styles.contentList}>
                        {groupedHeadings.map(({ values, depth }, i) => {
                            if (depth > 1) {
                                /** Nested headers (arrays of values) */
                                return (
                                    <li key={`${i}-${depth}`}>
                                        <Box component='ul' sx={styles.contentList}>
                                            {values.map(({ value, index }) => (
                                                <Typography
                                                    color={index === contentIndex ? 'textPrimary' : 'textSecondary'}
                                                    component='li'
                                                    key={value}
                                                >
                                                    <Box
                                                        component='a'
                                                        sx={[
                                                            styles.contentItemBase,
                                                            styles.nestedItem,
                                                            index === contentIndex && styles.contentItemActive,
                                                        ]}
                                                        href={`#${WebUtils.makeURL(value)}`}
                                                        ref={(headerElement: HTMLAnchorElement) => {
                                                            if (headerElement) {
                                                                headerMapRef.current.set(value, headerElement);
                                                            }
                                                        }}
                                                    >
                                                        {value}
                                                    </Box>
                                                </Typography>
                                            ))}
                                        </Box>
                                    </li>
                                );
                            } else if (values[0]) {
                                /** Primary header (at depth 1; a one-element array) */
                                const { value, index } = values[0];
                                return (
                                    <Typography
                                        color={index === contentIndex ? 'textPrimary' : 'textSecondary'}
                                        component='li'
                                        key={value}
                                    >
                                        <Box
                                            component='a'
                                            sx={[
                                                styles.contentItemBase,
                                                index === contentIndex && styles.contentItemActive,
                                            ]}
                                            href={`#${WebUtils.makeURL(value)}`}
                                            ref={(headerElement: HTMLAnchorElement) => {
                                                if (headerElement) {
                                                    headerMapRef.current.set(value, headerElement);
                                                }
                                            }}
                                        >
                                            {value}
                                        </Box>
                                    </Typography>
                                );
                            }
                        })}
                    </Box>
                </Content>
            </Box>
        </Box>
    );
};

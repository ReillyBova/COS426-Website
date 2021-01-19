// Library imports
import React, { useState, useLayoutEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
// Project imports
import { Content } from 'components';
import { urlify, scrollTop, winHeight } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Custom stylings for component
const contentTableStyles = makeStyles((theme) => ({
    contentWrapper: {
        minWidth: 275,
        maxWidth: 275,
        flex: 'initial',
        position: 'relative',
        '@media screen and (max-width: 767.95px)': {
            display: 'none',
        },
    },
    contentPositioner: {
        position: 'sticky',
        top: 64,
        maxHeight: 'calc(100vh - 64px)',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
    },
    contentTitle: {
        paddingLeft: theme.spacing(1),
        borderLeft: '4px solid transparent',
    },
    contentList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    contentItem: {
        // Font
        fontSize: 14,
        color: 'unset',
        textDecoration: 'none !important',

        // Display
        boxSizing: 'content-box',
        display: 'block',

        // Spacing
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingLeft: theme.spacing(1),
        borderLeft: '4px solid transparent',

        // Behaviors
        '&.active': {
            borderLeft: `4px solid ${theme.palette.primary.main} !important`,
            fontWeight: 600,
        },

        '&:hover': {
            borderLeft: `4px solid ${theme.palette.grey[400]}`,
        },
    },
    nestedItem: {
        paddingLeft: `${theme.spacing(2.5)}px !important`,
    },
}));

// Generates a table of contents from Markdown
function TableOfContents({ headings }) {
    // Media query to determine if we should render at all
    const isVisible = useMediaQuery('(min-width:768px)', {
        defaultMatches: true,
    });

    // contentIndex is the index of the heading of the on-screen content
    const [contentIndex, setContentIndex] = useState(-1);

    // Layout effect to determine what the user is looking at
    useLayoutEffect(() => {
        // Check if we should do anything at all
        if (!isVisible) {
            return;
        }

        // Array of the scroll offset for each heading
        let scrolls;

        // Scroll event handler
        function handleScroll() {
            // Read current window scroll position, and add small offset for aesthetic behavior
            const target = scrollTop() + 100;

            // Determine what were looking at
            const prevClosest =
                contentIndex >= 0 && contentIndex < scrolls.length
                    ? scrolls[contentIndex]
                    : -1;
            let closestResult = contentIndex;

            // Look at the neighbors of our previous active index in the direction we scrolled.
            if (target <= 100 || (scrolls.length > 0 && target < scrolls[0])) {
                // We are reasonably above the content, so nothing is active
                closestResult = -1;
            } else if (target === prevClosest) {
                // We can quit early if we are equal
                return;
            } else if (target > prevClosest) {
                for (let i = contentIndex + 1; i < scrolls.length; i++) {
                    // Active header is lowest one not below our target
                    if (target >= scrolls[i]) {
                        closestResult = i;
                    } else {
                        break;
                    }
                }
            } else {
                for (let i = contentIndex - 1; i >= 0; i--) {
                    // Active header is first header above our target
                    if (target >= scrolls[i]) {
                        closestResult = i;
                        break;
                    }
                }
            }

            // Perform update only if necessary
            if (contentIndex !== closestResult) {
                // Store new active header to state
                setContentIndex(closestResult);

                // Scroll to new active header if necessary
                if (scrollingRef.current) {
                    if (closestResult >= 0) {
                        // Grab element
                        const id = `${urlify(
                            headings[closestResult].value
                        )}-toc-link`;
                        const activeElement = document.getElementById(id);

                        if (!activeElement) {
                            return;
                        }

                        // Compare the scroll height
                        const viewportHeight = winHeight();
                        const distanceFromTop = activeElement.getBoundingClientRect()
                            .top;
                        if (distanceFromTop < viewportHeight * 0.25) {
                            // Element is too high — scroll it down 2/3vh
                            const targetScroll =
                                distanceFromTop - viewportHeight * 0.667;
                            scrollingRef.current.scrollTop += targetScroll;
                        } else if (distanceFromTop > viewportHeight * 0.75) {
                            // Element is too low — scroll it up to 1/3vh
                            const targetScroll =
                                distanceFromTop - viewportHeight * 0.333;
                            scrollingRef.current.scrollTop += targetScroll;
                        }
                    } else {
                        // Reset scroll
                        scrollingRef.current.scrollTop = 0;
                    }
                }
            }
        }

        // Resize event handler
        function handleResize() {
            // Compute scroll offset of each header
            scrolls = headings.map(({ value }) => {
                const element = document.getElementById(urlify(value));
                return (element && element.offsetTop) || 0;
            });

            handleScroll();
        }

        // Register event handlers on component mount
        window.addEventListener('scroll', handleScroll, false);
        window.addEventListener('resize', handleResize, false);

        // Invoke resize handler to start
        handleResize();

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [contentIndex, headings, isVisible]);

    // Preprocess headings and group by depth (i.e. how nested they are)
    const groupedHeadings = useMemo(() => {
        const result = [];
        let depthBuffer = [];
        headings.forEach(({ value, depth }, i) => {
            // Elements deeper than 1 get pushed to depth buffer
            if (depth > 2) {
                // Add heading to nested sublist
                depthBuffer.push({ value, index: i });
            } else {
                // Flush depth buffer if necessary
                if (depthBuffer.length > 0) {
                    result.push({ values: depthBuffer, depth: 2 });
                    depthBuffer = [];
                }

                // Add heading to list
                result.push({ values: [{ value, index: i }], depth: 1 });
            }
        });

        // Flush depth buffer if necessary
        if (depthBuffer.length > 0) {
            result.push({ values: depthBuffer, depth: 2 });
        }

        return result;
    }, [headings]);

    // Classes for styling
    const {
        contentWrapper,
        contentPositioner,
        contentTitle,
        contentList,
        contentItem,
        nestedItem,
    } = contentTableStyles();

    // Ref for tracking the scrolling div
    const scrollingRef = useRef();

    // Check to see if we should render nothing
    if (!isVisible) {
        return null;
    }

    // Otherwise, render table of contents
    return (
        <div className={contentWrapper}>
            <div className={contentPositioner} ref={scrollingRef}>
                <Content>
                    <Typography variant='subtitle1' className={contentTitle}>
                        {`Contents`}
                    </Typography>
                    <ul className={contentList}>
                        {groupedHeadings.map(({ values, depth }, i) => {
                            if (depth > 1) {
                                // Nested headers are arrays of values
                                return (
                                    <li key={`${i}-${depth}`}>
                                        <ul className={contentList}>
                                            {values.map(({ value, index }) => (
                                                <Typography
                                                    color={
                                                        index === contentIndex
                                                            ? 'textPrimary'
                                                            : 'textSecondary'
                                                    }
                                                    component='li'
                                                    key={value}
                                                >
                                                    <a
                                                        className={clsx(
                                                            contentItem,
                                                            nestedItem,
                                                            index ===
                                                                contentIndex &&
                                                                'active'
                                                        )}
                                                        id={`${urlify(
                                                            value
                                                        )}-toc-link`}
                                                        href={`#${urlify(
                                                            value
                                                        )}`}
                                                    >
                                                        {value}
                                                    </a>
                                                </Typography>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            } else {
                                // Primary header at depth 1 is a one-element array
                                const { value, index } = values[0];
                                return (
                                    <Typography
                                        color={
                                            index === contentIndex
                                                ? 'textPrimary'
                                                : 'textSecondary'
                                        }
                                        component='li'
                                        key={value}
                                    >
                                        <a
                                            className={clsx(
                                                contentItem,
                                                index === contentIndex &&
                                                    'active'
                                            )}
                                            id={`${urlify(value)}-toc-link`}
                                            href={`#${urlify(value)}`}
                                        >
                                            {value}
                                        </a>
                                    </Typography>
                                );
                            }
                        })}
                    </ul>
                </Content>
            </div>
        </div>
    );
}

export default TableOfContents;

// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import {
    AnchorLink,
    PageLayout,
    ProjectGallery,
    HoverImage,
    MarkdownPage,
    GalleryCards,
    InternalLink,
} from 'components';
import { urlify, injectProjectHeaders } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const galleryStyles = makeStyles(() => ({
    textOverflow: {
        overflowWrap: 'break-word',
    },
}));

// Emoji prizes
const prizes = ['🥇', '🥈', '🥉', '🌟', '⭐', '✨'];

const injectPrizeIcon = (text) => {
    const items = text.split(',');
    if (items.length > 1) {
        const place = parseInt(items.splice(0, 1));
        if (place >= 1 && place <= 6) {
            const icon = prizes[place - 1];
            const name = items.join('');
            return `${icon} ${name}`;
        }
    }

    return text;
};

// Generate gallery from markdown content
function GalleryTemplate({ data }) {
    // Custom class
    const { textOverflow } = galleryStyles();

    // Extract Frontmatter
    const { id, shortTitle, longTitle } = data.gallery.frontmatter;

    // Custom components to generate from markdown html
    const customComponents = {
        td: ({ children, ...props }) => (
            <Typography
                variant='subtitle1'
                component='td'
                color='textSecondary'
                className={textOverflow}
                {...props}
            >
                {children}
            </Typography>
        ),
        img: (props) => <HoverImage {...props} />,
        h3: ({ children }) => {
            const text = injectPrizeIcon(children[0]);

            // Corner case (should not shot HTML)
            if (
                text === 'project-winners-headers' ||
                text === 'project-mentions-headers'
            ) {
                return null;
            }

            return (
                <Typography variant='h6'>
                    <AnchorLink id={urlify(text)}>{text}</AnchorLink>
                </Typography>
            );
        },

        ['project-winners']: () => <ProjectGallery hasAward />,
        ['project-mentions']: () => <ProjectGallery />,
        galleries: () => <GalleryCards excludeID={id} />,
    };

    const { headings } = data.gallery;
    const newHeadings = headings
        .map((heading) => {
            // Inject prize icon
            const { value, depth } = heading;
            if (depth > 1) {
                heading.value = injectPrizeIcon(value);
            }

            // Inject project headings
            if (value === 'project-winners-headers') {
                return injectProjectHeaders(data.projects, true, depth);
            } else if (value === 'project-mentions-headers') {
                return injectProjectHeaders(data.projects, false, depth);
            }

            return heading;
        })
        .flat();

    // Render
    return (
        <PageLayout title={`${shortTitle} Gallery`}>
            <MarkdownPage
                title={`${longTitle} Art Contest Selection`}
                subtitle={
                    <Breadcrumbs aria-label='breadcrumb'>
                        <InternalLink color='inherit' to='/gallery'>
                            {'Gallery'}
                        </InternalLink>
                        <Typography>{longTitle}</Typography>
                    </Breadcrumbs>
                }
                markdown={{ ...data.gallery, headings: newHeadings }}
                components={customComponents}
            ></MarkdownPage>
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query($slug: String!) {
        gallery: markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            headings {
                value
                depth
            }
            frontmatter {
                id
                shortTitle
                longTitle
            }
        }
        projects: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Gallery\\/Galleries\\/projects/.*\\.md$/"}
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        visibilityRank
                        instructorAwards
                        instructorMentions
                        studentAwards
                        studentMentions
                    }
                }
            }
        }
    }
`;

export default GalleryTemplate;

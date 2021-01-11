// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { AnchorLink, PageLayout, HoverImage, MarkdownPage } from 'components';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const galleryStyles = makeStyles(() => ({
    textOverflow: {
        overflowWrap: 'break-word',
    },
}));

// Generate gallery from markdown content
function Gallery({ data }) {
    // Custom class
    const { textOverflow } = galleryStyles();

    // Emoji prizes
    const prizes = ["🥇", "🥈", "🥉", "🌟", "⭐", "✨"];

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
        img: (props) => (
            <HoverImage {...props} />
        ),
        h3: ({ children }) => (
            <Typography variant='h5' gutterBottom>
                <AnchorLink id={urlify(children[0])}>{children}</AnchorLink>
            </Typography>
        ),
        student: ({ children, gallery, place }) => (
            <Typography variant='h6'>
                <AnchorLink id={`${urlify(children[0])}-gallery-${gallery}`}>
                    {place && place >= 1 && place <= 6 && (
                        <span>{`${prizes[place - 1]} `}</span>
                    )}
                    {children}
                </AnchorLink>
            </Typography>
        )
    };

    // Render
    return (
        <PageLayout title={'Gallery'}>
            <MarkdownPage
                title={'Art Gallery'}
                markdown={data.markdownRemark}
                components={customComponents}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query {
        markdownRemark(
            fileAbsolutePath: {regex: "/Gallery\\/Gallery\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }
    }
`;

export default Gallery;

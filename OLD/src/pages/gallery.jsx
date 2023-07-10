// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { PageLayout, MarkdownPage, GalleryCards } from 'components';

// Generate gallery from markdown content
function Gallery({ data }) {
    const customComponents = {
        galleries: () => <GalleryCards />,
    };

    // Render
    return (
        <PageLayout title={'Gallery'}>
            <MarkdownPage
                title={'Art Gallery'}
                markdown={data.gallery}
                tableOfContents={false}
                components={customComponents}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query {
        gallery: markdownRemark(
            fileAbsolutePath: {regex: "/Gallery\\/Gallery\\.md$/"}
        ) {
            htmlAst
        }
    }
`;

export default Gallery;

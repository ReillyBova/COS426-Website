// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { PageLayout, MarkdownPage } from 'components';

// Generate gallery from markdown content
function Gallery({ data }) {
    // Render
    return (
        <PageLayout title={'Gallery'}>
            <MarkdownPage
                title={'Art Gallery'}
                markdown={data.markdownRemark}
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

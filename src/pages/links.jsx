// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { PageLayout, MarkdownPage } from 'components';
// UI imports

// Generate exercises from markdown content
function Links({ data }) {
    // Render
    return (
        <PageLayout title={'Links'}>
            <MarkdownPage
                title={'Useful Links'}
                markdown={data.markdownRemark}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query {
        markdownRemark(
            fileAbsolutePath: {regex: "/Links\\/Links\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }
    }
`;

export default Links;

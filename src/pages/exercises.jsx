// Library imports
import React from 'react';
import { graphql } from "gatsby";
// Project imports
import { AnchorLink, PageLayout, MarkdownPage } from 'components';
import { urlify } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

// Generate exercises from markdown content
function Exercises({ data }) {

    // Custom components to generate from markdown html
    const customComponents = {
        "h1": (({ children }) => (
            <Typography variant='h6'>
                <AnchorLink id={urlify(children[0])}>
                    {children}
                </AnchorLink>
            </Typography>
        )),
    };

    // Render
    return (
        <PageLayout title={"Exercises"}>
            <MarkdownPage
                title={"Exercises"}
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
            fileAbsolutePath: {regex: "/Exercises\\/Exercises\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }
    }
`;

export default Exercises;

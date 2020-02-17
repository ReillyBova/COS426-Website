// Library imports
import React from 'react';
import { graphql } from "gatsby";
// Project imports
import { Banner, ThreeContainer, Title, Textbook, Staff, PageLayout, MarkdownPage, Coursework, CollaborationTable } from 'components';
import { NetworkScene } from 'scenes';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Custom styling for component
const homePageStyles = makeStyles(() => ({
    listSpacing: {
        '&>p': {
            marginBottom: 0,
        },
        '&>ul': {
            marginBottom: 0,
        }
    }
}));

// Home page of website
function HomePage({ data }) {
    // Custom CSS classes
    const { listSpacing } = homePageStyles();

    // Custom components to generate from markdown html
    const customComponents = {
        "textbook": (() => (<Textbook />)),
        "staff": (() => (<Staff />)),
        "coursework": (() => (<Coursework />)),
        "collaboration-table": (() => (<CollaborationTable />)),
        "li": (({ children }) => (
            <li className={listSpacing}>
                {children}
            </li>
        )),
    };

    // Render
    return (
        <PageLayout>
            <Banner height={'66vh'}>
                <Title semester={data.site.siteMetadata.courseSettings.semester} />
                <ThreeContainer Scene={NetworkScene} />
            </Banner>
            <MarkdownPage
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
            fileAbsolutePath: {regex: "/HomePage\\/HomePage\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }
        site {
            siteMetadata {
                courseSettings {
                    semester
                }
            }
        }
    }
`;

export default HomePage;

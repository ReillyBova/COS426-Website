// Library imports
import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import clsx from 'clsx';
// Project imports
import { PageLayout, ExternalLink, MarkdownPage } from 'components';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

const assignmentStyles = makeStyles((theme) => ({
    imageShadow: {
        boxShadow: `${theme.shadows[4]} !important`,
        transition:
            'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        '&:hover': {
            boxShadow: `${theme.shadows[8]} !important`,
        },
    },
}));

// A template that generating assignment specs from markdown content
function AssignmentTemplate({ data }) {
    const { htmlAst, frontmatter, headings } = data.markdownRemark;
    const { assignmentNumber, assignmentName, submitURL } = frontmatter;
    const { imageShadow } = assignmentStyles();

    // Custom components to generate from markdown html
    const customComponents = {
        'assignment-link': ({ children }) => (
            <ExternalLink
                to={withPrefix(`zips/Assignment-${assignmentNumber}.zip`)}
            >
                {children}
            </ExternalLink>
        ),
        'submit-link': ({ children }) => (
            <ExternalLink to={submitURL}>{children}</ExternalLink>
        ),
        img: ({ className, ...props }) => (
            <img className={clsx(className, imageShadow)} {...props} />
        ),
    };

    // Render
    return (
        <PageLayout title={`Assignment ${assignmentNumber}`}>
            <MarkdownPage
                title={`Assignment ${assignmentNumber}: ${assignmentName}`}
                markdown={{ htmlAst, headings }}
                components={customComponents}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            frontmatter {
                assignmentName
                assignmentNumber
                submitURL
            }
            headings {
                value
                depth
            }
        }
    }
`;

export default AssignmentTemplate;

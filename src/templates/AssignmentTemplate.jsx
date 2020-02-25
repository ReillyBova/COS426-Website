// Library imports
import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import clsx from 'clsx';
// Project imports
import {
    PageLayout,
    ExternalLink,
    MarkdownPage,
    ScoreCalculator,
} from 'components';
import { semesterOffsetToDateString } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const assignmentStyles = makeStyles((theme) => ({
    imageShadow: {
        width: '100%',
        boxShadow: `${theme.shadows[4]} !important`,
        transition:
            'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        '&:hover': {
            boxShadow: `${theme.shadows[8]} !important`,
        },
    },
    codeStyle: {
        fontSize: 16,
        lineHeight: '1rem',
    },
}));

// A template that generating assignment specs from markdown content
function AssignmentTemplate({ data }) {
    const { htmlAst, frontmatter, headings } = data.markdownRemark;
    const {
        assignmentNumber,
        assignmentName,
        submitURL,
        dueWeek,
        dueDay,
        dueTime,
        requiredPoints,
        optionalPoints,
        dimReturnTop,
        dimReturnBottom,
    } = frontmatter;
    const { imageShadow, codeStyle } = assignmentStyles();

    // Custom components to generate from markdown html
    const customComponents = {
        td: ({ children, ...props }) => (
            <Typography
                variant='subtitle1'
                component='td'
                color='textSecondary'
                {...props}
            >
                {children}
            </Typography>
        ),
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
        total: () => (
            <code className={codeStyle}>{requiredPoints + optionalPoints}</code>
        ),
        required: () => <code className={codeStyle}>{requiredPoints}</code>,
        optional: () => <code className={codeStyle}>{optionalPoints}</code>,
        dim: () => (
            <code
                className={codeStyle}
                dangerouslySetInnerHTML={{
                    __html: `&frac${dimReturnTop}${dimReturnBottom};`,
                }}
            />
        ),
        'score-calculator': () => (
            <ScoreCalculator
                requiredPoints={requiredPoints}
                optionalPoints={optionalPoints}
                dimFactor={dimReturnTop / dimReturnBottom}
            />
        ),
    };

    // Compute due date string for the assignment
    const date = semesterOffsetToDateString(dueWeek - 1, dueDay);
    const dueString = `Due: ${date} at ${dueTime}`;

    // Render
    return (
        <PageLayout title={`Assignment ${assignmentNumber}`}>
            <MarkdownPage
                title={`Assignment ${assignmentNumber}: ${assignmentName}`}
                subtitle={dueString}
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
                dueWeek
                dueDay
                dueTime
                submitURL
                requiredPoints
                optionalPoints
                dimReturnTop
                dimReturnBottom
            }
            headings {
                value
                depth
            }
        }
    }
`;

export default AssignmentTemplate;

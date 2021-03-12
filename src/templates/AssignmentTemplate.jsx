// Library imports
import React from 'react';
import { graphql, withPrefix } from 'gatsby';
// Project imports
import {
    PageLayout,
    ExternalLink,
    HoverImage,
    MarkdownPage,
    ScoreCalculator,
} from 'components';
import { semesterOffsetToDateString } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const assignmentStyles = makeStyles(() => ({
    codeStyle: {
        fontSize: 16,
        lineHeight: '1rem',
    },
    textOverflow: {
        overflowWrap: 'break-word',
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
    const { codeStyle, textOverflow } = assignmentStyles();

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
        'assignment-link': ({ children }) => (
            <ExternalLink
                to={
                    assignmentNumber < 0
                        ? withPrefix(
                              `zips/COS-426-${assignmentName.replace(
                                  /\s+/g,
                                  '-'
                              )}.zip`
                          )
                        : withPrefix(
                              `zips/COS-426-Assignment-${assignmentNumber}.zip`
                          )
                }
            >
                {children}
            </ExternalLink>
        ),
        'submit-link': ({ children }) => (
            <ExternalLink to={submitURL}>{children}</ExternalLink>
        ),
        img: (props) => <HoverImage {...props} />,
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
    let date = semesterOffsetToDateString(dueWeek - 1, dueDay);
    if (dueWeek > 6 && (dueDay === "Monday" || dueDay === "Tuesday")) {
        date = semesterOffsetToDateString(dueWeek, dueDay);
    }
    const dueString = `Due: ${date} at ${dueTime}`;

    // Compute strings for titles
    let shortTitle, fullTitle;
    if (assignmentNumber >= 0) {
        shortTitle = `Assignment ${assignmentNumber}`;
        fullTitle = `Assignment ${assignmentNumber}: ${assignmentName}`;
    } else {
        shortTitle = assignmentName;
        fullTitle = assignmentName;
    }

    // Render
    return (
        <PageLayout title={shortTitle}>
            <MarkdownPage
                title={fullTitle}
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

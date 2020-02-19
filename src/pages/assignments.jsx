// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { AssignmentCard, PageLayout, Content } from 'components';
import { semesterOffsetToDateString } from 'utils';
import { AssignmentGIFs } from 'gifs';
// UI imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Assignments({ data }) {
    // Extract data from query and sort by assignment number
    const assignmentData = data.assignments.edges;
    assignmentData.sort((a, b) => {
        const weekA = a.node.frontmatter.dueWeek;
        const weekB = b.node.frontmatter.dueWeek;

        // Corner case for same week
        if (weekA === weekB) {
            // Order by day
            return a.node.frontmatter.dueDay - b.node.frontmatter.dueDay;
        }
        // Otherwise, order by week
        return weekA - weekB;
    });

    // Map images and gifs by name
    const imageMap = {};
    data.featuredImages.nodes.forEach(({ name, childImageSharp }) => {
        imageMap[name] = childImageSharp.fluid;
    });

    const gifMap = {};
    Object.entries(AssignmentGIFs).forEach(([name, gif]) => {
        gifMap[name] = gif;
    });

    // Render
    return (
        <PageLayout title={'Assignments'}>
            <Content>
                <Typography variant='h3' gutterBottom>
                    {'Assignments'}
                </Typography>
                <Grid container spacing={3}>
                    {assignmentData.map(({ node }) => {
                        const { frontmatter, fields } = node;
                        const { imageName, dueWeek, dueDay, dueTime } = frontmatter;
                        const { slug } = fields;

                        // Source image if possible
                        const fluidImage = imageMap[imageName];
                        const gifImage = gifMap[imageName];

                        // Compute due date string
                        const date = semesterOffsetToDateString(dueWeek - 1, dueDay);

                        return (
                            <Grid key={slug} item md={4} sm={6} xs={12}>
                                <AssignmentCard
                                    slug={slug}
                                    frontmatter={frontmatter}
                                    fluidImage={fluidImage}
                                    gifImage={gifImage}
                                    dueDate={`${date} at ${dueTime}`}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Content>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query {
        assignments: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Assignments\\/.*\\.md$/"},
                frontmatter: { visible: { eq: true } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        assignmentName
                        assignmentNumber
                        dueWeek
                        dueDay
                        dueTime
                        imageName
                        submitURL
                        feedbackURL
                        available
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        featuredImages: allFile(
            filter: {
                sourceInstanceName: { eq: "images" }
                relativeDirectory: { eq: "assignments" }
            }
        ) {
            nodes {
                name
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    }
`;

export default Assignments;

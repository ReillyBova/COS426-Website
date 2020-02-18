// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { AssignmentCard, PageLayout, Content } from 'components';
// UI imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Assignments({ data }) {
    // Extract data from query and sort by assignment number
    const assignmentData = data.assignments.edges;
    assignmentData.sort((a, b) => {
        const numberA = a.node.frontmatter.assignmentNumber;
        const numberB = b.node.frontmatter.assignmentNumber;

        // Corner case for non assignments
        if (numberB < 0 || numberA < 0) {
            return numberB - numberA;
        }
        // Otherwise, order by number
        return numberA - numberB;
    });

    // Map images by name
    const imageMap = {};
    data.featuredImages.nodes.forEach(({ name, childImageSharp }) => {
        imageMap[name] = childImageSharp.fluid;
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
                        const { imageName } = frontmatter;
                        const { slug } = fields;
                        const fluidImage = imageMap[imageName];

                        return (
                            <Grid key={slug} item md={4} sm={6} xs={12}>
                                <AssignmentCard
                                    slug={slug}
                                    frontmatter={frontmatter}
                                    fluidImage={fluidImage}
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
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Assignments\\/.*\\.md$/"}
            }
        ) {
            edges {
                node {
                    frontmatter {
                        assignmentName
                        assignmentNumber
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

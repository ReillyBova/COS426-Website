// Libary imports
import React, { forwardRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// UI imports
import Grid from '@material-ui/core/Grid';
// Local imports
import ProfileCard from './ProfileCard';

// Query fragment for instructor data
export const instructorDataFragment = graphql`
    fragment InstructorDataFragment on MarkdownRemark {
        frontmatter {
            name
            role
            image
            email
            featuredURL
            githubURL
            websiteURL
            officeHours
        }
    }
`;

const StaffGrid = forwardRef((props, ref) => {
    // Load instructors from content
    const { professors, gradTAs, undergradTAs, headshots } = useStaticQuery(
        graphql`
            query {
                professors: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {regex: "/\\/src\\/content\\/People\\/.*\\.md$/"},
                        frontmatter: {role: {eq: "Professor"}}
                    },
                    sort: {fields: frontmatter___name}
                ) {
                    nodes {
                        ...InstructorDataFragment
                    }
                }
                gradTAs: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {regex: "/\\/src\\/content\\/People\\/.*\\.md$/"},
                        frontmatter: {role: {eq: "Graduate TA"}}
                    },
                    sort: {fields: frontmatter___name}
                ) {
                    nodes {
                        ...InstructorDataFragment
                    }
                }
                undergradTAs: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {regex: "/\\/src\\/content\\/People\\/.*\\.md$/"},
                        frontmatter: {role: {eq: "Undergraduate TA"}}
                    },
                    sort: {fields: frontmatter___name}
                ) {
                    nodes {
                        ...InstructorDataFragment
                    }
                }
                headshots: allFile(
                    filter: {
                        sourceInstanceName: { eq: "images" }
                        relativeDirectory: { eq: "people" }
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
        `
    );

    // Create of map of images
    const imageMap = {};
    headshots.nodes.forEach(
        ({ name, childImageSharp }) => (imageMap[name] = childImageSharp.fluid)
    );
    return (
        <Grid container spacing={3} justify='space-around' ref={ref} {...props}>
            {professors.nodes.map(({ frontmatter }, i) => (
                <Grid
                    key={`professors-${frontmatter.name}-${i}`}
                    item
                    md={4}
                    lg={3}
                >
                    <ProfileCard
                        name={frontmatter.name}
                        role={frontmatter.role}
                        image={
                            frontmatter.image
                                ? imageMap[frontmatter.image]
                                : null
                        }
                        email={frontmatter.email}
                        link={frontmatter.featuredURL}
                        github={frontmatter.githubURL}
                        website={frontmatter.websiteURL}
                        officeHours={frontmatter.officeHours}
                    />
                </Grid>
            ))}
            {gradTAs.nodes.map(({ frontmatter }, i) => (
                <Grid
                    key={`gradTAs-${frontmatter.name}-${i}`}
                    item
                    md={4}
                    lg={3}
                >
                    <ProfileCard
                        name={frontmatter.name}
                        role={frontmatter.role}
                        image={
                            frontmatter.image
                                ? imageMap[frontmatter.image]
                                : null
                        }
                        email={frontmatter.email}
                        link={frontmatter.featuredURL}
                        github={frontmatter.githubURL}
                        website={frontmatter.websiteURL}
                        officeHours={frontmatter.officeHours}
                    />
                </Grid>
            ))}
            {undergradTAs.nodes.map(({ frontmatter }, i) => (
                <Grid
                    key={`undergrad-${frontmatter.name}-${i}`}
                    item
                    md={4}
                    lg={3}
                >
                    <ProfileCard
                        name={frontmatter.name}
                        role={frontmatter.role}
                        image={
                            frontmatter.image
                                ? imageMap[frontmatter.image]
                                : null
                        }
                        email={frontmatter.email}
                        link={frontmatter.featuredURL}
                        github={frontmatter.githubURL}
                        website={frontmatter.websiteURL}
                        officeHours={frontmatter.officeHours}
                    />
                </Grid>
            ))}
        </Grid>
    );
});

export default StaffGrid;

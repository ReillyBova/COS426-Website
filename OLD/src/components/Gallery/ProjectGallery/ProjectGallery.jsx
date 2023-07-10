// Library imports
import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { ProjectCard } from 'components';
import { ProjectGIFs } from 'gifs';
import { hasProjectAward, visibilityCmp } from 'utils';

// Generate project gallery cards markdown content
function ProjectGallery({ hasAward }) {
    const { projects, projectImages } = useStaticQuery(
        graphql`
            query {
                projects: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {regex: "/\\/src\\/content\\/Gallery\\/Galleries\\/projects/.*\\.md$/"}
                    }
                ) {
                    edges {
                        node {
                            htmlAst
                            frontmatter {
                                title
                                authors
                                imageName
                                demoURL
                                repoURL
                                writeupURL
                                visibilityRank
                                instructorAwards
                                instructorMentions
                                studentAwards
                                studentMentions
                            }
                        }
                    }
                }
                projectImages: allFile(
                    filter: {
                        sourceInstanceName: { eq: "projects" }
                        relativeDirectory: { eq: "images" }
                    }
                ) {
                    nodes {
                        name
                        childImageSharp {
                            fluid(maxWidth: 480, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        `
    );

    // Build image map for projects
    const imageMap = {};
    projectImages.nodes.forEach(({ name, childImageSharp }) => {
        imageMap[name] = childImageSharp.fluid;
    });
    const gifMap = {};
    Object.entries(ProjectGIFs).forEach(([name, gif]) => {
        gifMap[name] = gif;
    });

    // Filter projects based on winners vs mentions
    let filteredProjects;
    if (hasAward) {
        filteredProjects = projects?.edges
            ?.filter(hasProjectAward)
            .sort(visibilityCmp);
    } else {
        filteredProjects = projects?.edges
            ?.filter((project) => !hasProjectAward(project))
            .sort(visibilityCmp);
    }

    // Render
    return (
        <Fragment>
            {filteredProjects.map(({ node }) => {
                const { title, imageName } = node.frontmatter;
                return (
                    <ProjectCard
                        project={node}
                        fluidImage={imageMap[imageName]}
                        gifImage={gifMap[imageName]}
                        key={title}
                    />
                );
            })}
        </Fragment>
    );
}

export default ProjectGallery;

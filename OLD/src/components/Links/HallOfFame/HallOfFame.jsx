// Library imports
import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { ProjectCard, AnchorLink } from 'components';
import { ProjectGIFs } from 'gifs';
import {
    urlify,
    extractSelectionYears,
    buildSelectionHeader,
    visibilityCmp,
} from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

// Generate gallery from markdown content
function HallOfFame() {
    const { hallOfFame, hallOfFameImages } = useStaticQuery(
        graphql`
            query {
                hallOfFame: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {regex: "/\\/src\\/content\\/HallOfFame\\/.*\\.md$/"}
                    }
                ) {
                    edges {
                        node {
                            htmlAst
                            frontmatter {
                                title
                                authors
                                year
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
                hallOfFameImages: allFile(
                    filter: {
                        sourceInstanceName: { eq: "content" }
                        relativeDirectory: { eq: "HallOfFame/images" }
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
    hallOfFameImages.nodes.forEach(({ name, childImageSharp }) => {
        imageMap[name] = childImageSharp.fluid;
    });
    const gifMap = {};
    Object.entries(ProjectGIFs).forEach(([name, gif]) => {
        gifMap[name] = gif;
    });

    const selectionYears = extractSelectionYears(hallOfFame.edges);

    // Render
    return (
        <Fragment>
            {selectionYears.map((year) => {
                const projectSelection = [...hallOfFame.edges].filter(
                    ({ node }) => node.frontmatter.year === year
                );

                const selectionHeaderText = buildSelectionHeader(year);
                const selectionHeader = (
                    <Typography variant='h6' key={`${year}-header`}>
                        <AnchorLink id={urlify(selectionHeaderText)}>
                            {selectionHeaderText}
                        </AnchorLink>
                    </Typography>
                );

                return [
                    selectionHeader,
                    ...projectSelection.sort(visibilityCmp).map(({ node }) => {
                        const { title, imageName } = node.frontmatter;
                        return (
                            <ProjectCard
                                project={node}
                                fluidImage={imageMap[imageName]}
                                gifImage={gifMap[imageName]}
                                key={title}
                            />
                        );
                    }),
                ];
            })}
        </Fragment>
    );
}

export default HallOfFame;

// Library imports
import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { ProjectCard, AnchorLink } from 'components';
import {
    urlify,
    extractSelectionYears,
    buildSelectionHeader,
    visibilityCmp,
} from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

const processHallOfFameUrls = (site) => {
    const result = {};

    if (site?.siteMetadata?.hallOfFameUrlRoots?.length > 0) {
        site.siteMetadata.hallOfFameUrlRoots.forEach(([year, url]) => {
            result[year] = url;
        });
    }

    return result;
};

// Generate gallery from markdown content
function HallOfFame() {
    const { hallOfFame, site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        hallOfFameUrlRoots
                    }
                }
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
                                imageType
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
            }
        `
    );

    const hallOfFameUrlRoots = processHallOfFameUrls(site);

    const selectionYears = extractSelectionYears(hallOfFame.edges);

    console.log(selectionYears)

    // Render
    return (
        <Fragment>
            {selectionYears.map((year) => {
                const projectSelection = [...hallOfFame.edges].filter(
                    ({ node }) => node.frontmatter.year === year
                );

                const imageURLRoot = hallOfFameUrlRoots[year];

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
                        const { title, imageName, imageType } = node.frontmatter;

                        const staticImageOrGifUrl = imageURLRoot && imageName && imageType && `${imageURLRoot}/${imageName}.${imageType}`;

                        return (
                            <ProjectCard
                                project={node}
                                gifImage={staticImageOrGifUrl}
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

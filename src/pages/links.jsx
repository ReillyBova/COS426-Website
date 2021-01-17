// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { PageLayout, MarkdownPage, HallOfFame } from 'components';
import { injectProjectHeaders, extractSelectionYears, buildSelectionHeader } from 'utils';

// Generate exercises from markdown content
function Links({ data }) {
    // Extract unique descending hall of fame selection years
    const selectionYears = extractSelectionYears(data.hallOfFame.edges);

    const newHeadings = data.links.headings
        .map((heading) => {
            const { value, depth } = heading;
            // Inject project headings
            if (value === 'hall-of-fame-headers') {
                return selectionYears
                    .map((year) => {
                        const projectSelection = [
                            ...data.hallOfFame.edges,
                        ].filter(({ node }) => node.frontmatter.year === year);

                        const selectionHeader = {
                            value: buildSelectionHeader(year),
                            depth: depth - 2,
                        };
                        return [
                            selectionHeader,
                            ...injectProjectHeaders(
                                projectSelection,
                                true,
                                depth - 1
                            ),
                        ];
                    })
                    .flat();
            }

            return heading;
        })
        .flat();

    // Custom components to generate from markdown html
    const customComponents = {
        h4: () => null,
        ['hall-of-fame']: () => <HallOfFame />,
    };

    // Render
    return (
        <PageLayout title={'Links'}>
            <MarkdownPage
                title={'Useful Links'}
                markdown={{ ...data.links, headings: newHeadings }}
                components={customComponents}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query {
        links: markdownRemark(
            fileAbsolutePath: {regex: "/Links\\/Links\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }

        hallOfFame: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/HallOfFame\\/.*\\.md$/"}
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        year
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
`;

export default Links;

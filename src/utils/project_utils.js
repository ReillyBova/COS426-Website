// Seperate out award winning projects
export const hasProjectAward = ({ node }) => {
    const {
        instructorAwards,
        instructorMentions,
        studentAwards,
        studentMentions,
    } = node.frontmatter;
    return (
        instructorAwards ||
        instructorMentions ||
        studentAwards ||
        studentMentions
    );
};

// Order by visibility, then alphabetic
export const visibilityCmp = (propsA, propsB) => {
    const visibilityRankA =
        parseInt(propsA.node.frontmatter.visibilityRank) || 0;
    const visibilityRankB =
        parseInt(propsB.node.frontmatter.visibilityRank) || 0;

    if (visibilityRankB !== visibilityRankA) {
        return visibilityRankB - visibilityRankA;
    }

    const titleA = propsA.node.frontmatter.title;
    const titleB = propsB.node.frontmatter.title;

    return titleA > titleB ? 1 : -1;
};

// Inject project headers into headings array
export const injectProjectHeaders = (projectsEdges, hasAward, depth) => {
    const projects = projectsEdges
        ?.filter(
            hasAward ? hasProjectAward : (project) => !hasProjectAward(project)
        )
        .sort(visibilityCmp);

    return projects.map(({ node }) => {
        return { value: node.frontmatter.title, depth: depth };
    });
};

// Extract unique years from graphql project query
export const extractSelectionYears = (projectsEdges) =>
    [
        ...new Set(
            projectsEdges
                .map(({ node }) => parseInt(node.frontmatter.year))
                .filter((year) => !!year)
        ),
    ].sort((a, b) => b - a);

export const buildSelectionHeader 
 = (year) => `Spring ${year} Selection`;

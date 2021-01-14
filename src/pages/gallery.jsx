// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import {
    AnchorLink,
    PageLayout,
    HoverImage,
    MarkdownPage,
    Project,
} from 'components';
import { urlify } from 'utils';
import { ProjectGIFs } from 'gifs';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const galleryStyles = makeStyles(() => ({
    textOverflow: {
        overflowWrap: 'break-word',
    },
}));

// Generate gallery from markdown content
function Gallery({ data }) {
    // Custom class
    const { textOverflow } = galleryStyles();

    // Emoji prizes
    const prizes = ['🥇', '🥈', '🥉', '🌟', '⭐', '✨'];

    // Build image map for projects
    const imageMap = {};
    data.projectImages.nodes.forEach(({ name, childImageSharp }) => {
        imageMap[name] = childImageSharp.fluid;
    });
    const gifMap = {};
    Object.entries(ProjectGIFs).forEach(([name, gif]) => {
        gifMap[name] = gif;
    });

    // Seperate out award winning projects
    const isWinner = ({ node }) => {
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
    const visibilityCmp = (propsA, propsB) => {
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

    const projectWinners = data.projects?.edges
        ?.filter(isWinner)
        .sort(visibilityCmp);
    const projectMentions = data.projects?.edges
        ?.filter((project) => !isWinner(project))
        .sort(visibilityCmp);

    // Function to turn projects into JSX
    const makeProjects = ({ node }) => {
        const { title, imageName } = node.frontmatter;
        return (
            <Project
                project={node}
                fluidImage={imageMap[imageName]}
                gifImage = {gifMap[imageName]}
                key={title}
            />
        );
    };

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
        img: (props) => <HoverImage {...props} />,
        h3: ({ children }) => (
            <Typography variant='h5' gutterBottom>
                <AnchorLink id={urlify(children[0])}>{children}</AnchorLink>
            </Typography>
        ),
        student: ({ children, gallery, place }) => (
            <Typography variant='h6'>
                <AnchorLink id={`${urlify(children[0])}-gallery-${gallery}`}>
                    {place && place >= 1 && place <= 6 && (
                        <span>{`${prizes[place - 1]} `}</span>
                    )}
                    {children}
                </AnchorLink>
            </Typography>
        ),
        ['project-winners']: () => {
            return projectWinners.map(makeProjects);
        },
        ['project-mentions']: () => {
            return projectMentions.map(makeProjects);
        },
    };

    // Render
    return (
        <PageLayout title={'Gallery'}>
            <MarkdownPage
                title={'Art Gallery'}
                markdown={data.gallery}
                components={customComponents}
            />
        </PageLayout>
    );
}

// Query markdown content
export const pageQuery = graphql`
    query {
        gallery: markdownRemark(
            fileAbsolutePath: {regex: "/Gallery\\/Gallery\\.md$/"}
        ) {
            htmlAst
            headings {
              value
              depth
            }
        }

        projects: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Gallery\\/projects/.*\\.md$/"}
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
`;

export default Gallery;

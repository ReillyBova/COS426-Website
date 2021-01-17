// Library imports
import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { MarkdownInjector, InternalCardActionArea } from 'components';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Custom styling for component
const assignmentCardStyles = makeStyles((theme) => ({
    gridStyle: {
        padding: theme.spacing(1),
    },
    cardStyle: {
        height: '100%',
        maxWidth: 500,
        margin: 'auto',
    },
    imageStyle: {
        height: 300,
        [theme.breakpoints.down('sm')]: {
            height: 250,
        },
        overflow: 'hidden',
        '& img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
        },
        '& span': {
            minWidth: '100% !important',
            width: '100%',
            height: '100%',
        },
    },
    contentStyle: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: `${theme.spacing(1.5)}px !important`,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        color: 'white',
        background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0, 0.45))',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

// A card preview of an assignment
function GalleryCards({ excludeID }) {
    const { galleryCards, galleries } = useStaticQuery(
        graphql`
            query {
                galleryCards: markdownRemark(
                    fileAbsolutePath: {
                        regex: "/\\/src\\/content\\/Gallery\\/GalleryCards\\.md$/"
                    }
                ) {
                    htmlAst
                }
                galleries: allMarkdownRemark(
                    filter: {
                        fileAbsolutePath: {
                            regex: "/\\/src\\/content\\/Gallery\\/Galleries\\/.*\\.md$/"
                        }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                id
                                longTitle
                            }
                        }
                    }
                }
            }
        `
    );

    // Custom styling
    const {
        gridStyle,
        cardStyle,
        imageStyle,
        contentStyle,
    } = assignmentCardStyles();

    // Map images and gifs by name
    const nameMap = {};
    galleries.edges.forEach(({ node }) => {
        nameMap[node.frontmatter.id] = node.frontmatter.longTitle;
    });

    const customComponents = {
        gallery: ({ id, children }) => {
            // Corner case
            if (id === excludeID) {
                return null;
            }

            return (
                <Grid item lg={4} sm={6} xs={12}>
                    <Card className={cardStyle}>
                        <InternalCardActionArea to={`/gallery/${id}`}>
                            <div className={imageStyle}>{children}</div>
                            <CardContent className={contentStyle}>
                                <Typography variant='h4'>
                                    {nameMap[id]}
                                </Typography>
                            </CardContent>
                        </InternalCardActionArea>
                    </Card>
                </Grid>
            );
        },
        a: ({ children }) => <Fragment>{children}</Fragment>,
        p: ({ children }) => <Fragment>{children}</Fragment>,
        div: ({ children }) => <Fragment>{children}</Fragment>,
    };

    const settings = { Fragment: Fragment };

    // Render
    return (
        <Grid container spacing={3} className={gridStyle}>
            <MarkdownInjector
                markdown={galleryCards}
                components={customComponents}
                settings={settings}
            />
        </Grid>
    );
}

export default GalleryCards;

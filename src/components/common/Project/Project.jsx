// Library imports
import React from 'react';
import Image from 'gatsby-image';
// Project imports
import { AnchorLink, MarkdownInjector } from 'components';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
// Local imports
import { ProjectAwards, ProjectButton } from './subcomponents';

const projectCardStyles = makeStyles((theme) => ({
    cardStyle: {
        height: '100%',
        maxWidth: 800,
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
    imageStyle: {
        height: 250,
    },
    contentStyle: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: 0,
        flexGrow: 1,
    },
    dividerStyle: {
        margin: `${theme.spacing(1)}px 0`,
    },
    textStyle: {
        fontWeight: 400,
        overflow: 'auto',
        textOverflow: 'ellipsis',
    },
    actionsStyle: {
        paddingTop: 0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flexWrap: 'wrap',
    },
}));

// Generate a project card from markdown content
function Project({ project, fluidImage }) {
    const {
        cardStyle,
        imageStyle,
        contentStyle,
        dividerStyle,
        textStyle,
        actionsStyle,
    } = projectCardStyles();

    const {
        title,
        authors,
        demoURL,
        repoURL,
        writeupURL,
    } = project.frontmatter;

    // Set markdown component overrides for body/abstract
    const markdownComponents = {
        p: ({ children }) => (
            <Typography
                variant='body2'
                color='textSecondary'
                className={textStyle}
                paragraph
            >
                {children}
            </Typography>
        ),
    };

    return (
        <Card className={cardStyle}>
            <Image className={imageStyle} alt={title} fluid={fluidImage} />
            <CardContent className={contentStyle}>
                <Typography variant='h5' component='h6'>
                    <AnchorLink id={`${urlify(title)}-gallery-project`}>
                        {title}
                    </AnchorLink>
                </Typography>
                <Typography
                    color='textSecondary'
                    variant='subtitle2'
                    gutterBottom
                >
                    {authors}
                </Typography>
                <ProjectAwards frontmatter={project.frontmatter} />
                <Divider className={dividerStyle} />
                <MarkdownInjector
                    markdown={project}
                    components={markdownComponents}
                />
            </CardContent>
            <CardActions className={actionsStyle}>
                <ProjectButton
                    href={demoURL}
                    variant='contained'
                    startIcon={<SportsEsportsIcon />}
                >
                    {'Demo'}
                </ProjectButton>
                <ProjectButton href={repoURL} startIcon={<CodeIcon />}>
                    {'Source'}
                </ProjectButton>
                <ProjectButton
                    href={writeupURL}
                    startIcon={<DescriptionIcon />}
                >
                    {'Writeup'}
                </ProjectButton>
            </CardActions>
        </Card>
    );
}

export default Project;

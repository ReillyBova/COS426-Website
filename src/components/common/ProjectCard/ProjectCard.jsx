// Library imports
import React, { useState, useMemo } from 'react';
import Image from 'gatsby-image';
// Project imports
import { AnchorLink, AnchorTarget, MarkdownInjector } from 'components';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Local imports
import { ProjectAwards, ProjectButton, ProjectTitle } from './subcomponents';

const projectCardStyles = makeStyles((theme) => ({
    cardStyle: {
        height: '100%',
        width: '100%',
        maxWidth: 800,
        marginTop: theme.spacing(2),
        marginRight: 'auto',
        marginBottom: theme.spacing(3),
        marginLeft: 'auto',
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
    titleTextStyle: {
        flexGrow: 1,
        overflowWrap: 'anywhere',
        marginRight: 4,
    },
    dividerStyle: {
        margin: `${theme.spacing(1)}px 0`,
    },
    textStyle: {
        fontWeight: 400,
        overflowWrap: 'anywhere',
    },
    desktopBodyStyle: {
        '@media screen and (min-width: 768px)': {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    mobileBodyStyle: {
        display: 'none',
        '@media screen and (min-width: 768px)': {
            [theme.breakpoints.down('sm')]: {
                display: 'block',
            },
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    actionsStyle: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flexWrap: 'wrap',
    },
}));

// Generate a project card from markdown content
function ProjectCard({ project, fluidImage, gifImage }) {
    const {
        cardStyle,
        imageStyle,
        contentStyle,
        titleTextStyle,
        desktopBodyStyle,
        mobileBodyStyle,
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

    // Determine display style (card for desktop or expanding accordion for mobile)
    const isDesktop = useMediaQuery('(min-width:768px)', {
        defaultMatches: true,
    });
    const isNarrow = useMediaQuery((theme) => theme.breakpoints.down('sm'), {
        defaultMatches: false,
    });
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'), {
        defaultMatches: false,
    });
    const isAccordion = isMobile || (isDesktop && isNarrow);

    // Use state to track expansion
    const [isExpanded, setExpansion] = useState(false);
    const toggleExpansion = () => setExpansion(!isExpanded);

    const bodyElement = useMemo(
        () => (
            <React.Fragment>
                <Divider className={dividerStyle} />
                <MarkdownInjector
                    markdown={project}
                    components={markdownComponents}
                />
            </React.Fragment>
        ),
        [dividerStyle, project]
    );

    const id = `${urlify(title)}`;

    return (
        <Card className={cardStyle}>
            <AnchorTarget id={id} />
            {fluidImage && (
                <Image className={imageStyle} alt={title} fluid={fluidImage} />
            )}
            {gifImage && (
                <CardMedia
                    className={imageStyle}
                    alt={title}
                    image={gifImage}
                />
            )}
            <CardContent className={contentStyle}>
                <ProjectTitle
                    isAccordion={isAccordion}
                    isExpanded={isExpanded}
                    toggleExpansion={toggleExpansion}
                >
                    <Typography
                        className={titleTextStyle}
                        variant='h5'
                        component='h6'
                    >
                        <AnchorLink id={id} setID={false}>
                            {title}
                        </AnchorLink>
                    </Typography>
                </ProjectTitle>
                <Typography
                    color='textSecondary'
                    variant='subtitle2'
                    gutterBottom
                >
                    {authors}
                </Typography>
                <ProjectAwards frontmatter={project.frontmatter} />
                <div className={desktopBodyStyle}>{bodyElement}</div>
                <Collapse in={isExpanded} className={mobileBodyStyle}>
                    {bodyElement}
                </Collapse>
            </CardContent>
            <CardActions className={actionsStyle}>
                <ProjectButton
                    href={demoURL}
                    variant='contained'
                    isMobile={isMobile}
                    startIcon={<SportsEsportsIcon />}
                >
                    {'Demo'}
                </ProjectButton>
                <ProjectButton
                    href={repoURL}
                    isMobile={isMobile}
                    startIcon={<CodeIcon />}
                >
                    {'Source'}
                </ProjectButton>
                <ProjectButton
                    href={writeupURL}
                    isMobile={isMobile}
                    startIcon={<DescriptionIcon />}
                >
                    {'Writeup'}
                </ProjectButton>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;

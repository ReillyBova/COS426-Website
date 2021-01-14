// Library imports
import React, { useState } from 'react';
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
        marginBottom: theme.spacing(3),
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
        overflow: 'auto',
        textOverflow: 'ellipsis',
    },
    actionsStyle: {
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
        titleTextStyle,
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

    return (
        <Card className={cardStyle}>
            <Image className={imageStyle} alt={title} fluid={fluidImage} />
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
                        <AnchorLink id={`${urlify(title)}-gallery-project`}>
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
                <Collapse in={isExpanded || !isAccordion}>
                    <Divider className={dividerStyle} />
                    <MarkdownInjector
                        markdown={project}
                        components={markdownComponents}
                    />
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

export default Project;

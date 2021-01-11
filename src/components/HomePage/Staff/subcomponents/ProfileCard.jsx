// Library imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from 'mdi-material-ui/Github';

// Custom styling for component
const profileCardStyles = makeStyles((theme) => ({
    profile: {
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        [theme.breakpoints.down('lg')]: {
            width: 225,
            [theme.breakpoints.down('md')]: {
                width: 180,
                [theme.breakpoints.down('sm')]: {
                    width: 250,
                },
            },
        },
    },
    button: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        mouse: 'pointer',
    },
    profile_pic: {
        width: '100%',
        transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            opacity: 0.8,
        },
    },
    profile_text: {
        paddingTop: 0,
        paddingBottom: 0,
        flexGrow: 1,
    },
    lightText: {
        fontWeight: 300,
    },
}));

function ProfileCard({
    name,
    role,
    officeHours,
    image,
    link,
    email,
    github,
    website,
}) {
    const classes = profileCardStyles();

    return (
        <Card className={classes.profile}>
            <CardContent align='center'>
                {image && (
                    <Fab
                        className={classes.button}
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        color='secondary'
                    >
                        <Image
                            fluid={image}
                            alt={name}
                            loading={'eager'}
                            className={classes.profile_pic}
                        />
                    </Fab>
                )}
            </CardContent>
            <CardContent className={classes.profile_text}>
                <Typography variant='body2'>{role}</Typography>
                <Typography variant='subtitle1' gutterBottom>
                    {name}
                </Typography>
                {officeHours && (
                    <Fragment>
                        <Typography variant='body1'>
                            {'Office Hours'}
                        </Typography>
                        <Typography
                            className={classes.lightText}
                            variant='body2'
                        >
                            {officeHours}
                        </Typography>
                    </Fragment>
                )}
            </CardContent>
            <CardActions>
                {email && (
                    <IconButton
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Email'
                        href={`mailto:${email}`}
                    >
                        <EmailIcon />
                    </IconButton>
                )}
                {github && (
                    <IconButton
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Github'
                        href={github}
                    >
                        <GithubIcon />
                    </IconButton>
                )}
                {website && (
                    <IconButton
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Website'
                        href={website}
                    >
                        <PublicIcon />
                    </IconButton>
                )}
            </CardActions>
        </Card>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.object,
    link: PropTypes.string,
};

export default ProfileCard;

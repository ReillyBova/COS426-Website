// Library imports
import React from 'react';
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
import GithubIcon from 'mdi-material-ui/GithubCircle';

// Custom styling for component
const profileCardStyles = makeStyles(() => ({
    profile: {
        maxWidth: 250,
        height: '100%',
        margin: 'auto',
        minWidth: 175,
    },
    button: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        mouse: 'pointer',
    },
    profile_pic: {
        width: '100%',
        '&:hover': {
            opacity: 0.8,
        },
    },
    profile_text: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));

function ProfileCard({ name, role, image, link, email, github, website }) {
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
                <Typography variant='subtitle1' gutterBottom>
                    {name}
                </Typography>
                <Typography variant='body1'>{role}</Typography>
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

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import EmailIcon from '@material-ui/icons/Email';

import { GithubIcon } from 'components';

const styles = () => ({
    profile: {
        maxWidth: 250,
        height: '100%',
        margin: 'auto',
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
});

function ProfileCard(props) {
    const { classes, name, role, image, link, email, github, website } = props;
    return (
        <Card className={classes.profile}>
            <CardContent align="center">
                <Fab className={classes.button} href={link} color="secondary">
                    <img
                        src={image}
                        alt={name}
                        className={classes.profile_pic}
                    />
                </Fab>
            </CardContent>
            <CardContent className={classes.profile_text}>
                <Typography variant="subtitle1" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body1">{role}</Typography>
            </CardContent>
            <CardActions disableActionSpacing>
                {email && (
                    <IconButton aria-label="Email" href={`mailto:${email}`}>
                        <EmailIcon />
                    </IconButton>
                )}
                {github && (
                    <IconButton aria-label="Github" href={github}>
                        <GithubIcon />
                    </IconButton>
                )}
                {website && (
                    <IconButton aria-label="Website" href={website}>
                        <PublicIcon />
                    </IconButton>
                )}
            </CardActions>
        </Card>
    );
}

ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProfileCard);

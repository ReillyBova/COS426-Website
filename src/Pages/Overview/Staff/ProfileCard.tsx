import { Email, GitHub, LinkedIn, Public } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, Fab, IconButton, Typography } from '@mui/material';

import { StylesGroup } from '../../../Common/Types';
import { COURSE_CONFIG } from '../../../COURSE_CONFIG';
import { WebUtils } from '../../../Utils/WebUtils';

const styles: StylesGroup = {
    profileCard: (theme) => ({
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        [theme.breakpoints.down('lg')]: {
            width: '225px',
        },
        [theme.breakpoints.down('md')]: {
            width: '180px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '250px',
        },
    }),
    image: {
        align: 'center',
    },
    button: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        mouse: 'pointer',
    },
    profile_pic: {
        width: '100%',
        aspectRatio: 1,
        transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            opacity: 0.8,
        },
    },
    profile_text: {
        py: 0,
        flexGrow: 1,
    },
    lightText: {
        fontWeight: 300,
    },
    actions: { flexWrap: 'wrap' },
};

export interface IPerson {
    name: string;
    role: string;
    officeHours?: string;
    image?: string;
    featuredURL?: string;
    email?: string;
    githubURL?: string;
    websiteURL?: string;
    linkedInURL?: string;
}

interface IProps {
    person: IPerson;
}

export const ProfileCard = ({
    person: { name, role, image, officeHours, featuredURL, email, githubURL, websiteURL, linkedInURL },
}: IProps) => (
    <Card sx={styles.profileCard}>
        <CardContent sx={styles.image}>
            {image && (
                <Fab
                    sx={styles.button}
                    href={featuredURL || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    color='secondary'
                >
                    <Box
                        component='img'
                        sx={styles.profile_pic}
                        alt={name}
                        src={`${COURSE_CONFIG.assetServer.people}/${WebUtils.trimSlashes(image)}`}
                    />
                </Fab>
            )}
        </CardContent>
        <CardContent sx={styles.profile_text}>
            <Typography variant='body2'>{role}</Typography>
            <Typography variant='subtitle1' gutterBottom>
                {name}
            </Typography>
            {officeHours && (
                <>
                    <Typography variant='body1'>{'Office Hours'}</Typography>
                    <Typography sx={styles.lightText} variant='body2'>
                        {officeHours}
                    </Typography>
                </>
            )}
        </CardContent>
        <CardActions sx={styles.actions}>
            {email && (
                <IconButton target='_blank' rel='noopener noreferrer' aria-label='Email' href={`mailto:${email}`}>
                    <Email />
                </IconButton>
            )}
            {githubURL && (
                <IconButton target='_blank' rel='noopener noreferrer' aria-label='Github' href={githubURL}>
                    <GitHub />
                </IconButton>
            )}
            {websiteURL && (
                <IconButton target='_blank' rel='noopener noreferrer' aria-label='Website' href={websiteURL}>
                    <Public />
                </IconButton>
            )}
            {linkedInURL && (
                <IconButton target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' href={linkedInURL}>
                    <LinkedIn />
                </IconButton>
            )}
        </CardActions>
    </Card>
);

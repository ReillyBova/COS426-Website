// Library imports
import React from 'react';
// Project imports
import { PageLayout, ThreeContainer, Banner } from 'components';
import { NetworkScene } from 'scenes';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles((theme) => ({
    alignment: {
        position: 'absolute',
        color: 'white',
        height: 'inherit',
        minHeight: 'inherit',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        },
    },
    header: {
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        fontWeight: 700,
        marginBottom: '1rem',
        [theme.breakpoints.only('xl')]: {
            fontSize: '24rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '20rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '16rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '12rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '8rem',
        },
    },
    term: {
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        [theme.breakpoints.only('xl')]: {
            fontSize: '2.7rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '1.8rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '1.35rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '0.9rem',
        },
    },
    banner: {
        minHeight: 400,
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100vh - 56px)',
        },
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 64px)',
        },
    },
}));

function NotFoundPage() {
    const classes = styles();

    return (
        <PageLayout>
            <Banner className={classes.banner} height={''} minHeight={''}>
                <main className={classes.alignment}>
                    <Typography
                        variant='h1'
                        color='inherit'
                        className={classes.header}
                    >
                        {'404'}
                    </Typography>
                    <Typography
                        variant='body1'
                        color='inherit'
                        className={classes.term}
                    >
                        {
                            'The page you are looking for lies outside of the view '
                        }
                        <span style={{ whiteSpace: 'nowrap' }}>
                            {' '}
                            {'frustum :('}{' '}
                        </span>
                    </Typography>
                </main>
                <ThreeContainer Scene={NetworkScene} />
            </Banner>
        </PageLayout>
    );
}

export default NotFoundPage;

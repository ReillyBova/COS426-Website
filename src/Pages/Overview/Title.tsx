import { Box, Typography } from '@mui/material';

import { COURSE_CONFIG } from '../../COURSE_CONFIG';

export const Title = () => (
    <Box
        sx={(theme) => ({
            position: 'absolute',
            color: 'white',
            height: 'inherit',
            minHeight: 'inherit',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(4),
            },
        })}
    >
        <Typography
            variant='h1'
            color='inherit'
            gutterBottom
            sx={(theme) => ({
                lineHeight: 1,
                textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
                fontWeight: 600,
                [theme.breakpoints.only('xl')]: {
                    fontSize: '6rem',
                },
                [theme.breakpoints.only('lg')]: {
                    fontSize: '5rem',
                },
                [theme.breakpoints.only('md')]: {
                    fontSize: '3.75rem',
                },
                [theme.breakpoints.only('sm')]: {
                    fontSize: '3rem',
                },
                [theme.breakpoints.only('xs')]: {
                    fontSize: '2rem',
                },
            })}
        >
            {'COS 426: Computer Graphics'}
        </Typography>
        <Typography
            variant='h2'
            color='inherit'
            sx={(theme) => ({
                lineHeight: 1,
                textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
                [theme.breakpoints.only('xl')]: {
                    fontSize: '4.5rem',
                },
                [theme.breakpoints.only('lg')]: {
                    fontSize: '3.75rem',
                },
                [theme.breakpoints.only('md')]: {
                    fontSize: '3rem',
                },
                [theme.breakpoints.only('sm')]: {
                    fontSize: '2.25rem',
                },
                [theme.breakpoints.only('xs')]: {
                    fontSize: '1.5rem',
                },
            })}
        >
            {COURSE_CONFIG.courseSettings.termName}
        </Typography>
    </Box>
);

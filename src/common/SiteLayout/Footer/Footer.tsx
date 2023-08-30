import { Box, Divider, Grid } from '@mui/material';

import PrincetonSignatureImage from '../../../../assets/princeton_signature.svg?url';
import { COURSE_CONFIG } from '../../../COURSE_CONFIG';
import { ExternalLink } from '../../Routing/ExternalLink';
import { StylesGroup } from '../../Types';
import { FooterNavigation } from './FooterNavigation';

const styles: StylesGroup = {
    footerContainer: (theme) => ({
        width: '100%',
        flex: 'initial',
        position: 'relative',
        fontWeight: 600,
        zIndex: 1,
        py: 2,
        px: 4,
        [theme.breakpoints.down('sm')]: {
            py: 1,
            px: 2,
        },
        backgroundColor: 'secondary.main',
        borderTop: `4px solid ${theme.palette.primary.main}`,
    }),
    divider: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    brandSignature: (theme) => ({
        height: '50px',
        [theme.breakpoints.down('sm')]: {
            height: '40px',
        },
    }),
    legalese: (theme) => ({
        color: 'white',
        fontSize: '12px',
        textAlign: 'right',
        margin: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
        },
        '& a:hover': {
            textDecoration: 'underline',
        },
        '& a:not(:hover)': {
            color: 'white !important',
        },
    }),
    signatures: (theme) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    }),
    engineer: {
        color: 'white',
        fontSize: '12px',
        textAlign: 'right',

        margin: 1,

        // Link styling overrides
        '& a:hover': {
            textDecoration: 'underline',
        },
        '& a:not(:hover)': {
            color: 'white !important',
        },
    },
};

export const Footer = () => {
    const relatedLinks = COURSE_CONFIG.relatedLinks;
    const semester = COURSE_CONFIG.courseSettings.semester;

    return (
        <footer>
            <Box sx={styles.footerContainer}>
                <Grid container spacing={2} justifyContent='space-between' alignItems='center'>
                    <FooterNavigation />
                    <Grid item xs={12}>
                        <Divider sx={styles.divider} />
                    </Grid>
                    <Grid container item lg={6} md={6} sm={6} xs={12}>
                        <Box sx={styles.signatures}>
                            <ExternalLink to={`https://www.${relatedLinks.university}`}>
                                <Box
                                    component='img'
                                    alt='Princeton University'
                                    src={PrincetonSignatureImage}
                                    sx={styles.brandSignature}
                                />
                            </ExternalLink>
                        </Box>
                    </Grid>
                    <Grid container item lg={6} md={6} sm={6} xs={12} justifyContent='flex-end' alignItems='center'>
                        <Box sx={styles.legalese}>
                            <div>{'COS 426: Computer Graphics'}</div>
                            <div>{`© ${semester} The Trustees of Princeton University`}</div>
                            <div>
                                <ExternalLink to={`https://www.${relatedLinks.copyright}`}>
                                    {'Copyright Infringement'}
                                </ExternalLink>
                                {' | '}
                                <ExternalLink to={`https://www.${relatedLinks.privacy}`}>
                                    {'Privacy Notice'}
                                </ExternalLink>
                            </div>
                        </Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center' alignItems='center'>
                        <Box sx={styles.engineer}>
                            {'Website by '}
                            <ExternalLink to={'https://www.linkedin.com/in/reilly-bova-75461412b/'}>
                                {'Reilly Bova ’20'}
                            </ExternalLink>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

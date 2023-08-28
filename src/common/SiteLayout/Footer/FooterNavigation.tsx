import { Grid } from '@mui/material';

import { COURSE_CONFIG } from '../../../COURSE_CONFIG';
import { StylesGroup } from '../../../typings';
import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';

const styles: StylesGroup = {
    navLinkBase: (theme) => ({
        padding: 0.5,
        fontSize: '18px !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px !important',
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px !important',
            },
        },
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
        },
    }),
    navLinkInactive: {
        '&:not(:hover)': {
            color: 'white !important',
        },
    },
    grid: {
        justify: 'space-evenly',
        alignItems: 'center',
    },
};

interface IFooterLinkProps {
    page: string;
    isHomepage?: boolean;
}

const FooterLink = ({ isHomepage, page }: IFooterLinkProps) => {
    const targetURL = `/${WebUtils.makeURL(page)}`;

    const isActive = WebUtils.useIsLinkActive(isHomepage ? '/' : targetURL, isHomepage);

    return (
        <InternalLink
            className={[styles.navLinkBase, !isActive && styles.navLinkInactive]}
            to={isHomepage ? '/' : targetURL}
        >
            {isHomepage ? COURSE_CONFIG.homePage : page}
        </InternalLink>
    );
};

export const FooterNavigation = () => {
    const sitePages = COURSE_CONFIG.navigation;
    const homePage = COURSE_CONFIG.homePage;

    return (
        <Grid container item xs={12} sx={styles.grid}>
            {sitePages.map((page, i) => {
                if (page === homePage) {
                    return <FooterLink page={page} isHomepage key='homepage' />;
                }

                return <FooterLink page={page} key={`${page}-${i}`} />;
            })}
        </Grid>
    );
};

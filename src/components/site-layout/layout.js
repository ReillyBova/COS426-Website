import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';

import { Navbar } from 'components';
import { PrincetonShield } from 'images';

const styles = (theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            '@media (orientation: landscape)': {
                paddingTop: 48,
            },
            '@media (orientation: portrait)': {
                paddingTop: 56,
            },
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
        },
    },
});

const SiteHelmet = (props) => {
    const { data } = props;
    return (
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {
                    name: 'description',
                    content: data.site.siteMetadata.description,
                },
                { property: 'type', content: 'website' },
                { property: 'image', content: PrincetonShield },
                {
                    name: 'keywords',
                    content: data.site.siteMetadata.keywords,
                },
                {
                    name: 'og:title',
                    content: data.site.siteMetadata.title,
                },
                {
                    name: 'og:description',
                    content: data.site.siteMetadata.description,
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: PrincetonShield },
            ]}
            link={[
                {
                    rel: 'canonical',
                    href: data.site.siteMetadata.siteUrl,
                },
            ]}
        >
            <html lang="en" />
        </Helmet>
    );
};

const Layout = ({ children, classes }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        keywords
                    }
                }
            }
        `}
        render={(data) => (
            <Fragment>
                <SiteHelmet data={data} />
                <Navbar />
                <div className={classes.root}>{children}</div>
            </Fragment>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);

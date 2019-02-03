import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';

import { Header } from 'components';
import { PrincetonShield } from 'images';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            '@media (orientation: landscape)': {
                paddingTop: 64
            },
            '@media (orientation: portrait)': {
                paddingTop: 72
            }
        },
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing.unit * 3,
            paddingRight: theme.spacing.unit * 3,
            paddingTop: 80
        }
    }
});

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
        render={data => (
            <Fragment>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content: data.site.siteMetadata.description
                        },
                        { property: 'type', content: 'website' },
                        { property: 'image', content: PrincetonShield },
                        {
                            name: 'keywords',
                            content: data.site.siteMetadata.keywords
                        },
                        {
                            name: 'og:title',
                            content: data.site.siteMetadata.title
                        },
                        {
                            name: 'og:description',
                            content: data.site.siteMetadata.description
                        },
                        { property: 'og:type', content: 'website' },
                        { property: 'og:image', content: PrincetonShield }
                    ]}
                    link={[
                        {
                            rel: 'canonical',
                            href: data.site.siteMetadata.siteUrl
                        }
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <Header />
                <div className={classes.root}>{children}</div>
            </Fragment>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);

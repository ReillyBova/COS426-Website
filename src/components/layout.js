import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './header';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing.unit * 3,
            paddingRight: theme.spacing.unit * 3
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
                        { name: 'description', content: data.site.siteMetadata.description },
                        { name: 'keywords', content: data.site.siteMetadata.keywords },
	                      { property: 'og:type', content: 'website' }
                    ]}
                    link={[
                      { rel: 'canonical', href: data.site.siteMetadata.siteUrl}
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <Header/>
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

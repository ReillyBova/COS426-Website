// Library imports
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
// Project imports
import { ExternalLink } from 'components';
// UI imports
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// Local imports
import { FooterNavigation } from './subcomponents';
import { PrincetonSignature } from 'images';

// A Navbar that sits above the web-app
function Footer({ classes }) {
    // Query navigation settings from site configuration
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                        relatedLinks {
                            university
                            copyright
                            privacy
                        }
                        navigation
                        homePage
                    }
                }
            }
        `
    );

    // Extract relevant info from site metadata
    const relatedLinks = site.siteMetadata.relatedLinks;
    const sitePages = site.siteMetadata.navigation;
    const homePage = site.siteMetadata.homePage;

    // CSS classes for styling
    const {
        footerWrapper,
        dividerStyle,
        footerNavLink,
        brandSignature,
        legalese,
        signatures,
        engineer,
    } = classes;

    // Render
    return (
        <footer>
            <div className={footerWrapper}>
                <Grid
                    container
                    justify='space-between'
                    alignItems='center'
                    spacing={2}
                >
                    <FooterNavigation
                        classes={{ footerNavLink }}
                        sitePages={sitePages}
                        homePage={homePage}
                    />
                    <Grid item xs={12}>
                        <Divider className={dividerStyle} />
                    </Grid>
                    <Grid container item lg={6} md={6} sm={6} xs={12}>
                        <div className={signatures}>
                            <ExternalLink
                                to={`https://www.${relatedLinks.university}`}
                            >
                                <img
                                    src={PrincetonSignature}
                                    className={brandSignature}
                                />
                            </ExternalLink>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        justify='flex-end'
                        alignItems='center'
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                    >
                        <div className={legalese}>
                            <div>{'COS 426: Computer Graphics'}</div>
                            <div>
                                {'© 2020 The Trustees of Princeton University'}
                            </div>
                            <div>
                                <ExternalLink
                                    to={`https://www.${relatedLinks.copyright}`}
                                >
                                    {'Copyright Infringement'}
                                </ExternalLink>
                                {' | '}
                                <ExternalLink
                                    to={`https://www.${relatedLinks.privacy}`}
                                >
                                    {'Privacy Notice'}
                                </ExternalLink>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        justify='center'
                        alignItems='center'
                        xs={12}
                    >
                        <div className={engineer}>
                            {"Website built and designed by "}
                            <ExternalLink
                                to={`https://github.com/ReillyBova`}
                            >
                                {`Reilly Bova ’20`}
                            </ExternalLink>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}

// No props!
Footer.propTypes = {
    classes: PropTypes.object, // CSS classes
};

export default Footer;

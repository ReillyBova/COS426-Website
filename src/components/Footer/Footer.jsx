// Library imports
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
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
                            <a
                                href={`https://www.${relatedLinks.university}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={PrincetonSignature}
                                    className={brandSignature}
                                />
                            </a>
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
                                <a
                                    href={`https://www.${relatedLinks.copyright}`}
                                    target='_blank'
                                    rel='nofollow noopener noreferrer'
                                >
                                    {'Copyright Infringement'}
                                </a>
                                {' | '}
                                <a
                                    href={`https://www.${relatedLinks.privacy}`}
                                    target='_blank'
                                    rel='nofollow noopener noreferrer'
                                >
                                    {'Privacy Notice'}
                                </a>
                            </div>
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

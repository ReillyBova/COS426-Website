// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Search engine optimizer (SEO); fills out imporant <head> tags
const Seo = ({ title, description, lang, meta }) => {
    // Query meta tags from site configuration
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        author
                    }
                }
            }
        `
    );

    /* If title is given, sets title to "Title | siteMetadata.title"
     *  Otherwise, title is just set as "siteMetadata.title"
     */
    const metaTitle = title
        ? `${title} | ${site.siteMetadata.title}`
        : site.siteMetadata.title;
    // Defer to specified description over default
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            title={metaTitle}
            htmlAttributes={{ lang }}
            meta={[
                // General Header:
                {
                    name: `description`,
                    content: metaDescription,
                },
                // Facebook Headers:
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:url`,
                    content: site.siteMetadata.siteUrl,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                // Misc:
                {
                    name: `viewport`,
                    content: `minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no`,
                },
                {
                    name: `msapplication-TileColor`,
                    content: `#221e20`,
                },
            ].concat(meta)}
            link={[
                {
                    rel: `canonical`,
                    href: site.siteMetadata.siteUrl,
                },
            ]}
        />
    );
};

Seo.defaultProps = {
    title: ``,
    description: ``,
    lang: `en`,
    meta: [],
};

Seo.propTypes = {
    title: PropTypes.string, // Page title (prefix)
    description: PropTypes.string, // Description
    lang: PropTypes.string, // ISO Language Code
    meta: PropTypes.arrayOf(PropTypes.object), // Extra HTML metadata
};

export default Seo;

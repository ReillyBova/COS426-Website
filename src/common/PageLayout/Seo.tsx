import { Helmet } from 'react-helmet';

import { COURSE_CONFIG } from '../../COURSE_CONFIG';

interface IProps {
    pageTitle?: string;
    pageDescription?: string;
}

/** Search engine optimizer (SEO); fills out important <head> tags */
export const Seo = ({ pageTitle = '', pageDescription = '' }: IProps) => {
    /*
     * If title is given, sets title to "Title | siteMetadata.title"
     *  Otherwise, title is just set as "siteMetadata.title"
     */
    const metaTitle = pageTitle ? `${pageTitle} | ${COURSE_CONFIG.title}` : COURSE_CONFIG.title;

    /** Defer to specified description over default */
    const metaDescription = pageDescription || COURSE_CONFIG.description;

    return (
        <Helmet
            title={metaTitle}
            htmlAttributes={{ lang: 'en-us' }}
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
                    content: COURSE_CONFIG.siteUrl,
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
            ]}
            link={[
                {
                    rel: `canonical`,
                    href: COURSE_CONFIG.siteUrl,
                },
            ]}
        />
    );
};

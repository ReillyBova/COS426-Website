// Library imports
import React, { Fragment, createElement } from 'react';
import rehypeReact from 'rehype-react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import {
    AnchorLink,
    ExternalLink,
    InternalLink,
} from 'components';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Custom styling for component
const markdownStyles = makeStyles((theme) => ({
    paragraph: {
        overflow: 'auto',
        textOverflow: 'ellipsis',
    },
    code: {
        fontSize: 16,
        lineHeight: '1rem',
    },
    tableStyle: {
        width: '100%',
        marginBottom: theme.spacing(2),
        tableLayout: 'fixed',
    },
}));

// Wrapper for pages generated from markdown content
function MarkdownInjector({ markdown, components = {} }) {
    // Query piazza URl from site configuration
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            piazzaURL
                        }
                    }
                }
            }
        `
    );
    const piazzaURL = site.siteMetadata.courseSettings.piazzaURL;

    // Custom CSS classes
    const { paragraph, code, tableStyle } = markdownStyles();

    // Inject markdown with theme and define custom components
    const renderAst = new rehypeReact({
        createElement: createElement,
        components: {
            h1: ({ children }) => (
                <Typography variant='h4' gutterBottom>
                    <AnchorLink id={urlify(children[0])}>{children}</AnchorLink>
                </Typography>
            ),
            h2: ({ children }) => (
                <Typography variant='h5' gutterBottom>
                    <AnchorLink id={urlify(children[0])}>{children}</AnchorLink>
                </Typography>
            ),
            h3: ({ children }) => (
                <Typography variant='h6'>
                    <AnchorLink id={urlify(children[0])}>{children}</AnchorLink>
                </Typography>
            ),
            p: ({ children }) => (
                <Typography variant='body1' className={paragraph} paragraph>
                    {children}
                </Typography>
            ),
            code: ({ children }) => <code className={code}>{children}</code>,
            ul: ({ children }) => (
                <Typography variant='body1' component='ul' paragraph>
                    {children}
                </Typography>
            ),
            ol: ({ children }) => (
                <Typography variant='body1' component='ol' paragraph>
                    {children}
                </Typography>
            ),
            a: ({ href, children }) => (
                <ExternalLink to={href}>{children}</ExternalLink>
            ),
            table: ({ children }) => (
                <table className={tableStyle}>{children}</table>
            ),
            'internal-link': ({ href, children }) => (
                <InternalLink to={href}>{children}</InternalLink>
            ),
            'piazza-link': () => (
                <ExternalLink to={piazzaURL}>{'Piazza'}</ExternalLink>
            ),
            // Additional custom components proveded by caller
            ...components,
        },
    }).Compiler;

    // Markdown data
    const { htmlAst } = markdown;

    // Render
    return <Fragment>{renderAst(htmlAst)}</Fragment>;
}

export default MarkdownInjector;

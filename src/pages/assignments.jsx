// Library imports
import React, { createElement } from 'react';
import rehypeReact from "rehype-react";
import { graphql, withPrefix } from "gatsby";
import clsx from "clsx";
// Project imports
import { AnchorLink, PageLayout, Content, TableOfContents } from 'components';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const assignmentStyles = makeStyles((theme) => ({
    imageShadow: {
        boxShadow: `${theme.shadows[4]} !important`,
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        '&:hover': {
            boxShadow: `${theme.shadows[8]} !important`,
        }
    },
    flexWrapper: {
        display: 'flex'
    },
    grow: {
        flexGrow: 1
    },
}));


function Assignments({ data }) {
    const piazzaURL = data.site.siteMetadata.courseSettings.piazzaURL;
    const { htmlAst, frontmatter, headings } = data.assignments.edges[0].node;
    const { assignmentNumber, assignmentName, submitURL } = frontmatter;
    const { imageShadow, flexWrapper, grow } = assignmentStyles();
    const renderAst = new rehypeReact({
        createElement: createElement,
        components: {
            "h1": (({ children }) => (
                <Typography variant='h4'>
                    <AnchorLink id={urlify(children[0])}>
                        {children}
                    </AnchorLink>
                </Typography>
            )),
            "h2": (({ children }) => (
                <Typography variant='h6'>
                    <AnchorLink id={urlify(children[0])}>
                        {children}
                    </AnchorLink>
                </Typography>
            )),
            "p": (({ children }) => (
                <Typography variant='body1' paragraph={true}>
                    {children}
                </Typography>
            )),
            "ul": (({ children }) => (
                <Typography variant='body1' component="ul" paragraph={true}>
                    {children}
                </Typography>
            )),
            "a": (({ href, children }) => (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={href}
                >
                    {children}
                </a>
            )),
            "assignment-link": (({ children }) => (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={withPrefix(
                        `assignments/Assignment-${assignmentNumber}.zip`
                    )}
                >
                    {children}
                </a>
            )),
            "submit-link": (({ children }) => (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={submitURL}
                >
                    {children}
                </a>
            )),
            "hash-link": (({ href, children }) => (
                <a href={withPrefix(href)}>
                    {children}
                </a>
            )),
            "piazza-link": (() => (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={piazzaURL}
                >
                    {"Piazza"}
                </a>
            )),
            "img": (({className, ...props}) => (
                <img className={clsx(className, imageShadow)} {...props} />
            )),
        },
    }).Compiler;

    // Render
    return (
        <PageLayout title={'Assignments'}>
                <div className={flexWrapper}>
                    <div className={grow}>
                        <Content>
                            <Typography variant='h3' gutterBottom>
                                {`Assignment ${assignmentNumber}: ${assignmentName}`}
                            </Typography>
                            { renderAst(htmlAst) }
                        </Content>
                    </div>
                    <TableOfContents headings={headings} />
                </div>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query {
        assignments: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Assignments\\/.*\\.md$/"}
            }
        ) {
            edges {
                node {
                    htmlAst
                    frontmatter {
                        assignmentName
                        assignmentNumber
                        submitURL
                    }
                    headings {
                      value
                      depth
                    }
                }
            }
        }
        site {
            siteMetadata {
                courseSettings {
                    piazzaURL
                }
            }
        }
    }
`;

export default Assignments;

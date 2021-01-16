// Library imports
import React, { Fragment } from 'react';
// Project imports
import {
    Content,
    TableOfContents,
    MarkdownInjector
} from 'components';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Custom styling for component
const markdownStyles = makeStyles(() => ({
    flexWrapper: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
        minWidth: 0,
    }
}));

// Wrapper for pages generated from markdown content
function MarkdownPage({ title, subtitle, markdown, components = {}, tableOfContents=true }) {
    // Custom CSS classes
    const { flexWrapper, grow } = markdownStyles();

    // Markdown data
    const { headings } = markdown;

    // Render
    return (
        <div className={flexWrapper}>
            <div className={grow}>
                <Content>
                    {title && (
                        <Fragment>
                            <Typography variant='h3' gutterBottom={!subtitle}>
                                {title}
                            </Typography>
                            {subtitle && (
                                <Typography
                                    variant='h6'
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    {subtitle}
                                </Typography>
                            )}
                        </Fragment>
                    )}
                    <MarkdownInjector markdown={markdown} components={components} />
                </Content>
            </div>
            { tableOfContents && <TableOfContents headings={headings} /> }
        </div>
    );
}

export default MarkdownPage;

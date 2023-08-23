import { Box, Typography } from '@mui/material';

import { Content } from '../Content/Content';
import { MarkdownInjector } from '../MarkdownInjector/MarkdownInjector';

interface IProps {
    markdown: string;
    title?: string;
    subtitle?: string;
    components?: Record<string, React.ComponentType>;
    noTableOfContents?: boolean;
}

/** Wrapper for pages generated from markdown content */
export const MarkdownPage = ({ title, subtitle, markdown, components = {}, noTableOfContents }: IProps) => {
    // const { headings } = markdown;

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    flexGrow: 1,
                    minWidth: 0,
                }}
            >
                <Content>
                    {title && (
                        <>
                            <Typography variant='h3' gutterBottom={!subtitle}>
                                {title}
                            </Typography>
                            {subtitle && (
                                <Typography variant='h6' color='textSecondary' gutterBottom>
                                    {subtitle}
                                </Typography>
                            )}
                        </>
                    )}
                    <MarkdownInjector markdown={markdown} components={components} />
                </Content>
            </Box>
            {/* {!noTableOfContents && <TableOfContents headings={headings} />} */}
        </Box>
    );
};

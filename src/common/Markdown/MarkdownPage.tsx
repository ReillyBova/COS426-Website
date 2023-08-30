import { Box, Typography } from '@mui/material';

import { MarkdownUtils } from '../../Utils/MarkdownUtils';
import { Content } from '../Content/Content';
import { Loader } from '../Loader/Loader';
import { TableOfContents } from './TableOfContents';

interface IProps {
    markdownFile: Record<string, () => Promise<unknown>>;
    title?: string;
    subtitle?: string;
    components?: Record<string, React.ComponentType>;
    noTableOfContents?: boolean;
}

/** Wrapper for pages generated from markdown content */
export const MarkdownPage = ({ title, subtitle, markdownFile, components, noTableOfContents }: IProps) => {
    const [loadedMarkdown] = MarkdownUtils.useMarkdownLoader(markdownFile);

    const { reactElement, headings = [] } = MarkdownUtils.useMarkdownProcessor(loadedMarkdown?.markdown, components);

    return (
        <Box display='flex'>
            {reactElement ? (
                <>
                    <Box flexGrow={1} minWidth={0}>
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
                            {reactElement}
                        </Content>
                    </Box>
                    {!noTableOfContents && <TableOfContents headings={headings} />}
                </>
            ) : (
                <Loader fullPage />
            )}
        </Box>
    );
};

import { Plugin, PluginContainer } from 'vite';
import mdPlugin, { Mode } from 'vite-plugin-markdown';

/**
 * Enrich vite-plugin-markdown with custom loading options for bundle size optimization.
 *
 * This is necessary because sometimes we only want to load the frontmatter on a markdown file. This is a lot less
 * data than an entire markdown file, so its helpful if we can load it separately when applicable. Without this optimization,
 * the syllabus (materials) page is slow to load because it uses the frontmatters from all assignment files (huge files).
 */
export const viteMarkdownLoader = (): Plugin => {
    const markdownRegex = /\.md(\?(frontmatter))?$/;

    return {
        name: 'vite-markdown-loader',
        enforce: 'pre',
        transform(code, id) {
            if (!id.match(markdownRegex)) {
                return;
            }
            console.log('boo', id);

            const [path, query] = id.split('?', 2);

            const markdownPlugin = (
                query === 'frontmatter' ? mdPlugin() : mdPlugin({ mode: [Mode.MARKDOWN] })
            ) as Partial<PluginContainer>;

            return markdownPlugin.transform?.(code, path);
        },
    };
};

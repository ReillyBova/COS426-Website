/// <reference types="vite-svg-loader" />
/// <reference types="vite/client" />

declare module '*.md' {
    // "unknown" would be more detailed depends on how you structure frontmatter
    const attributes: Record<string, unknown>;

    // When "Mode.TOC" is requested
    const toc: { level: string; content: string }[];

    // When "Mode.Markdown" is requested
    const markdown: string;

    export { attributes, toc, markdown };
}

/// <reference types="vite-svg-loader" />
/// <reference types="vite/client" />

declare module '*.md' {
    /**"unknown" would be more detailed depends on how you structure frontmatter */
    const attributes: Record<string, unknown>;

    /** When "Mode.Markdown" is requested */
    const markdown: string;

    export { attributes, markdown };
}

declare module '*.md?frontmatter' {
    /**"unknown" would be more detailed depends on how you structure frontmatter */
    const attributes: Record<string, unknown>;

    export { attributes };
}

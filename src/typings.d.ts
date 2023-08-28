/// <reference types="vite-svg-loader" />
/// <reference types="vite/client" />

import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

declare module '*.md' {
    // "unknown" would be more detailed depends on how you structure frontmatter
    const attributes: Record<string, unknown>;

    // When "Mode.TOC" is requested
    const toc: { level: string; content: string }[];

    // When "Mode.Markdown" is requested
    const markdown: string;

    export { attributes, toc, markdown };
}

export type Styles = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);
export type StylesGroup = Record<string, Styles>;

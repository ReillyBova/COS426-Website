import { Root, Text } from 'mdast';
import { ComponentType, createElement, Fragment, useEffect, useState } from 'react';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism';
import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';

import {
    InjectedA,
    InjectedCode,
    InjectedH1,
    InjectedH2,
    InjectedH3,
    InjectedInternalLink,
    InjectedOl,
    InjectedP,
    InjectedPiazzaLink,
    InjectedTable,
    InjectedUl,
} from '../Common/MarkdownComponents/InjectedComponents';

interface ILoadedMarkdown {
    markdown: string;
}

interface IProcessedMarkdown {
    reactElement?: React.ReactElement;
    headings?: IMarkdownHeading[];
}

export interface IMarkdownHeading {
    depth: number;
    value: string;
}

export namespace MarkdownUtils {
    export const useMarkdown = (markdownSrc: string, components?: Record<string, React.ComponentType>) => {
        const [loadedMarkdown, setLoadedMarkdown] = useState<ILoadedMarkdown | undefined>();

        useEffect(() => {
            const loadMarkdown = async () => {
                const loadedMarkdown = await import(`../Content/${markdownSrc}.md`);

                setLoadedMarkdown(loadedMarkdown);
            };

            loadMarkdown();
        }, [markdownSrc]);

        const { reactElement, headings = [] } = useMarkdownProcessor(loadedMarkdown?.markdown, components);

        return { markdownAsReactElement: reactElement, headings };
    };

    const NO_COMPONENTS = {};

    const useMarkdownProcessor = (
        rawMarkdown?: string,
        components: Record<string, React.ComponentType> = NO_COMPONENTS
    ) => {
        const [processedMarkdown, setProcessedMarkdown] = useState<IProcessedMarkdown>({});

        useEffect(() => {
            if (rawMarkdown) {
                unified()
                    .use(remarkParse)
                    .use(remarkHeadings)
                    .use(remarkSmartypants, { dashes: 'oldschool' })
                    .use(remarkRehype, { allowDangerousHtml: true })
                    .use(rehypeRaw)
                    .use(rehypeKatex)
                    .use(rehypePrism, { plugins: ['line-numbers'] })
                    .use(rehypeReact, {
                        createElement,
                        Fragment,
                        components: {
                            h1: InjectedH1 as React.ComponentType,
                            h2: InjectedH2 as React.ComponentType,
                            h3: InjectedH3 as React.ComponentType,
                            p: InjectedP as React.ComponentType,
                            code: InjectedCode as React.ComponentType,
                            ul: InjectedUl as React.ComponentType,
                            ol: InjectedOl as React.ComponentType,
                            a: InjectedA as React.ComponentType,
                            table: InjectedTable as React.ComponentType,
                            'internal-link': InjectedInternalLink as React.ComponentType,
                            'piazza-link': InjectedPiazzaLink as React.ComponentType,
                            ...components,
                        } as Partial<{
                            [TagName in keyof JSX.IntrinsicElements]:
                                | keyof JSX.IntrinsicElements
                                | ComponentType<JSX.IntrinsicElements[TagName]>;
                        }>,
                    })
                    .process(rawMarkdown)
                    .then((virtualFile) => {
                        setProcessedMarkdown({
                            reactElement: virtualFile.result,
                            headings: virtualFile.data.headings as IMarkdownHeading[],
                        });
                    });
            }
        }, [rawMarkdown, components]);

        return processedMarkdown;
    };

    const remarkHeadings = () => (ast: Root, virtualFile: VFile) => {
        const headings: IMarkdownHeading[] = [];

        visit(ast, 'heading', (node) => {
            const text = node.children.find((child): child is Text => child.type === 'text')?.value;

            if (text) {
                headings.push({ depth: node.depth, value: text });
            }
        });

        virtualFile.data.headings = headings;
    };
}

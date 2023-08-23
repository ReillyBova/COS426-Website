import { ComponentType, createElement, Fragment, useEffect, useState } from 'react';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism';
import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype/lib';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';

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
} from './InjectedComponents';

interface IProps {
    markdown: string;
    components?: Record<string, React.ComponentType>;
}

const NO_COMPONENTS = {};

/** Wrapper for components generated from markdown content */
export const MarkdownInjector = ({ markdown, components = NO_COMPONENTS }: IProps) => {
    const [reactContent, setReactContent] = useState(<></>);

    useEffect(() => {
        unified()
            .use(remarkParse)
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
            .process(markdown)
            .then((virtualFile) => {
                setReactContent(virtualFile.result);
            });
    }, [markdown, components]);

    return <>{reactContent}</>;
};

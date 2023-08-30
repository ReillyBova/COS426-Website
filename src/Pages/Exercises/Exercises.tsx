import { Typography } from '@mui/material';

import { AnchorLink } from '../../Common/AnchorLink/AnchorLink';
import { MarkdownPage } from '../../Common/Markdown/MarkdownPage';
import { getHeaderId } from '../../Common/MarkdownComponents/InjectedComponents';
import { PageLayout } from '../../Common/PageLayout/PageLayout';

const srcFile = import.meta.glob('/src/Content/Pages/Exercises.md');

const exercisesPageComponents = {
    h1: (({ children }: { children: React.ReactNode }) => (
        <Typography variant='h6'>
            <AnchorLink id={getHeaderId(children)}>{children}</AnchorLink>
        </Typography>
    )) as React.ComponentType,
};

const Exercises = () => (
    <PageLayout title='Exercises'>
        <MarkdownPage title='Exercises' markdownFile={srcFile} components={exercisesPageComponents} />
    </PageLayout>
);

export default Exercises;

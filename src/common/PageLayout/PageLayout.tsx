import { Box } from '@mui/material';

import { Seo } from './Seo';

interface IProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
}

// Wrap the Search Engine Optimization (SEO) around the site
export const PageLayout = ({ title, description, children }: IProps) => (
    <>
        <Seo pageTitle={title} pageDescription={description} />
        <Box component='main'>{children}</Box>
    </>
);

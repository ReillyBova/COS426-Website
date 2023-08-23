import { ReactNode } from 'react';

import { Box } from '@mui/material';

import { Navbar } from './Navbar/Navbar';

interface IProps {
    children: ReactNode;
}

/*
 * A wrapper that allows the navbar and footer to persist above and below the
 * page through navigation/routing changes.
 */
export const SiteLayout = ({ children }: IProps) => (
    <Box display='flex' flexDirection='column' maxHeight='100vh' minHeight='100vh'>
        <Navbar />
        <Box flex='1' overflow='scroll' position='relative'>
            <Box maxHeight='100%' overflow='scroll'>
                {children}
                {/* <Footer /> */}
            </Box>
        </Box>
    </Box>
);

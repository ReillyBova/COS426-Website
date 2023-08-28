import { createContext, ReactNode, useState } from 'react';

import { Box } from '@mui/material';

import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

interface IProps {
    children: ReactNode;
}

export const PageScrollBoxContext = createContext<HTMLDivElement | null>(null);

/*
 * A wrapper that allows the navbar and footer to persist above and below the
 * page through navigation/routing changes.
 */
export const SiteLayout = ({ children }: IProps) => {
    const [pageScrollBoxElement, setScrollBoxElement] = useState<HTMLDivElement | null>(null);

    return (
        <Box display='flex' flexDirection='column' maxHeight='100vh' minHeight='100vh'>
            <Navbar />
            <Box
                flex='1'
                overflow='scroll'
                position='relative'
                ref={(element: HTMLDivElement) => setScrollBoxElement(element)}
            >
                <Box maxHeight='100%'>
                    <PageScrollBoxContext.Provider value={pageScrollBoxElement}>
                        {children}
                        <Footer />
                    </PageScrollBoxContext.Provider>
                </Box>
            </Box>
        </Box>
    );
};

import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import { WebUtils } from '../../Utils/WebUtils';
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

    const location = useLocation();
    const pathname = WebUtils.trimSlashes(location.pathname);

    useEffect(() => {
        if (pageScrollBoxElement) {
            pageScrollBoxElement.scrollTop = 0;
        }
    }, [pageScrollBoxElement, pathname]);

    return (
        <Box display='flex' flexDirection='column' maxHeight='100vh' minHeight='100vh'>
            <PageScrollBoxContext.Provider value={pageScrollBoxElement}>
                <Navbar />
                <Box
                    flex='1'
                    overflow='scroll'
                    position='relative'
                    maxHeight='100%'
                    display='flex'
                    flexDirection='column'
                    ref={(element: HTMLDivElement) => setScrollBoxElement(element)}
                >
                    <Box component='main' flexGrow={1}>
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </PageScrollBoxContext.Provider>
        </Box>
    );
};

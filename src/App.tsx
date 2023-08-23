import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { SiteLayout } from './Common/SiteLayout/SiteLayout';
import { WebUtils } from './Utils/WebUtils';

const Overview = lazy(() => import('./Pages/Overview/Overview'));

export const App = () => (
    <SiteLayout>
        <Suspense
            fallback={
                <Box sx={{ display: 'flex', m: 6, alignItems: 'center', flexDirection: 'column' }}>
                    <CircularProgress />
                </Box>
            }
        >
            <Routes>
                <Route path={WebUtils.withPrefix('/')} element={<Overview />} />
                <Route path={WebUtils.withPrefix('/materials')} element={'Materials'} />
                <Route path={WebUtils.withPrefix('/assignments')} element={'Assignments'} />
                <Route path={WebUtils.withPrefix('/exercises')} element={'Exercises'} />
                <Route path={WebUtils.withPrefix('/gallery')} element={'Gallery'} />
                <Route path={WebUtils.withPrefix('/links')} element={'Links'} />
                <Route path={WebUtils.withPrefix('*')} element={'404'} />
            </Routes>
        </Suspense>
    </SiteLayout>
);

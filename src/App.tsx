import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from './Common/Loader/Loader';
import { PageLayout } from './Common/PageLayout/PageLayout';
import { SiteLayout } from './Common/SiteLayout/SiteLayout';
import { WebUtils } from './Utils/WebUtils';

const Overview = lazy(() => import('./Pages/Overview/Overview'));
const Syllabus = lazy(() => import('./Pages/Syllabus/Syllabus'));
const Exercises = lazy(() => import('./Pages/Exercises/Exercises'));
const Links = lazy(() => import('./Pages/Links/Links'));

export const App = () => (
    <SiteLayout>
        <Suspense fallback={<Loader fullPage />}>
            <Routes>
                <Route path={WebUtils.withPrefix('/')} element={<Overview />} />
                <Route path={WebUtils.withPrefix('/syllabus')} element={<PageLayout>{<Syllabus />}</PageLayout>} />
                <Route path={WebUtils.withPrefix('/assignments')} element={'Assignments'} />
                <Route path={WebUtils.withPrefix('/exercises')} element={<Exercises />} />
                <Route path={WebUtils.withPrefix('/gallery')} element={'Gallery'} />
                <Route path={WebUtils.withPrefix('/links')} element={<Links />} />
                <Route path={WebUtils.withPrefix('*')} element={'404'} />
            </Routes>
        </Suspense>
    </SiteLayout>
);

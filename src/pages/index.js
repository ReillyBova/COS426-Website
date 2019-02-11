import React from 'react';
import withRoot from '../withRoot';

import { Layout, Page, ThreeContainer, Banner } from 'components';
import {
    SiteTitle,
    Syllabus,
    Staff,
    Precepts,
    Coursework,
    Collaboration,
    Plagiarism,
} from 'content/overview';

function IndexPage() {
    return (
        <Layout>
            <Banner>
                <SiteTitle />
                <ThreeContainer />
            </Banner>
            <Page>
                <Syllabus />
                <Staff />
                <Precepts />
                <Coursework />
                <Collaboration />
                <Plagiarism />
            </Page>
        </Layout>
    );
}

export default withRoot(IndexPage);

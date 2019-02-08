import React from 'react';
import withRoot from '../withRoot';

import { Layout, ThreeContainer } from 'components';
import {
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
            <ThreeContainer style={{height: 100}} />
            <Syllabus />
            <Staff />
            <Precepts />
            <Coursework />
            <Collaboration />
            <Plagiarism />
        </Layout>
    );
}

export default withRoot(IndexPage);

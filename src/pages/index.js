import React from 'react';
import withRoot from '../withRoot';

import { Layout } from 'components';
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

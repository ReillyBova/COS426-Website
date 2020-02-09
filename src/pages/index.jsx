// Library imports
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import {
    Title,
    ThreeContainer,
    PageLayout,
    Banner,
    Content,
    Syllabus,
    Staff,
    Precepts,
    OfficeHours,
    Coursework,
    Collaboration,
    Plagiarism,
} from 'components';
import { NetworkScene } from 'scenes';

function HomePage() {
    // Grab semester
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            semester
                        }
                    }
                }
            }
        `
    );
    // Render
    return (
        <PageLayout>
            <Banner height={'66vh'}>
                <Title semester={site.siteMetadata.courseSettings.semester} />
                <ThreeContainer Scene={NetworkScene} />
            </Banner>
            <Content>
                <Syllabus />
                <Staff />
                <Precepts />
                <OfficeHours />
                <Coursework />
                <Collaboration />
                <Plagiarism />
            </Content>
        </PageLayout>
    );
}

export default HomePage;

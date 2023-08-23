import { Box } from '@mui/material';

import { Banner } from '../../Common/Banner/Banner';
import { MarkdownPage } from '../../Common/MarkdownPage/MarkdownPage';
import { PageLayout } from '../../Common/PageLayout/PageLayout';
import { ThreeContainer } from '../../Common/ThreeContainer/ThreeContainer';
import { markdown } from '../../Content/Overview.md';
import { Textbook } from './Textbook';
import { Title } from './Title';

const overviewComponents = {
    textbook: Textbook as React.ComponentType,
    //staff: Staff as React.ComponentType,
    // coursework: Coursework as React.ComponentType,
    // 'collaboration-table': CollaborationTable as React.ComponentType,
    li: (({ children }: { children: React.ReactNode }) => (
        <Box
            component='li'
            sx={{
                '&>p': {
                    marginBottom: 0,
                },
                '&>ul': {
                    marginBottom: 0,
                },
            }}
        >
            {children}
        </Box>
    )) as React.ComponentType,
};

/** Home page of website  */
const Overview = () => {
    return (
        <PageLayout>
            <Banner height='66vh'>
                <Title />
                <ThreeContainer />
            </Banner>
            <MarkdownPage markdown={markdown} components={overviewComponents} />
        </PageLayout>
    );
};

export default Overview;

import { Box } from '@mui/material';

import { Banner } from '../../Common/Banner/Banner';
import { MarkdownPage } from '../../Common/Markdown/MarkdownPage';
import { PageLayout } from '../../Common/PageLayout/PageLayout';
import { ThreeContainer } from '../../Common/ThreeContainer/ThreeContainer';
import { CollaborationTable } from './CollaborationTable';
import { Coursework } from './Coursework';
import Staff from './Staff/Staff';
import { Textbook } from './Textbook';
import { Title } from './Title';

const overviewComponents = {
    textbook: Textbook as React.ComponentType,
    staff: Staff as React.ComponentType,
    coursework: Coursework as React.ComponentType,
    'collaboration-table': CollaborationTable as React.ComponentType,
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
            <MarkdownPage markdownSrc='Pages/Overview' components={overviewComponents} />
        </PageLayout>
    );
};

export default Overview;

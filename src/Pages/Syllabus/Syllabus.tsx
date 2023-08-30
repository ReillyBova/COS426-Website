import { Typography } from '@mui/material';

import { Content } from '../../Common/Content/Content';
import { PageLayout } from '../../Common/PageLayout/PageLayout';

export const Syllabus = () => (
    <PageLayout title='Syllabus'>
        <Content>
            <Typography variant='h3' gutterBottom>
                {'Syllabus'}
            </Typography>
            {/* <MaterialsTable /> */}
        </Content>
    </PageLayout>
);

export default Syllabus;

// Library imports
import React from 'react';
// Project imports
import { PageLayout, Content } from 'components';
// UI imports
import Typography from '@material-ui/core/Typography';

function Assignments() {
    // Render
    return (
        <PageLayout title={'Assignments'}>
            <Content>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant='h4' gutterBottom>
                        {'Assignments'}
                    </Typography>
                </Typography>
            </Content>
        </PageLayout>
    );
}

export default Assignments;

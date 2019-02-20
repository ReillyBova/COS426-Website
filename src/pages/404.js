import React from 'react';
import withRoot from '../withRoot';

import { Layout, ThreeContainer, Banner } from 'components';
import { Message404 } from 'content/404';

function NotFoundPage() {
    return (
        <Layout>
            <div style={{position: 'absolute', top: 0, width: '100%'}}>
                <Banner height={'100vh'} minHeight={'400px'}>
                    <Message404 />
                    <ThreeContainer />
                </Banner>
            </div>
        </Layout>
    );
}

export default withRoot(NotFoundPage);

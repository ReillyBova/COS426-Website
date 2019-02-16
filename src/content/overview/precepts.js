import React from 'react';

import Typography from '@material-ui/core/Typography';

import text from './preceptsText';

function Precepts() {
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant="h4" gutterBottom>
                {'Precepts'}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.precepts[0]}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.precepts[1]}
                <b>{text.precepts[2]}</b>
                {text.precepts[3]}
            </Typography>
        </Typography>
    );
}

export default Precepts;

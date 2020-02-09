// Libary imports
import React from 'react';
// Project imports
import { AnchorLink } from 'components';
import { precepts } from 'content';
import { urlify } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

function Precepts() {
    const title = 'Precepts';
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' gutterBottom>
                <AnchorLink id={urlify(title)}>{title}</AnchorLink>
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {precepts.text[0]}
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {precepts.text[1]}
                <b>{precepts.text[2]}</b>
                {precepts.text[3]}
            </Typography>
        </Typography>
    );
}

export default Precepts;

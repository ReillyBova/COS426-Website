import React from 'react';

import Typography from '@material-ui/core/Typography';

import text from './plagiarismText';

function Plagiarism() {
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant="h4" gutterBottom>
                {'Plagiarism'}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.plagiarism[0]}
                <a href="https://rrr.princeton.edu/">{text.plagiarism[1]}</a>
                {text.plagiarism[2]}
            </Typography>
            <Typography variant="h6">{'Copying from a Partner'}</Typography>
            <Typography variant="body1" paragraph={true}>
                {text.partner[0]}
            </Typography>
            <Typography variant="h6">
                {'Outside Sources & Citations'}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.outside[0]}
            </Typography>
            <Typography variant="h6">{'Plagiarism Penalties'}</Typography>
            <Typography variant="body1" paragraph={true}>
                {text.penalties[0]}
                <a href="https://rrr.princeton.edu/#comp25">
                    {text.penalties[1]}
                </a>
                {text.penalties[2]}
            </Typography>
        </Typography>
    );
}

export default Plagiarism;

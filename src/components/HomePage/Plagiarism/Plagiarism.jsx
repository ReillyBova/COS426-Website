// Library imports
import React from 'react';
// Project imports
import { AnchorLink } from 'components';
import { plagiarism } from 'content';
import { urlify } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

function Plagiarism() {
    const title = 'Plagiarism';
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' gutterBottom>
                <AnchorLink id={urlify(title)}>{title}</AnchorLink>
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {plagiarism.plagiarism[0]}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://rrr.princeton.edu/'
                >
                    {plagiarism.plagiarism[1]}
                </a>
                {plagiarism.plagiarism[2]}
            </Typography>
            <Typography variant='h6'>{'Copying from a Partner'}</Typography>
            <Typography variant='body1' paragraph={true}>
                {plagiarism.partner[0]}
            </Typography>
            <Typography variant='h6'>
                {'Outside Sources & Citations'}
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {plagiarism.outside[0]}
            </Typography>
            <Typography variant='h6'>{'Plagiarism Penalties'}</Typography>
            <Typography variant='body1' paragraph={true}>
                {plagiarism.penalties[0]}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://rrr.princeton.edu/#comp25'
                >
                    {plagiarism.penalties[1]}
                </a>
                {plagiarism.penalties[2]}
            </Typography>
        </Typography>
    );
}

export default Plagiarism;

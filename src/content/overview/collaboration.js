import React from 'react';

import Typography from '@material-ui/core/Typography';

import CollaborationTable from './collaborationTable';
import text from './collaborationText';

function CollaborationPage() {
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant="h4" gutterBottom>
                {'Collaboration Policy'}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.collaboration[0]}
                <i>{text.collaboration[1]}</i>
                {text.collaboration[2]}
                <b>{text.collaboration[3]}</b>
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {text.collaboration[4]}
            </Typography>

            <CollaborationTable table={text.table} />

            <Typography component={'div'} paragraph={true}>
                <Typography variant="h6">{'Individual Solutions'}</Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.individual[0]}
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body1" paragraph={true}>
                            {text.individual[1]}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" paragraph={true}>
                            {text.individual[2]}
                        </Typography>
                    </li>
                </ul>
                <Typography variant="body1" paragraph={true}>
                    {text.individual[3]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Course Staff'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.staff[0]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Partners'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.partners[0]}
                    <i>{text.partners[1]}</i>
                    {text.partners[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.partners[3]}
                </Typography>
                <Typography variant="h6">
                    {'Collaboration with Classmates'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.class[0]}
                </Typography>
                <Typography variant="h6">
                    {'Concerning Electronic Communication'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.electronic[0]}
                    <a href="https://piazza.com/princeton/spring2019/cos426/home?">
                        {text.electronic[1]}
                    </a>
                    {text.electronic[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.electronic[3]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    <i>{text.electronic[4]}</i>
                </Typography>
                <Typography variant="h6">{'Final Note'}</Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.note[0]}
                    <i>{text.note[1]}</i>
                    {text.note[2]}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default CollaborationPage;

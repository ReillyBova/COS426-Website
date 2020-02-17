// Library imports
import React from 'react';
// Project imports
import { GradeChart } from 'images';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

// Custom styling for component
const courseworkStyles = makeStyles((theme) => ({
    piechart: {
        margin: '0 0 24px 24px',
        maxWidth: 500,
        [theme.breakpoints.down('md')]: {
            maxWidth: 400,
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            float: 'right',
        },
    },
    image: {
        padding: 8,
        width: '100%'
    }
}));

function Coursework() {
    const { piechart, image } = courseworkStyles();
    return (
        <Card raised className={piechart}>
            <CardActions>
                <img
                    className={image}
                    src={GradeChart}
                />
            </CardActions>
        </Card>
    );
}

export default Coursework;

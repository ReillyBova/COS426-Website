// Library imports
import React from 'react';
// Project imports
import { AnchorLink } from 'components';
import { GradeChart } from 'images';
import { coursework } from 'content';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

// Custom styling for component
const courseworkStyles = makeStyles((theme) => ({
    piechart: {
        margin: '0 0 24px 24px',
        maxWidth: 500,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400,
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
    },
}));

function Coursework() {
    const classes = courseworkStyles();
    const title = 'Coursework';
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' gutterBottom>
                <AnchorLink id={urlify(title)}>{title}</AnchorLink>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Course Grades'}</Typography>
                <Card raised className={classes.piechart}>
                    <CardActions>
                        <img
                            style={{ padding: 8 }}
                            width='100%'
                            src={GradeChart}
                        />
                    </CardActions>
                </Card>
                <Typography variant='body1' paragraph={true}>
                    {coursework.grades[0]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Written Exam'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.exam[0]}
                    <b>{coursework.exam[1]}</b>
                    {coursework.exam[2]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.exam[3]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.exam[4]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>
                    {'Programming Assignments'}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.assignments[0]}
                    <b>{coursework.assignments[1]}</b>
                    {coursework.assignments[2]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.assignments[3]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {coursework.assignments[4]}
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant='h6'>{'Final Project'}</Typography>
                    <Typography variant='body1' paragraph={true}>
                        {coursework.final_project[0]}
                    </Typography>
                    <Typography variant='body1' paragraph={true}>
                        {coursework.final_project[1]}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant='h6'>{'Late Policy'}</Typography>
                    <Typography variant='body1' paragraph={true}>
                        {coursework.late[0]}
                    </Typography>
                    <Typography variant='body1' paragraph={true}>
                        {coursework.late[1]}
                        <i>{coursework.late[2]}</i>
                        {coursework.late[3]}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant='h6'>{'Regrades'}</Typography>
                    <Typography variant='body1' paragraph={true}>
                        {coursework.regrades[0]}
                    </Typography>
                </Typography>
            </Typography>
        </Typography>
    );
}

export default Coursework;

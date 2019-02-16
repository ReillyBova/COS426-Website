import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

import { GradeChart } from 'images';
import text from './courseworkText';

const styles = (theme) => ({
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
});

function Coursework(props) {
    const { classes } = props;
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant="h4" gutterBottom>
                {'Coursework'}
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant="h6">{'Course Grades'}</Typography>
                <Card raised className={classes.piechart}>
                    <CardActions>
                        <img
                            style={{ padding: 8 }}
                            width="100%"
                            src={GradeChart}
                        />
                    </CardActions>
                </Card>
                <Typography variant="body1" paragraph={true}>
                    {text.grades[0]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant="h6">{'Written Exam'}</Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.exam[0]}
                    <b>{text.exam[1]}</b>
                    {text.exam[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.exam[3]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.exam[4]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant="h6">
                    {'Programming Assignments'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.assignments[0]}
                    <b>{text.assignments[1]}</b>
                    {text.assignments[2]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.assignments[3]}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {text.assignments[4]}
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Final Project'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {text.final_project[0]}
                    </Typography>
                    <Typography variant="body1" paragraph={true}>
                        {text.final_project[1]}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Late Policy'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {text.late[0]}
                    </Typography>
                    <Typography variant="body1" paragraph={true}>
                        {text.late[1]}
                        <i>{text.late[2]}</i>
                        {text.late[3]}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Regrades'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {text.regrades[0]}
                    </Typography>
                </Typography>
            </Typography>
        </Typography>
    );
}

export default withStyles(styles)(Coursework);

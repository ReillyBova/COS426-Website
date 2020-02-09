// Library imports
import React from 'react';
// Project imports
import { Textbook } from 'images';
import { syllabus } from 'content';
import { urlify } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const syllabusStyles = makeStyles((theme) => ({
    textbook: {
        margin: '0 0 24px 24px',
        maxWidth: 200,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            float: 'right',
        },
    },
}));

function Syllabus() {
    const classes = syllabusStyles();
    const title = 'Syllabus';
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' id={urlify(title)} gutterBottom>
                {title}
            </Typography>
            <Typography component='div' paragraph={true}>
                <Typography variant='h6'>{'Description'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {syllabus.description[0]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {syllabus.description[1]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Prerequisites'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {syllabus.prereqs[0]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Lectures'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {syllabus.lectures[0]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Precepts'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {syllabus.precepts[0]}
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Required Reading'}</Typography>
                <Card raised className={classes.textbook}>
                    <CardMedia
                        component='img'
                        alt='Computer Graphics with OpenGL'
                        image={Textbook}
                        title='Computer Graphics with OpenGL'
                    />
                    <CardActions>
                        <Button
                            size='small'
                            color='primary'
                            target='_blank'
                            rel='noopener noreferrer'
                            href='http://www.labyrinthbooks.com/all_detail.aspx?isbn=9780136053583'
                        >
                            {'Labyrinth'}
                        </Button>
                    </CardActions>
                </Card>
                <Typography component={'div'} variant='body1' paragraph={true}>
                    {syllabus.textbook[0]}
                    <ul>
                        <i>{'Computer Graphics with OpenGL'}</i>
                        {
                            ', 4th Ed., Hearn, Baker, and Carithers. Prentice Hall, 2010. ISBN: 978-0136053583.'
                        }
                    </ul>
                    {syllabus.textbook[1]}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default Syllabus;

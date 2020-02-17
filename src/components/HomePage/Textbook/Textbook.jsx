// Library imports
import React from 'react';
// Project imports
import { TextbookCover } from 'images';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const textbookStyles = makeStyles((theme) => ({
    textbookCard: {
        margin: '0 0 24px 24px',
        maxWidth: 200,
        [theme.breakpoints.down('sm')]: {
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
    },
}));

function Textbook() {
    const { textbookCard } = textbookStyles();
    return (
        <Card raised className={textbookCard}>
            <CardMedia
                component='img'
                alt='Computer Graphics with OpenGL'
                image={TextbookCover}
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
    );
}

export default Textbook;

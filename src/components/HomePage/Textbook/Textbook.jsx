// Library imports
import React from 'react';
// Project imports
import { TextbookCover } from 'images';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
        </Card>
    );
}

export default Textbook;

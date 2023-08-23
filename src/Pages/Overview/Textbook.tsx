import { Card, CardMedia } from '@mui/material';

import TextbookCover from '../../../assets/textbook_cover.jpg?url';

export const Textbook = () => (
    <Card
        raised
        sx={(theme) => ({
            margin: '0 0 24px 24px',
            maxWidth: '200px',
            [theme.breakpoints.down('sm')]: {
                marginTop: 3,
                marginRight: 'auto',
                marginLeft: 'auto',
            },
            [theme.breakpoints.up('md')]: {
                float: 'right',
            },
        })}
    >
        <CardMedia
            component='img'
            alt='Computer Graphics with OpenGL'
            image={TextbookCover}
            title='Computer Graphics with OpenGL'
        />
    </Card>
);

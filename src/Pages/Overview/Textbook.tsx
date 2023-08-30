import { Card, CardMedia } from '@mui/material';

import TextbookCover from '../../../assets/textbook_cover.jpg?url';
import { Styles } from '../../Common/Types';

const styles: Styles = (theme) => ({
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
});

export const Textbook = () => (
    <Card raised sx={styles}>
        <CardMedia
            component='img'
            alt='Computer Graphics with OpenGL'
            image={TextbookCover}
            title='Computer Graphics with OpenGL'
        />
    </Card>
);

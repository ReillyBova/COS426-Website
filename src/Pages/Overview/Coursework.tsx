import { Box, Card, CardActions } from '@mui/material';

import GradeChart from '../../../assets/grade_chart.png?url';
import { StylesGroup } from '../../typings';

const styles: StylesGroup = {
    pieChart: (theme) => ({
        margin: [0, 0, 3, 3],
        maxWidth: '500px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '400px',
            marginY: 3,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            float: 'right',
        },
        ...(theme.palette.mode === 'dark' && { background: theme.palette.grey[400] }),
    }),
    image: {
        padding: 1,
        width: '100%',
    },
};

export const Coursework = () => (
    <Card sx={styles.pieChart}>
        <CardActions>
            <Box component='img' alt='Grade Chart' sx={styles.image} src={GradeChart} />
        </CardActions>
    </Card>
);

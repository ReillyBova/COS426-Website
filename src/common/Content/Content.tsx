import { Box } from '@mui/material';

import { Styles } from '../../typings';

interface IProps {
    children: React.ReactNode;
}

const styles: Styles = (theme) => ({
    maxWidth: 1200,
    margin: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
});

/** Wraps the main content on the page */
export const Content = ({ children }: IProps) => <Box sx={styles}>{children}</Box>;

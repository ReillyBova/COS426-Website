import { Box } from '@mui/material';

interface IProps {
    id: string;
}

/** Inserts hidden anchor into dom for ideal scroll-on-navigate alignment*/
export const AnchorTarget = ({ id }: IProps) => (
    <Box
        component='a'
        sx={{
            position: 'absolute',
            marginTop: '-96px',
        }}
        id={id}
    />
);

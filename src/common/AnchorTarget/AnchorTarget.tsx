import { Box } from '@mui/material';

interface IProps {
    id: string;
}

/** Inserts hidden anchor into dom for ideal scroll-on-navigate alignment*/
export const AnchorTarget = ({ id }: IProps) => <Box component='a' marginTop='-96px' position='absolute' id={id} />;

import { Box, CircularProgress } from '@mui/material';

interface IProps {
    fullPage?: boolean;
}

export const Loader = ({ fullPage }: IProps) => (
    <Box
        display='flex'
        m={6}
        alignItems='center'
        flexDirection='column'
        width='100%'
        height={fullPage ? '100vh' : undefined}
    >
        <CircularProgress />
    </Box>
);

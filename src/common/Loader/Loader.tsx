import { Box, CircularProgress } from '@mui/material';

export const Loader = () => (
    <Box display='flex' m={6} alignItems='center' flexDirection='column' width='100%'>
        <CircularProgress />
    </Box>
);

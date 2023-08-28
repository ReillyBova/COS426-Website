import { Box, CircularProgress } from '@mui/material';

export const Loader = () => (
    <Box display='flex' m={6} alignItems='center' flexDirection='column'>
        <CircularProgress />
    </Box>
);

import { Box } from '@mui/material';

interface IProps {
    height?: string;
    minHeight?: string;
    children: React.ReactNode;
}

export const Banner = ({ children, height = '66vh', minHeight = '250px' }: IProps) => (
    <Box height={height} minHeight={minHeight}>
        {children}
    </Box>
);

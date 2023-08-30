import { useState } from 'react';

import { Box, Button, Slide, Theme, Typography, useMediaQuery } from '@mui/material';

import { Styles } from '../../../Common/Types';
import { StaffGrid } from './StaffGrid';

const styles: Styles = {
    width: '100px',
};

export const Staff = () => {
    const isDesktopView = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'));

    const [isVisible, setVisibility] = useState(false);

    return (
        <Typography component='div' paragraph>
            {isDesktopView ? (
                <Box>
                    <StaffGrid />
                </Box>
            ) : (
                <>
                    <Typography component={'div'} paragraph align='center'>
                        <Button
                            variant='contained'
                            color='primary'
                            sx={styles}
                            onClick={() => {
                                setVisibility(!isVisible);
                            }}
                        >
                            {isVisible ? 'Hide' : 'Show'}
                        </Button>
                    </Typography>
                    <Slide direction='up' in={isVisible} mountOnEnter unmountOnExit>
                        <Box>
                            <StaffGrid />
                        </Box>
                    </Slide>
                </>
            )}
        </Typography>
    );
};

export default Staff;

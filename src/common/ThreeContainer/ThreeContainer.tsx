import { useEffect, useRef } from 'react';

import { Box } from '@mui/material';

import { NetworkScene } from '../../scenes/NetworkScene';

const DELAY = 400;

export const ThreeContainer = () => {
    const ref = useRef();

    useEffect(() => {
        // Create Scene
        const scene = new NetworkScene(ref.current);
        const timeout = setTimeout(() => scene.start(), DELAY);

        // Destroy Scene on unmount
        return function cleanup() {
            scene.destroy();
            clearTimeout(timeout);
        };
    });

    return (
        <Box
            sx={{
                height: '100%',
                background: 'linear-gradient(230deg, rgb(245, 128, 37), rgb(232, 88, 159))',
            }}
            ref={ref}
        />
    );
};

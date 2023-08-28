import { useEffect, useRef } from 'react';

import { Box } from '@mui/material';

import { NetworkScene } from '../../Scenes/NetworkScene';
import { Styles } from '../../typings';

const DELAY = 400;

const styles: Styles = {
    height: '100%',
    background: 'linear-gradient(230deg, rgb(245, 128, 37), rgb(232, 88, 159))',
};

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

    return <Box sx={styles} ref={ref} />;
};

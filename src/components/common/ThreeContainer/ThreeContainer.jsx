import React, { useEffect, useRef } from 'react';

function ThreeContainer({ Scene }) {
    const ref = useRef();

    useEffect(
        () => {
            // Create Scene
            const scene = new Scene(ref.current);

            // Destroy Scene on unmount
            return function cleanup() {
                scene.destroy();
            };
        },
        [
            /* Empty update-on array ensures useEffect only runs on mount */
        ]
    );

    return <div style={{ height: '100%' }} ref={ref} />;
}

export default ThreeContainer;

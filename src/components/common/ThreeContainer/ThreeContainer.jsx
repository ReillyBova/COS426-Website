import React, { useEffect, useRef } from 'react';

function ThreeContainer({ Scene, delay }) {
    const ref = useRef();

    useEffect(
        () => {
            // Create Scene
            const scene = new Scene(ref.current);
            const timeout = setTimeout(() => scene.start(), delay);

            // Destroy Scene on unmount
            return function cleanup() {
                scene.destroy();
                clearTimeout(timeout);
            };
        },
        [
            /* Empty update-on array ensures useEffect only runs on mount */
        ]
    );

    return (
        <div
            style={{
                height: '100%',
                background:
                    'linear-gradient(230deg, rgb(245, 128, 37), rgb(232, 88, 159))',
            }}
            ref={ref}
        />
    );
}

export default ThreeContainer;

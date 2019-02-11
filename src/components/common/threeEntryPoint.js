import SceneManager from './sceneManager';

export default (containerElement) => {
    const canvas = createCanvas(document, containerElement);
    const sceneManager = new SceneManager(canvas);

    bindEventListeners();
    render();
    setInterval(sceneManager.updateGradient, 40);

    function createCanvas(document, containerElement) {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'gradient');
        containerElement.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.addEventListener('resize', resizeCanvas, false);
        resizeCanvas();
        document.addEventListener(
            'mousemove',
            sceneManager.onDocumentMouseMove,
            false
        );
        document.addEventListener(
            'touchstart',
            sceneManager.onDocumentTouchStart,
            false
        );
        document.addEventListener(
            'touchmove',
            sceneManager.onDocumentTouchMove,
            false
        );
    }

    function resizeCanvas() {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        sceneManager.onWindowResize();
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
};

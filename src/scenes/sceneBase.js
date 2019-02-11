import { Scene, WebGLRenderer } from 'three';
import { mobileCheck } from 'utils';

// Adapted from https://github.com/tengbao/vanta/blob/master/src/_base.js
class SceneBase {
    constructor(containerElement) {
        // Function bindings
        this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this);
        this.resize = this.resize.bind(this);
        this.animationLoop = this.animationLoop.bind(this);
        this.restart = this.restart.bind(this);

        // Set container element reference
        this.el = containerElement;
        // Alias default options into full options object
        this.options = this.defaultOptions || {};
        // Initialize environment
        this.initThree();
        this.resize();

        // Attempt to initialize subclass
        try {
            this.init();
        } catch (error1) {
            const e = error1;
            console.error('Initialization error:');
            console.error(e);
            if (this.renderer) {
                this.el.removeChild(this.renderer.domElement);
            }
            return;
        }

        // Bind event listeners safely now that we have initialized
        this.bindEventListeners();

        // Start animation
        this.animationLoop();
    }

    bindEventListeners() {
        document.addEventListener('touchstart', this.onTouchDownWrapper, false);
        document.addEventListener('touchmove', this.onTouchMoveWrapper, false);
        document.addEventListener('mousemove', this.onMouseMoveWrapper, false);
        window.addEventListener('scroll', this.onMouseMoveWrapper, false);
        window.addEventListener('resize', this.resize, false);
    }

    initThree() {
        // Set renderer
        this.renderer = new WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        // Create canvas
        const canvas = this.renderer.domElement;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        this.el.appendChild(canvas);
        this.renderer.setPixelRatio(window.devicePixelRatio || 1.0);
        this.renderer.setSize(this.el.width, this.el.height);
        this.scene = new Scene();
    }

    onMouseMoveWrapper(e) {
        const x = (this.mouseX = event.clientX - this.width / 2.0);
        const y = (this.mouseY = e.clientY - this.height / 2.0);
        if (!this.options.mouseEase) {
            this.triggerMouseMove(x, y);
        }
    }

    triggerMouseMove(x, y) {
        if (typeof this.onMouseMove === 'function') {
            this.onMouseMove(x, y);
        }
    }

    onTouchDownWrapper(e) {
        if (event.touches.length > 1) {
            e.preventDefault();
            const x = (this.mouseX = event.clientX - this.width / 2.0);
            const y = (this.mouseY = e.clientY - this.height / 2.0);
            if (!this.options.mouseEase) {
                this.triggerMouseMove(x, y);
            }
        }
    }

    onTouchMoveWrapper(e) {
        if (event.touches.length === 1) {
            e.preventDefault();
            const x = (this.mouseX = event.clientX - this.width / 2.0);
            const y = (this.mouseY = e.clientY - this.height / 2.0);
            if (!this.options.mouseEase) {
                this.triggerMouseMove(x, y);
            }
        }
    }

    setSize() {
        if (mobileCheck() && this.options.scaleMobile) {
            this.scale = this.options.scaleMobile;
        } else {
            this.scale = this.options.scale || 1;
        }
        this.width = this.el.offsetWidth || window.innerWidth;
        this.height = this.el.offsetHeight || window.innerHeight;
    }

    resize() {
        this.setSize();
        const camera = this.camera;
        const renderer = this.renderer;
        if (this.camera != null) {
            camera.aspect = this.width / this.height;
            camera.updateProjectionMatrix();
        }
        if (renderer) {
            renderer.setSize(this.width, this.height);
            renderer.setPixelRatio(
                (window.devicePixelRatio || 1.0) / this.scale
            );
        }

        // Call subclass if it defines resize behavior
        if (typeof this.onResize === 'function') {
            this.onResize();
        }
    }

    isVisible() {
        // Height of element
        const elHeight = this.el.offsetHeight;
        // Coordinate offsets of element from top of screen
        const elRect = this.el.getBoundingClientRect();
        // Y coord for top of visible window/document/viewport
        const scrollTop =
            window.pageYOffset ||
            (
                document.documentElement ||
                document.body.parentNode ||
                document.body
            ).scrollTop;
        // Vertical distance between top of element and top of visible screen
        const offsetTop = elRect.top + scrollTop;
        // Min scrollTop value at which object becomes invisible
        const minScrollTop = offsetTop - window.innerHeight;
        // Max scrollTop value at which object becomes invisible
        const maxScrollTop = offsetTop + elHeight;

        // Test for visibility
        return minScrollTop <= scrollTop && scrollTop <= maxScrollTop;
    }

    animationLoop() {
        // Ease mouse
        if (this.options.mouseEase) {
            this.mouseEaseX = this.mouseEaseX || this.mouseX || 0;
            this.mouseEaseY = this.mouseEaseY || this.mouseY || 0;
            if (Math.abs(this.mouseEaseX - this.mouseX)
                + Math.abs(this.mouseEaseY - this.mouseY)
                > 0.1
            ) {
                this.mouseEaseX =
                    this.mouseEaseX + (this.mouseX - this.mouseEaseX) * 0.05;
                this.mouseEaseY =
                    this.mouseEaseY + (this.mouseY - this.mouseEaseY) * 0.05;
                this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY);
            }
        }

        // Only animate if element is within view
        if (this.isVisible()) {
            if (typeof this.onUpdate === 'function') {
                this.onUpdate();
            }
            if (this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera);
            }
        }

        this.nextFrame = requestAnimationFrame(this.animationLoop);
    }

    restart() {
        // Restart the effect without destroying the renderer
        if (this.scene) {
            while (this.scene.children.length) {
                this.scene.remove(this.scene.children[0]);
            }
        }
        if (typeof this.onRestart === 'function') {
            this.onRestart();
        }
        this.init();
    }

    init() {
        if (typeof this.onInit === 'function') {
            this.onInit();
        }
    }

    destroy() {
        if (typeof this.onDestroy === 'function') {
            this.onDestroy();
        }

        document.removeEventListener('touchstart', this.onTouchDownWrapper);
        document.removeEventListener('touchmove', this.onTouchMoveWrapper);
        document.removeEventListener('mousemove', this.onMouseMoveWrapper);
        window.removeEventListener('scroll', this.onMouseMoveWrapper);
        window.removeEventListener('resize', this.resize);
        window.cancelAnimationFrame(this.nextFrame);

        if (this.renderer) {
            this.el.removeChild(this.renderer.domElement);
            this.renderer = null;
            this.scene = null;
        }
    }
}

export default SceneBase;

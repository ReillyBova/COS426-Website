import { Scene, WebGLRenderer } from 'three';
import { mobileCheck } from 'utils';
import Stats from 'stats-js';

// A base class for ThreeJS scenes that handles common functionality
// API adapted from https://github.com/tengbao/vanta/blob/master/src/_base.js
class SceneBase {
    constructor(containerElement, options = {}) {
        // Function bindings
        this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this);
        this.onTouchMoveWrapper = this.onTouchMoveWrapper.bind(this);
        this.onTouchDownWrapper = this.onTouchDownWrapper.bind(this);
        this.onScrollWrapper = this.onScrollWrapper.bind(this);
        this.onResizeWrapper = this.onResizeWrapper.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.registerAnimationFrame = this.registerAnimationFrame.bind(this);
        this.animationLoop = this.animationLoop.bind(this);
        this.restart = this.restart.bind(this);

        // Set container element reference
        this.el = containerElement;
        this.options = options;

        // Initialize environment
        this.initThree();
        this.onResizeWrapper();

        // Add fps stats if in development
        this.isDev = process.env.NODE_ENV === 'development';
        if (this.isDev) {
            this.stats = new Stats();
            this.stats.dom.style.bottom = '52px';
            this.stats.dom.style.top = 'auto';
            this.stats.dom.style.position = 'relative';
            this.el.appendChild(this.stats.dom);
            this.statsSet = false;
        }

        // Attempt to initialize subclass
        try {
            this.init();
        } catch (error1) {
            const e = error1;
            console.error('Initialization error:');
            console.error(e);
            if (this.renderer) {
                this.el.removeChild(this.renderer.domElement);
                this.el.removeChild(this.stats.dom);
            }
            return;
        }

        // Bind event listeners safely now that we have initialized
        this.bindEventListeners();

        // Setup intersection observer
        this.isVisible = true;
        this.intersectionObserver = new IntersectionObserver(
            this.onVisibilityChange,
            { threshold: 0.0 }
        );
        this.intersectionObserver.observe(this.renderer.domElement);
    }

    start() {
        this.animationLoop();
    }

    bindEventListeners() {
        document.addEventListener('touchstart', this.onTouchDownWrapper, {
            passive: false,
        });
        document.addEventListener('touchmove', this.onTouchMoveWrapper, {
            passive: false,
        });
        if (typeof this.onMouseMove === 'function') {
            document.addEventListener(
                'mousemove',
                this.onMouseMoveWrapper,
                false
            );
        }
        window.addEventListener('scroll', this.onScrollWrapper, false);
        window.addEventListener('resize', this.onResizeWrapper, false);
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
        this.canvas = canvas;
        this.el.appendChild(canvas);
        this.renderer.setPixelRatio(window.devicePixelRatio || 1.0);
        this.renderer.setSize(this.el.width, this.el.height);
        this.scene = new Scene();
    }

    onMouseMoveWrapper(e) {
        const x = (this.mouseX = e.clientX / this.width - 0.5);
        const y = (this.mouseY = e.clientY / this.height - 0.5);
        this.onMouseMove && this.onMouseMove(x, y);
    }

    onTouchDownWrapper(e) {
        if (event.touches.length > 0 && this.onTouchDown) {
            event.touches.length > 1 && e.preventDefault();
            const x = (this.touchDownX =
                e.touches[0].clientX / this.width - 0.5);
            const y = (this.touchDownY =
                e.touches[0].clientY / this.height - 0.5);
            this.onTouchDown && this.onTouchDown(x, y);
        }
    }

    onTouchMoveWrapper(e) {
        if (event.touches.length > 0) {
            const x = (this.touchMoveX =
                e.touches[0].clientX / this.width - 0.5);
            const y = (this.touchMoveY =
                e.touches[0].clientY / this.height - 0.5);
            this.onTouchMove && this.onTouchMove(x, y);
        }
    }

    onScrollWrapper() {
        const scroll =
            window.pageYOffset ||
            (
                document.documentElement ||
                document.body.parentNode ||
                document.body
            ).scrollTop;

        if (typeof this.onScroll === 'function') {
            this.onScroll(scroll);
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

    onResizeWrapper() {
        this.setSize();
        const camera = this.camera;
        const renderer = this.renderer;
        if (this.camera) {
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

    onVisibilityChange(entries) {
        if (entries.length < 1) {
            return;
        }

        // Restart animation if necessary
        const entry = entries[0];
        if (!this.isVisible && entry.isIntersecting) {
            this.registerAnimationFrame();
        }

        // Record visibility state
        this.isVisible = entry.isIntersecting;
    }

    registerAnimationFrame() {
        if (!this.nextFrame) {
            this.nextFrame = requestAnimationFrame(this.animationLoop);
        }
    }

    animationLoop() {
        // Record fps if in dev
        if (this.isDev && !this.statsSet) {
            this.stats.begin();
            this.statsSet = true;
        }

        // No longer need to keep track of frame that just triggered
        this.nextFrame = null;

        // Only animate if element is within view
        if (this.isVisible) {
            // Ask to update the screen asap
            this.registerAnimationFrame();

            // Run update
            this.onRender && this.onRender();
            if (this.scene && this.camera) {
                this.renderer.render(this.scene, this.camera);
            }

            // Record fps if in dev
            if (this.isDev) {
                this.stats.end();
                this.statsSet = false;
            }
        }
    }

    init() {
        if (typeof this.onInit === 'function') {
            this.onInit();
        }
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

    destroy() {
        if (typeof this.onDestroy === 'function') {
            this.onDestroy();
        }

        // Listener cleanup
        document.removeEventListener('touchstart', this.onTouchDownWrapper);
        document.removeEventListener('touchmove', this.onTouchMoveWrapper);
        document.removeEventListener('mousemove', this.onMouseMoveWrapper);
        window.removeEventListener('scroll', this.onScrollWrapper);
        window.removeEventListener('resize', this.onResizeWrapper);
        this.intersectionObserver.disconnect();
        this.isVisible = false;
        this.nextFrame && window.cancelAnimationFrame(this.nextFrame);

        // Memory cleanup
        if (this.renderer) {
            this.el.removeChild(this.renderer.domElement);
            delete this.renderer;
        }
        if (this.scene) {
            delete this.scene;
        }
    }
}

export default SceneBase;

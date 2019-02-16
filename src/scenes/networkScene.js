import SceneBase from './sceneBase';
import { randFloat, randInt, mobileCheck, clamp } from 'utils';
import {
    PerspectiveCamera,
    Vector3,
    Vector2,
    ShaderMaterial,
    Color,
    BufferGeometry,
    BufferAttribute,
    LineSegments,
    PointsMaterial,
    TextureLoader,
    Points,
} from 'three';
import { OpacityFragmentShader, OpacityVertexShader } from 'shaders';
import { CircleTexture } from 'images';

const defaultOptions = {
    color: 0xffffff,
    maxOpacity: 0.4,
    numPoints: 150,
    maxDistance: 40,
    maxSpeed: 2,
    mouseSpeed: 0.025,
    spacing: 100,
    showPoints: true,
    pointSize: 4,
    fov: 40,
    gradientColors: [
        [245, 128, 37],
        [238, 90, 98],
        [232, 88, 159],
        [185, 105, 235],
        [111, 123, 252],
        [122, 193, 255], ],
    gradientSpeed: 0.006,
};

class NetworkScene extends SceneBase {
    constructor(containerElement, options = defaultOptions) {
        super(containerElement, options);
    }

    onInit() {
        const { numPoints, spacing, maxDistance, fov } = this.options;
        // Adjust option values based on current device
        this.params = {};
        if (mobileCheck()) {
            this.params.mobile = true;
            this.params.numPoints = Math.floor(numPoints * 0.6);
            this.params.spacing = Math.floor(spacing * 0.6);
            this.params.maxDistanceSqd = Math.floor(maxDistance * 0.75) ** 2;
        } else {
            this.params.mobile = false;
            this.params.numPoints = numPoints;
            this.params.spacing = spacing;
            this.params.maxDistanceSqd = maxDistance ** 2;
        }

        // Double number of possible lines due to line-segment implementation
        // (requires two attributes per line)
        const numLines = 2 * numPoints ** 2;
        this.params.numLines = numLines;

        // Allocate line mesh for scene
        this.initLines();
        // Allocate points for scene
        this.initPoints();
        // Init parameters for the canvas and draw gradient
        this.initCanvas();

        // Init camera
        const cameraStart = {
            x: spacing * 0.8,
            y: spacing / 6,
            z: spacing * 0.8,
        };
        this.params.cameraStart = cameraStart;

        if (!this.camera) {
            this.camera = new PerspectiveCamera(
                fov,
                this.width / this.height,
                0.01,
                10000
            );

            this.scene.add(this.camera);
        }

        this.camera.position.set(cameraStart.x, cameraStart.y, cameraStart.z);
        this.camera.lookAt(new Vector3(0, 0, 0));

        // Frame parity
        this.params.oddFrame = false;
    }

    onUpdate() {
        const { mouseSpeed } = this.options;
        const {mouseTarget, oddFrame } = this.params;

        // Move camera
        if (mouseTarget) {
            const c = this.camera;
            const dx = mouseTarget.x - c.position.x;
            const dy = mouseTarget.y - c.position.y;
            const dz = mouseTarget.z - c.position.z;
            let adjustCamera = false;

            if (Math.abs(dx) > 0.01) {
                c.position.x += dx * mouseSpeed;
                adjustCamera = true;
            }
            if (Math.abs(dy) > 0.01) {
                c.position.y += dy * mouseSpeed;
                adjustCamera = true;
            }
            if (Math.abs(dz) > 0.01) {
                c.position.z += dz * mouseSpeed;
                adjustCamera = true;
            }

            if (adjustCamera) {
                c.lookAt(new Vector3(0, 0, 0));
            }
        }

        // Update different aspects of scene depending on frame parity
        (oddFrame) ? this.updateGeometries() : this.updateCanvas();
        this.params.oddFrame = !oddFrame;
    }

    onResize() {
        if (this.params && (mobileCheck() !== this.params.mobile)) {
            this.restart();
        }
    }

    onMouseMove(x, y) {
        const { cameraStart } = this.params;
        if (!this.params.mouseTarget) {
            this.params.mouseTarget = {
                x: cameraStart.x,
                y: cameraStart.y,
                z: cameraStart.z,
            };
        }
        const mouseTarget = this.params.mouseTarget;

        // Camera will slowly move towards the target location
        mouseTarget.x = cameraStart.x + x * 50;
        mouseTarget.y = cameraStart.y + y * -20;
        mouseTarget.z = cameraStart.z + x * -50;
    }

    onRestart() {
        this.scene.remove(this.params.linesMesh);
        this.scene.remove(this.params.points);
    }

    onDestroy() {
        this.onRestart();
        this.scene.remove(this.camera);
    }

    // Initialization function for line geometry
    initLines() {
        const { color } = this.params;
        const { numLines } = this.params;

        // Custom material for shading line buffer geometry with varying opacities
        const material = new ShaderMaterial({
            vertexShader: OpacityVertexShader,
            fragmentShader: OpacityFragmentShader,
            uniforms: { color: { type: 'c', value: new Color(color) } },
            transparent: true,
            depthTest: false,
        });

        // Use buffer geometry for efficiency
        const bufferGeometry = new BufferGeometry();

        // Two custom attributes
        this.params.linePositions = new Float32Array(numLines * 3);
        this.params.lineOpacities = new Float32Array(numLines);
        bufferGeometry.addAttribute(
            'position',
            new BufferAttribute(this.params.linePositions, 3).setDynamic(true)
        );
        bufferGeometry.addAttribute(
            'opacity',
            new BufferAttribute(this.params.lineOpacities, 1).setDynamic(true)
        );

        // Do not draw anything until ready
        bufferGeometry.setDrawRange(0, 0);

        // Build mesh and load into scene
        this.params.linesMesh = new LineSegments(bufferGeometry, material);
        this.scene.add(this.params.linesMesh);
    }

    // Initialization function for points geometry
    initPoints() {
        const {
            color,
            maxOpacity,
            showPoints,
            pointSize,
            maxSpeed,
        } = this.options;
        const { numPoints, spacing } = this.params;

        // Sprite material for point
        const sprite = showPoints ? new TextureLoader().load(CircleTexture) : null;
        if (sprite) {
            sprite.center = new Vector2(0, 0);
        }
        const material = new PointsMaterial({
            color: color,
            opacity: showPoints ? maxOpacity : 0,
            size: pointSize,
            transparent: true,
            depthTest: false,
            sizeAttenuation: false,
            map: sprite,
        });

        // Buffer Geometry for efficiency
        const bufferGeometry = new BufferGeometry();
        this.params.pointPositions = new Float32Array(numPoints * 3);
        bufferGeometry.addAttribute(
            'position',
            new BufferAttribute(this.params.pointPositions, 3).setDynamic(true)
        );

        // Initialize position and speed for each point
        this.params.rotationSpeeds = new Float32Array(numPoints);
        this.params.rotationRadius = new Float32Array(numPoints);
        let index = 0;
        for (let i = 0; i < numPoints; i++) {
            let x = randFloat(0, spacing);
            let y = randFloat(0, spacing) * 0.6;
            let z = randFloat(0, spacing);

            // Stratified sampling
            const rem = i % 8;
            if (rem === 1) {
                x *= -1;
            } else if (rem === 2) {
                y *= -1;
            } else if (rem === 3) {
                z *= -1;
            } else if (rem === 4) {
                x *= -1;
                y *= -1;
            } else if (rem === 5) {
                x *= -1;
                z *= -1;
            } else if (rem === 6) {
                y *= -1;
                z *= -1;
            } else if (rem === 7) {
                x *= -1;
                y *= -1;
                z *= -1;
            }

            // Set position
            this.params.pointPositions[index++] = x;
            this.params.pointPositions[index++] = y;
            this.params.pointPositions[index++] = z;

            // Set speed
            const dist = Math.sqrt(x ** 2 + z ** 2);
            this.params.rotationRadius[i] = dist;
            this.params.rotationSpeeds[i] =
                dist > 0.1
                    ? (randFloat(-maxSpeed, maxSpeed) * spacing) / dist
                    : 0;
        }

        // Allow all points to be drawn
        bufferGeometry.setDrawRange(0, numPoints);

        // Build point cloud and load into scene
        this.params.points = new Points(bufferGeometry, material);
        this.scene.add(this.params.points);
    }

    initCanvas() {
        const { gradientColors, gradientSpeed } = this.options;

        this.params.gradientColors = gradientColors;
        this.params.gradientSpeed = gradientSpeed;
        this.params.gradientIndices = [0, 1, 2, 3];
        this.params.gradientRotation = 230;
        this.params.gradientStep = 0;

        this.updateCanvas();
    }

    updateGeometries() {
        const { maxOpacity } = this.options;
        const {
            maxDistanceSqd,
            linesMesh,
            points,
            numPoints,
            pointPositions,
            rotationSpeeds,
            rotationRadius,
            linePositions,
            lineOpacities,
        } = this.params;

        // Bookkeeping variables/indices
        let vertexIndex = 0;
        let opacityIndex = 0;
        let numConnected = 0;

        // Loop through loop pairs, updating point positions and drawing lines
        let p1_index = 0;
        for (let i = 0; i < numPoints; i++) {
            // Find the current point's position and position index
            const x = p1_index++;
            const y = p1_index++;
            const z = p1_index++;
            const px = pointPositions[x];
            const py = pointPositions[y];
            const pz = pointPositions[z];

            // Update position based on speed (if necessary)
            if (rotationSpeeds[i] !== 0) {
                let ang = Math.atan2(pz, px);
                ang += 0.0005 * rotationSpeeds[i];
                pointPositions[x] = rotationRadius[i] * Math.cos(ang);
                pointPositions[z] = rotationRadius[i] * Math.sin(ang);
            }

            // Test if we should draw a line between this points and other points
            let p2_index = p1_index;
            for (let j = i + 1; j < numPoints; j++) {
                // Find the test point's position
                const p2x = pointPositions[p2_index++];
                const p2y = pointPositions[p2_index++];
                const p2z = pointPositions[p2_index++];
                // Compute distance squared
                const dx = px - p2x;
                const dy = py - p2y;
                const dz = pz - p2z;
                const distSqd = dx * dx + dy * dy + dz * dz;

                // Draw a line if necessary
                if (distSqd < maxDistanceSqd) {
                    // Opacity ranges from [0, maxOpacity], with squared dropoff
                    const strength = 1 - distSqd / maxDistanceSqd;
                    const opacity = clamp(
                        4 * (strength * strength),
                        0,
                        maxOpacity
                    );

                    // Set the two positions for the line
                    linePositions[vertexIndex++] = px;
                    linePositions[vertexIndex++] = py;
                    linePositions[vertexIndex++] = pz;
                    linePositions[vertexIndex++] = p2x;
                    linePositions[vertexIndex++] = p2y;
                    linePositions[vertexIndex++] = p2z;

                    // Set opacity for the line
                    lineOpacities[opacityIndex++] = opacity;
                    lineOpacities[opacityIndex++] = opacity;

                    numConnected++;
                }
            }
        }

        // Draw the connected lines
        linesMesh.geometry.setDrawRange(0, numConnected * 2);
        // Tell the renderer to update these values
        linesMesh.geometry.attributes.position.needsUpdate = true;
        linesMesh.geometry.attributes.opacity.needsUpdate = true;
        points.geometry.attributes.position.needsUpdate = true;
    }

    updateCanvas() {
        const { gradientColors, gradientIndices, gradientStep, gradientSpeed, gradientRotation } = this.params;
        const canvas = this.canvas;

        // Get current colors for gradient
        const colorA_Current = gradientColors[gradientIndices[0]];
        const colorA_Next = gradientColors[gradientIndices[1]];
        const colorB_Current = gradientColors[gradientIndices[2]];
        const colorB_Next = gradientColors[gradientIndices[3]];

        // Interpolate channels
        const redA = Math.round((1 - gradientStep) * colorA_Current[0] + gradientStep * colorA_Next[0]);
        const greenA = Math.round((1 - gradientStep) * colorA_Current[1] + gradientStep * colorA_Next[1]);
        const blueA = Math.round((1 - gradientStep) * colorA_Current[2] + gradientStep * colorA_Next[2]);
        const colorA = `rgb(${redA},${greenA},${blueA})`;
        const redB = Math.round((1 - gradientStep) * colorB_Current[0] + gradientStep * colorB_Next[0]);
        const greenB = Math.round((1 - gradientStep) * colorB_Current[1] + gradientStep * colorB_Next[1]);
        const blueB = Math.round((1 - gradientStep) * colorB_Current[2] + gradientStep * colorB_Next[2]);
        const colorB = `rgb(${redB},${greenB},${blueB})`;

        // Update gradient
        canvas.style.background = `linear-gradient(${gradientRotation}deg,${colorA},${colorB})`;

        // Advance time
        this.params.gradientStep += gradientSpeed;
        this.params.gradientRotation = (gradientRotation + 10 * gradientSpeed) % 360;

        // Choose a new color once interpolation complete
        if (this.params.gradientStep >= 1) {
            this.params.gradientStep %= 1;
            // Current = Next
            gradientIndices[0] = gradientIndices[1];
            gradientIndices[2] = gradientIndices[3];
            // Pick new colors that aren't the same as the previous
            gradientIndices[1] += randInt(1, gradientColors.length - 1);
            gradientIndices[3] += randInt(1, gradientColors.length - 1);
            gradientIndices[1] %= gradientColors.length;
            gradientIndices[3] %= gradientColors.length;
        }
    }
}

export default NetworkScene;

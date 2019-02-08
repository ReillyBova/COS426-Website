import * as THREE from 'three';
import { CircleTexture } from 'images';

export default canvas => {

    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height,
        hw: canvas.width/2,
        hh: canvas.height/2
    }

    const mousePosition = {
        x: 0,
        y: 0
    }
    // Old colors
    // let colors = [[62,35,255], [60,255,60], [255,35,98],
    //  [45,175,230], [255,0,255], [255,128,0]];
    let colors = [[245, 128, 37], [238, 90, 98], [194, 83, 137],
      [129, 88, 147], [70, 85, 126], [47, 72, 88]];
    let step = 0;
    const colorIndices = [0,1,2,3];
    const gradientSpeed = 0.002;

    var scene, camera, renderer;
    init();

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, screenDimensions.x / screenDimensions.y, 1, 10000);
        camera.position.z = 100;
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(screenDimensions.x, screenDimensions.y);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        var points_mat = new THREE.PointsMaterial( {
            color: 0xffffff,
            opacity: 0.75,
            size: 15,
            transparent: true,
            map: new THREE.TextureLoader().load(CircleTexture)
        });
        var geometry = new THREE.Geometry();
        /*
         *   Particles
         */
        for (var i = 0; i < 150; i++) {
            const position = new THREE.Vector3(Math.random() * 2 - 1 , Math.random() * 2 - 1, Math.random() * 2 - 1);
            position.normalize();
            position.multiplyScalar( Math.random() * 10 + 600 );
            geometry.vertices.push(position);
        }

        scene.add(new THREE.Points(geometry, points_mat));
        /*
         *   Lines
         */
        var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0xffffff, opacity: 0.45, transparent: true}));
        scene.add(line);
    }

    function update() {
        camera.position.x += ( mousePosition.x - camera.position.x ) * 0.1;
        camera.position.y += ( - mousePosition.y + 200 - camera.position.y ) * 0.05;
        camera.lookAt( scene.position );
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;
        screenDimensions.hw = width/2;
        screenDimensions.hh = height/2;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }

    function onDocumentMouseMove(event) {
        mousePosition.x = (event.clientX - screenDimensions.hw) * 0.05;
        mousePosition.y = (event.clientY - screenDimensions.hh) * 0.2;
    }

    function onDocumentTouchStart(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
            mousePosition.x = (event.touches[0].pageX - screenDimensions.hw) * 0.7;
            mousePosition.y = (event.touches[0].pageY - screenDimensions.hh) * 0.7;
        }
    }

    function onDocumentTouchMove(event) {
        if (event.touches.length == 1) {
            event.preventDefault();
            mousePosition.x = event.touches[0].pageX - screenDimensions.hw;
            mousePosition.y = event.touches[0].pageY - screenDimensions.hh;
        }
    }

    function updateGradient() {
      let c0_0 = colors[colorIndices[0]];
      let c0_1 = colors[colorIndices[1]];
      let c1_0 = colors[colorIndices[2]];
      let c1_1 = colors[colorIndices[3]];
      let r1 = Math.round((1-step) * c0_0[0] + step * c0_1[0]);
      let g1 = Math.round((1-step) * c0_0[1] + step * c0_1[1]);
      let b1 = Math.round((1-step) * c0_0[2] + step * c0_1[2]);
      let color1 = "rgb("+r1+","+g1+","+b1+")";
      let r2 = Math.round((1-step) * c1_0[0] + step * c1_1[0]);
      let g2 = Math.round((1-step) * c1_0[1] + step * c1_1[1]);
      let b2 = Math.round((1-step) * c1_0[2] + step * c1_1[2]);
      let color2 = "rgb("+r2+","+g2+","+b2+")";
      let c = document.getElementById('gradient')
      c.style.background = "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))";
      step += gradientSpeed;
      if ( step >= 1 )
      {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        colorIndices[1] = (colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      }
    }

    return {
        update,
        onWindowResize,
        onDocumentMouseMove,
        onDocumentTouchStart,
        onDocumentTouchMove,
        updateGradient
    }
}

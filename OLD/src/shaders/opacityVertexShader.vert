attribute float opacity;

varying float vOpacity;

void main() {
    vOpacity = opacity;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}

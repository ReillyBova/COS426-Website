import React, { Component } from 'react';
import { NetworkScene } from 'scenes';

class ThreeContainer extends Component {
    constructor(props) {
        super(props);
        this.threeRootElement = React.createRef();
    }

    componentDidMount() {
        this.scene = new NetworkScene(this.threeRootElement.current);
    }

    componentWillUnmount() {
        this.scene.destroy();
        delete this.scene;
    }

    render() {
        return <div style={{ height: '100%' }} ref={this.threeRootElement} />;
    }
}

export default ThreeContainer;

import React, { Component } from 'react';
import threeEntryPoint from './threeEntryPoint';

class ThreeContainer extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }
    render() {
        return (
            <div
                style={{ height: '100%' }}
                ref={(element) => (this.threeRootElement = element)}
            />
        );
    }
}

export default ThreeContainer;

import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
    const { children, height=66 } = props;
    return <div style={{ height: `${height}vh`, minHeight: 250 }}>{children}</div>;
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Banner;

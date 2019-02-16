import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
    const { children } = props;
    return <div style={{ height: '66vh', minHeight: 250 }}>{children}</div>;
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Banner;

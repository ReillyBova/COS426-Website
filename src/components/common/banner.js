import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
    const { children, height='66vh', minHeight='250px' } = props;
    return <div style={{ height: height, minHeight: minHeight }}>{children}</div>;
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Banner;

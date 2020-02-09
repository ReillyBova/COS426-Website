import React from 'react';
import PropTypes from 'prop-types';

function Banner({ children, height = '66vh', minHeight = '250px', ...props }) {
    return (
        <div style={{ height: height, minHeight: minHeight }} {...props}>
            {children}
        </div>
    );
}

Banner.propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
    minHeight: PropTypes.string,
};

export default Banner;

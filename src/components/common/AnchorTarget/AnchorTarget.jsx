// Library imports
import React from 'react';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Custom styling for component
const anchorTargetStyles = makeStyles(() => ({
    anchorTarget: {
        position: 'absolute',
        marginTop: -96,
    },
}));

// Inserts hidden anchor into dom
const AnchorTarget = ({ id }) => {
    const { anchorTarget } = anchorTargetStyles();

    return (
        <a className={anchorTarget} id={id}/>
    );
};

export default AnchorTarget;

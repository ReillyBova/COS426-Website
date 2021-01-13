// Library imports
import React from 'react';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const projectButtonStyles = makeStyles((theme) => ({
    buttonStyle: {
        marginBottom: `${theme.spacing(1)}px`,
    },
}));

// Generate a project card from markdown content
function ProjectButton({ href, ...props }) {
    const { buttonStyle } = projectButtonStyles();

    return (
        <Button
            className={buttonStyle}
            disabled={!href}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            color='primary'
            {...props}
        />
    );
}

export default ProjectButton;

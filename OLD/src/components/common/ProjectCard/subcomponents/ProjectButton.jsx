// Library imports
import React from 'react';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const projectButtonStyles = makeStyles((theme) => ({
    buttonStyle: {
        marginBottom: `${theme.spacing(1)}px`,
    },
}));

// Generate a project card from markdown content
function ProjectButton({ href, isMobile, startIcon, children, ...props }) {
    const { buttonStyle } = projectButtonStyles();

    if (isMobile && props.variant !== 'contained') {
        return (
            <Tooltip title={children}>
                <IconButton
                    className={buttonStyle}
                    disabled={!href}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    color='primary'
                    size='small'
                    {...props}
                >
                    {startIcon}
                </IconButton>
            </Tooltip>
        );
    } else {
        return (
            <Button
                className={buttonStyle}
                disabled={!href}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                color='primary'
                size={isMobile ? 'small' : 'medium'}
                startIcon={startIcon}
                {...props}
            >
                {children}
            </Button>
        );
    }
}

export default ProjectButton;

// Library imports
import React from 'react';
import clsx from 'clsx';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const projectTitleStyles = makeStyles(() => ({
    headerStyle: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
    },
    expandIconStyle: {
        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    isExpandedStyle: {
        transform: 'rotate(180deg)',
    },
    isCollapsedStyle: {
        transform: 'rotate(0deg)',
    },
}));

// A project title element to handle accordion behavior
function ProjectTitle({ isAccordion, isExpanded, toggleExpansion, children }) {
    const {
        headerStyle,
        expandIconStyle,
        isExpandedStyle,
        isCollapsedStyle,
    } = projectTitleStyles();

    return (
        <div className={headerStyle}>
            {children}
            {isAccordion && (
                <Tooltip title={isExpanded ? 'Show Less' : 'Show More'}>
                    <IconButton
                        size='small'
                        onClick={toggleExpansion}
                        aria-expanded={isExpanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon
                            className={clsx(
                                expandIconStyle,
                                isExpanded ? isExpandedStyle : isCollapsedStyle
                            )}
                        />
                    </IconButton>
                </Tooltip>
            )}
        </div>
    );
}

export default ProjectTitle;

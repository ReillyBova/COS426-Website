// Library imports
import React from 'react';
import clsx from 'clsx';
// Project imports
import { ExternalLink } from 'components';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

const imageStyles = makeStyles((theme) => ({
    imageShadow: {
        cursor: 'pointer',
        maxWidth: 680,
        width: '100%',
        boxShadow: `${theme.shadows[4]} !important`,
        transition:
            'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        '&:hover': {
            boxShadow: `${theme.shadows[8]} !important`,
        },
    },
}));

// A template that generating assignment specs from markdown content
function HoverImage({ className, ...props }) {
    const { imageShadow } = imageStyles();

    // Add a link for non gatsby wrapped images
    if (!className) {
        let alt = '';
        const imagePath = props.src.split('.');
        if (imagePath.length > 0) {
            const imagePathComponents = imagePath[0].split('/');
            alt = imagePathComponents[imagePathComponents.length - 1];
        } else {
            alt = '';
        }

        return (
            <ExternalLink to={props.src}>
                <img className={imageShadow} alt={alt} {...props} />
            </ExternalLink>
        );
    } else {
        return <img className={clsx(className, imageShadow)} {...props} />;
    }
}

export default HoverImage;

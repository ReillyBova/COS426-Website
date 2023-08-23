import React, { forwardRef } from 'react';

import { Button as MuiButton, ButtonProps } from '@mui/material';

import { IInternalLinkHandlerProps, InternalLinkHandler } from './InternalLinkHandler';

const patchButtonBaseComponent = <E, P>(BaseButtonComponent: React.ComponentType<P>) => {
    return forwardRef<E, P & IInternalLinkHandlerProps>((props, ref) => (
        <BaseButtonComponent component={InternalLinkHandler} ref={ref} {...props} />
    ));
};

export const InternalLinkButton = patchButtonBaseComponent<HTMLButtonElement, ButtonProps>(MuiButton);

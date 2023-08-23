import { forwardRef } from 'react';
import { Link as ReactRouterLinkInternal, LinkProps } from 'react-router-dom';

import { COURSE_CONFIG } from '../../COURSE_CONFIG';
import { WebUtils } from '../../Utils/WebUtils';

export interface IInternalLinkHandlerProps extends LinkProps {
    to: string;
}

export const InternalLinkHandler = forwardRef<HTMLAnchorElement, IInternalLinkHandlerProps>(({ to, ...rest }, ref) => {
    return (
        <ReactRouterLinkInternal to={`${COURSE_CONFIG.pathPrefix}/${WebUtils.trimSlashes(to)}`} ref={ref} {...rest} />
    );
});

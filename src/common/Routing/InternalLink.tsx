import { forwardRef } from 'react';

import { Link as MuiLink, LinkTypeMap } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { InternalLinkHandler } from './InternalLinkHandler';

interface IProps extends Omit<OverrideProps<LinkTypeMap, React.ElementType>, 'href'> {
    to: string;
}

export const InternalLink = forwardRef<HTMLAnchorElement, IProps>((props, ref) => {
    return <MuiLink component={InternalLinkHandler} ref={ref} {...props} />;
});

import { Children } from 'react';

import { Box, Typography } from '@mui/material';

import { COURSE_CONFIG } from '../../COURSE_CONFIG';
import { Styles } from '../../typings';
import { WebUtils } from '../../Utils/WebUtils';
import { AnchorLink } from '../AnchorLink/AnchorLink';
import { ExternalLink } from '../Routing/ExternalLink';
import { InternalLink } from '../Routing/InternalLink';

interface IInjectedComponentProps {
    children: React.ReactNode;
}

const getHeaderId = (children: React.ReactNode) => {
    const firstChild = Children.toArray(children)[0];

    return firstChild ? WebUtils.makeURL(firstChild as string) : '';
};

export const InjectedH1 = ({ children }: IInjectedComponentProps) => (
    <Typography variant='h4' gutterBottom>
        <AnchorLink id={getHeaderId(children)}>{children}</AnchorLink>
    </Typography>
);

export const InjectedH2 = ({ children }: IInjectedComponentProps) => (
    <Typography variant='h5' gutterBottom>
        <AnchorLink id={getHeaderId(children)}>{children}</AnchorLink>
    </Typography>
);

export const InjectedH3 = ({ children }: IInjectedComponentProps) => (
    <Typography variant='h6' gutterBottom>
        <AnchorLink id={getHeaderId(children)}>{children}</AnchorLink>
    </Typography>
);

const stylesInjectedP: Styles = {
    overflowWrap: 'anywhere',
};

export const InjectedP = ({ children }: IInjectedComponentProps) => (
    <Typography variant='body1' sx={stylesInjectedP} paragraph>
        {children}
    </Typography>
);

const stylesInjectedCode: Styles = {
    fontSize: 16,
    lineHeight: '1rem',
};

export const InjectedCode = ({ children }: IInjectedComponentProps) => (
    <Box component='code' sx={stylesInjectedCode}>
        {children}
    </Box>
);

export const InjectedUl = ({ children }: IInjectedComponentProps) => (
    <Typography variant='body1' component='ul' paragraph>
        {children}
    </Typography>
);

export const InjectedOl = ({ children }: IInjectedComponentProps) => (
    <Typography variant='body1' component='ol' paragraph>
        {children}
    </Typography>
);

const stylesInjectedTable: Styles = {
    width: '100%',
    marginBottom: 2,
    tableLayout: 'fixed',
};

export const InjectedTable = ({ children }: IInjectedComponentProps) => (
    <Box component='table' sx={stylesInjectedTable}>
        {children}
    </Box>
);

export const InjectedA = ({ href, children }: IInjectedComponentProps & { href: string }) => (
    <ExternalLink to={href}>{children}</ExternalLink>
);

export const InjectedInternalLink = ({ href, children }: IInjectedComponentProps & { href: string }) => (
    <InternalLink to={href}>{children}</InternalLink>
);

export const InjectedPiazzaLink = () => (
    <ExternalLink to={COURSE_CONFIG.courseSettings.piazzaURL}>{'Piazza'}</ExternalLink>
);

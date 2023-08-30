import React, { useContext } from 'react';

import { Button } from '@mui/material';

import { StylesGroup } from '../../../typings';
import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';
import { PageScrollBoxContext } from '../SiteLayout';

interface IProps {
    exact: boolean;
    to: string;
    children: React.ReactNode;
}

const styles: StylesGroup = {
    base: {
        padding: '8px 24px',
        borderRadius: 0,
        fontSize: 16,
        height: 64,
    },
    inactive: {
        '&:hover': {
            backgroundColor: '#FFFFFF10',
        },
    },
};

export const NavbarButton = ({ to, exact, children }: IProps) => {
    const isActive = WebUtils.useIsLinkActive(to, exact);

    const pageScrollBoxElement = useContext(PageScrollBoxContext);

    return (
        <Button
            sx={[styles.base, !isActive && styles.inactive]}
            component={InternalLink}
            to={to}
            color={isActive ? 'primary' : 'inherit'}
            onClick={() => {
                if (pageScrollBoxElement) {
                    pageScrollBoxElement.scrollTop = 0;
                }
            }}
        >
            {children}
        </Button>
    );
};

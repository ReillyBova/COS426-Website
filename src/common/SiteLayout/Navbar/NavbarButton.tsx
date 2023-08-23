import React from 'react';

import { Button } from '@mui/material';

import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';

interface IProps {
    exact: boolean;
    to: string;
    children: React.ReactNode;
}

export const NavbarButton = ({ to, exact, children }: IProps) => {
    const isActive = WebUtils.useIsLinkActive(to, exact);

    return (
        <Button
            sx={{
                padding: '8px 24px',
                borderRadius: 0,
                fontSize: 16,
                height: 64,
                ...(!isActive && {
                    '&:hover': {
                        backgroundColor: '#FFFFFF10',
                    },
                }),
            }}
            component={InternalLink}
            to={to}
            color={isActive ? 'primary' : 'inherit'}
        >
            {children}
        </Button>
    );
};

{
    /* <Button
component={Link}
to={to}
className={clsx(classes.navbarButton, active && 'active')}
color={active ? 'primary' : 'inherit'}
>
{children}
</Button> */
}

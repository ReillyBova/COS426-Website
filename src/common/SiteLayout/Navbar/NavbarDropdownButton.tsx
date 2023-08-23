import { MenuItem } from '@mui/material';

import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';

interface IProps {
    onClick: () => void;
    exact: boolean;
    to: string;
    children: React.ReactNode;
}

/** Dropdown menu button for mobile navbar  */
export const NavbarDropdownButton = ({ onClick, to, exact, children }: IProps) => {
    const isActive = WebUtils.useIsLinkActive(to, exact);

    return (
        <MenuItem
            component={InternalLink}
            to={to}
            onClick={onClick}
            sx={{
                fontWeight: 600,
                '&:focus:not(:hover)': {
                    backgroundColor: '#ffffff',
                },
                ...(isActive && {
                    color: 'primary.main',
                }),
            }}
        >
            {children}
        </MenuItem>
    );
};

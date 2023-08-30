import { MenuItem } from '@mui/material';

import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';
import { StylesGroup } from '../../Types';

interface IProps {
    onClick: () => void;
    exact: boolean;
    to: string;
    children: React.ReactNode;
}

const styles: StylesGroup = {
    base: {
        fontWeight: 600,
        '&:focus:not(:hover)': {
            backgroundColor: '#ffffff',
        },
    },
    active: {
        color: 'primary.main',
    },
};

/** Dropdown menu button for mobile navbar  */
export const NavbarDropdownButton = ({ onClick, to, exact, children }: IProps) => {
    const isActive = WebUtils.useIsLinkActive(to, exact);

    return (
        <MenuItem component={InternalLink} to={to} onClick={onClick} sx={[styles.base, isActive && styles.active]}>
            {children}
        </MenuItem>
    );
};

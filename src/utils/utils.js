import { withPrefix } from "gatsby";

// Check if the link points to the current page
export const isActive = (to, exact) => {
    if (typeof(window) === 'undefined') {
        return false;
    }

    if (exact && window.location.pathname === withPrefix(to)) {
        return true;
    } else if (!exact && window.location.pathname.match("^" + withPrefix(to))) {
        return true;
    }
    return false;
};

import { withPrefix } from 'gatsby';

// Check if the link points to the current page.
export const isActive = (to, exact) => {
    if (typeof window === 'undefined') {
        return false;
    }

    if (exact) {
        if (
            window.location.pathname === withPrefix(to) ||
            (to === '/' && window.location.pathname === withPrefix(''))
        ) {
            return true;
        }
    } else if (window.location.pathname.match('^' + withPrefix(to))) {
        return true;
    }
    return false;
};

// Map string to URL
export const urlify = (string) =>
    string
        .replace(/\s+/g, '-')
        .replace(/’/g, '')
        .toLowerCase();

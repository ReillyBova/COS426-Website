import { withPrefix } from 'gatsby';
import { useLocation } from "@reach/router";

// Check if the link points to the current page.
export const isActive = (to, exact) => {
    const location = useLocation();

    if (exact) {
        if (
            location.pathname === withPrefix(to) ||
            (to === '/' && location.pathname === withPrefix(''))
        ) {
            return true;
        }
    } else if (location.pathname.match('^' + withPrefix(to))) {
        return true;
    }
    return false;
};

// Determine how far down the page the user has scrolled
export const scrollTop = () => {
    if (typeof window !== 'undefined') {
        return (
            window.pageYOffset ||
            (
                document.documentElement ||
                document.body.parentNode ||
                document.body
            ).scrollTop
        );
    }
};

// Determine how tall the browser window is
export const winHeight = () => {
    if (typeof window !== 'undefined') {
        return (
            window.innerHeight ||
            (document.documentElement || document.body).clientHeight
        );
    }
};

// Map string to URL
export const urlify = (string) =>
    string
        .replace(/\s+/g, '-')
        .replace(/’/g, '')
        .toLowerCase();

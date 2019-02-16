import { withPrefix } from 'gatsby';

// Check if the link points to the current page
export const isActive = (to, exact) => {
    if (typeof window === 'undefined') {
        return false;
    }

    if (exact && window.location.pathname === withPrefix(to)) {
        return true;
    } else if (!exact && window.location.pathname.match('^' + withPrefix(to))) {
        return true;
    }
    return false;
};

// Check if on mobile device
// from: https://github.com/tengbao/vanta/blob/master/src/helpers.js
export const mobileCheck = () => {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        ) || window.innerWidth < 600
    );
};

// Return a random entry from a list
export const sample = (list) => list[Math.floor(Math.random() * list.length)];

// Return a random float in the range [start, end)
export function randFloat(start = 0, end = 1) {
    return start + Math.random() * (end - start);
}

// Return a random int in the range [start, end)
export function randInt(start = 0, end = 1) {
    return Math.floor(start + Math.random() * (end - start + 1));
}

// Clamp a value to range [low, hi]
export function clamp(val, low = 0, high = 1) {
    if (val < low) {
        return low;
    } else if (val > high) {
        return high;
    }

    return val;
}

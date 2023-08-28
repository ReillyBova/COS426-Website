import { useLocation } from 'react-router-dom';

export namespace WebUtils {
    export const withPrefix = (url: string) => `${import.meta.env.BASE_URL}/${trimSlashes(url)}`;

    /** React hook to check if the link points to the current page.  */
    export const useIsLinkActive = (to = '/', exactMatch = false) => {
        const location = useLocation();

        if (exactMatch) {
            return location.pathname === withPrefix(to) || (to === '/' && location.pathname === withPrefix(''));
        } else {
            return location.pathname.match('^' + withPrefix(to));
        }
    };

    type StoredItem<T> = { value: T; expiry: number };

    /**
     * Set local storage with expiry
     * Adapted from: https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/#full-example
     */
    export const setLocalStorage = <T>(key: string, value: T, daysToLive: number) => {
        /** Convert daysToLive to msToLive */
        const msToLive = daysToLive * 24 * 60 * 60 * 1000;

        /** Place an object in localStorage[key] with value and expiry */
        const now = new Date();
        const item: StoredItem<T> = {
            value: value,
            expiry: now.getTime() + msToLive,
        };

        try {
            window.localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch {
            return false;
        }
    };

    export const getLocalStorage = <T>(key: string): T | undefined => {
        const itemString = localStorage.getItem(key);

        /** If the item doesn't exist, return null */
        if (itemString === null) {
            return undefined;
        }

        const item: StoredItem<T> = JSON.parse(itemString);

        /** Test to ensure the expiry field is present */
        const { value, expiry } = item;
        if (!expiry) {
            return undefined;
        }

        /** Test for expiration */
        const now = new Date();
        if (now.getTime() > expiry) {
            /** Delete and return undefined if expired */
            window.localStorage.removeItem(key);
            return undefined;
        }

        return value;
    };

    /** Trim the strip and remove trailing and leading slashes */
    export const trimSlashes = (url: string) => url.trim().replace(/^\/|\/$/gm, '');

    export const makeURL = (url: string) =>
        encodeURI(
            url
                .replace(/’/g, '')
                .replace(/[^\x00-\x7F]+/g, '')
                .replace(/^\s+/g, '')
                .replace(/\s+/g, '-')
                .replace(/–/g, '-')
                .replace(/:/g, '')
                .toLowerCase()
        );

    /** Get the current scroll offset for what the user is looking at */
    export const scrollTop = () =>
        window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    /** Evaluate browser height */
    export const windowHeight = () => window.innerHeight || (document.documentElement || document.body).clientHeight;

    export const withThrottling = (callback: () => void, maxRateMs = 200) => {
        let isThrottled = false;
        let isScheduled = false;

        const clearThrottle = () => {
            if (isScheduled) {
                callback();
            }

            isThrottled = false;
            isScheduled = false;
        };

        return () => {
            if (!isThrottled) {
                isThrottled = true;

                callback();

                setTimeout(clearThrottle, maxRateMs);
            } else {
                isScheduled = true;
            }
        };
    };
}

import { withPrefix, useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

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
     encodeURI(string
        .replace(/\s+/g, '-')
        .replace(/’/g, '')
        .toLowerCase());

// Function to compute date from week and day
export const semesterOffsetToDateString = (weekNumber, dayOfWeek) => {
    // Grab semester and first day of semester
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            semester
                            firstDayOfSemester
                            firstLecture
                            secondLecture
                        }
                    }
                }
            }
        `
    );
    const {
        semester,
        firstDayOfSemester,
    } = site.siteMetadata.courseSettings;

    // Compute first day of the semester
    const firstDay = new Date(`${semester}-${firstDayOfSemester}Z`);

    // String mapping days to indices
    const dayToNumber = {
        Monday: 0,
        Tuesday: 1,
        Wednesday: 2,
        Thursday: 3,
        Friday: 4,
        Saturday: 5,
        Sunday: 6,
    };

    // Format function
    const dateFormatOptions = {
        timeZone: 'UTC',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    };
    const formatDate = (date) =>
        date.toLocaleDateString(undefined, dateFormatOptions);

    // Allocate fresh memory for the result
    const result = new Date(firstDay);
    // Corner case
    if (!dayToNumber[dayOfWeek]) {
        console.warn(`Error: ${dayOfWeek} is not a day of the week`);
        return formatDate(result);
    }

    // Compute result
    let adjustedWeekNumber = weekNumber;
    if (adjustedWeekNumber > 5) {
        // Add an extra week for spring break
        adjustedWeekNumber += 1;
    }
    if (adjustedWeekNumber > 12) {
        // Add an extra week for reading period
        adjustedWeekNumber += 1;
    }
    result.setUTCDate(
        result.getUTCDate() +
            7 * adjustedWeekNumber +
            dayToNumber[dayOfWeek]
    );
    return formatDate(result);
};

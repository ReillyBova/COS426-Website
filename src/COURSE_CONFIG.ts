import { WebUtils } from './Utils/WebUtils';

/** Weekly Settings */
const numLecturesPosted = 22; // Increment every time a lecture is posted
const numPreceptsPosted = 12; // Increment every time a precept is posted
/** Annual Settings */
const semester = 2023; // Increment every year
const isFall = true; // True if offered in fall term, false if offered in spring term
const firstDayOfSemester = '09-05'; // Adjust based off of academic calendar
const firstLecture = 'Tuesday'; // Change based off of Registrar scheduling
const secondLecture = 'Thursday'; // Change based off of Registrar scheduling

const piazzaURL = 'https://piazza.com/princeton/spring2022/cos426/home'; // Piazza Link
const pathURL = '/COS426-Website'; // Subfolder location; necessary for internal links.
const baseURL = 'https://reillybova.github.io'; // Root host domain for site

const assetServerBaseURL = 'https://www.cs.princeton.edu/courses/archive/fall23/cos426/assets'; // Root URL for asset and image hosting
const peopleImagePath = '/src/assets/images/people/'; // Relative URL for people image file

/** Misc derived values (don't touch) */
const sanitizedPathUrl = WebUtils.trimSlashes(pathURL);
const sanitizedBaseUrl = WebUtils.trimSlashes(baseURL);
const termName = `${isFall ? 'Fall' : 'Spring'} ${semester}`;

const sanitizedAssetServerBaseURL = WebUtils.trimSlashes(assetServerBaseURL);

export const COURSE_CONFIG = {
    courseSettings: {
        numLecturesPosted,
        numPreceptsPosted,
        semester,
        termName,
        firstDayOfSemester,
        firstLecture,
        secondLecture,
        piazzaURL,
    },
    title: `COS 426: Computer Graphics (${semester}) | Princeton University`,
    siteUrl: `${sanitizedBaseUrl}/${sanitizedPathUrl}`,
    pathPrefix: `/${sanitizedPathUrl}`,
    description: `The Princeton University course website for the ${termName} term of COS 426: Computer Graphics`,
    author: 'Reilly Bova',
    keywords: ['COS 426', 'Princeton', 'Graphics', 'Computer Science', 'CS', 'Education', termName],
    relatedLinks: {
        university: 'princeton.edu',
        copyright: 'princeton.edu/meet-princeton/copyright-infringement',
        privacy: 'princeton.edu/privacy-notice',
    },
    navigation: ['Overview', 'Syllabus', 'Assignments', 'Exercises', 'Gallery', 'Links'],
    homePage: 'Overview',
    assetServer: {
        baseURL: sanitizedAssetServerBaseURL,
        people: `${sanitizedAssetServerBaseURL}/${WebUtils.trimSlashes(peopleImagePath)}`,
    },
};

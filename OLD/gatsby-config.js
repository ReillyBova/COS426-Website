const plugins = require('./gatsby-plugins.js');

// Weekly Settings
const numLecturesPosted = 22; // Increment every time a lecture is posted
const numPreceptsPosted = 12; // Increment every time a precept is posted
// Annual Settings
const semester = 2022; // Increment every year
const firstDayOfSemester = '01-24'; // Adjust based off of academic calendar
const firstLecture = 'Tuesday'; // Change based off of Registrar scheduling
const secondLecture = 'Thursday'; // Change based off of Registrar scheduling
const piazzaURL = 'https://piazza.com/princeton/spring2022/cos426/home'; // Piazza Link
// NB: INCLUDE a leading slash; EXCLUDE a trailing slash
const pathURL = '/courses/archive/spring22/cos426'; // Subfolder location; necessary for internal links.
const baseURL = 'https://www.cs.princeton.edu'; // Root host domain for site

module.exports = {
    siteMetadata: {
        courseSettings: {
            numLecturesPosted,
            numPreceptsPosted,
            semester,
            firstDayOfSemester,
            firstLecture,
            secondLecture,
            piazzaURL,
        },
        title: `COS 426: Computer Graphics (${semester}) | Princeton University`,
        siteUrl: `${baseURL}${pathURL}`,
        description: `The Princeton University course website for the Spring ${semester} term of COS 426: Computer Graphics`,
        author: 'ReillyBova',
        keywords: [
            'COS 426',
            'Princeton',
            'Graphics',
            'Computer Science',
            `Spring ${semester}`,
        ],
        relatedLinks: {
            university: 'princeton.edu',
            copyright: 'princeton.edu/meet-princeton/copyright-infringement',
            privacy: 'princeton.edu/privacy-notice',
        },
        navigation: [
            'Overview',
            'Materials',
            'Assignments',
            'Exercises',
            'Gallery',
            'Links',
        ],
        homePage: 'Overview',
    },
    pathPrefix: pathURL,
    plugins: plugins,
};
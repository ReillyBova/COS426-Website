const plugins = require('./gatsby-plugins.js');

// Settings
const numLecturesPosted = 1; // Increment every time a lecture is posted
const numPreceptsPosted = 1; // Increment every time a precept is posted
const semester = 2020; // Increment every year
const firstDayOfSemester = '02-03'; // Adjust based off of academic calendar
const firstLecture = 'Tuesday'; // Change based off of Registrar scheduling
const secondLecture = 'Thursday'; // Change based off of Registrar scheduling

module.exports = {
    siteMetadata: {
        courseSettings: {
            numLecturesPosted,
            numPreceptsPosted,
            semester,
            firstDayOfSemester,
            firstLecture,
            secondLecture,
        },
        title: `COS 426: Computer Graphics (${semester}) | Princeton University`,
        siteUrl: `https://reillybova.github.io/COS426-Website/`,
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
    pathPrefix: '/COS426-Website',
    plugins: plugins,
};

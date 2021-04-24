// Library imports
import React from 'react';
import { graphql } from 'gatsby';
// Project imports
import { PageLayout, Content, MaterialsTable } from 'components';
import { materials } from 'content';
import { semesterOffsetToDateString } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

function Materials({ data }) {
    // Grab semester and first day of semester
    const { site, assignments } = data;
    const { firstLecture, secondLecture } = site.siteMetadata.courseSettings;

    // Extract assignment query into array
    const assignmentList = assignments.edges.map(({ node }) => ({
        ...node.frontmatter,
        ...node.fields,
    }));

    // Organize assignments and events by week
    const weekToAssignments = {};
    assignmentList.forEach((assignment) => {
        const weekIndex = assignment.dueWeek - 1;
        if (!weekToAssignments[weekIndex]) {
            weekToAssignments[weekIndex] = [];
        }

        weekToAssignments[weekIndex].push(assignment);
    });
    const weekToEvents = {};
    materials.other.forEach((otherEvent) => {
        const { week } = otherEvent.due;
        const weekIndex = week - 1;
        if (!weekToEvents[weekIndex]) {
            weekToEvents[weekIndex] = [];
        }

        weekToEvents[weekIndex].push(otherEvent);
    });

    // Build semester schedule week by week
    const masterSchedule = [];
    for (let week = 0; week < 14; week++) {
        // Initialize empty schedule for the week
        const weekSchedule = {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
        };

        // Lectures take first priority in ordering
        if (week < 12) {
            // Extract data
            const firstLectureData = materials.lectures[2 * week];
            const firstReadingsData = materials.readings[2 * week];
            const secondLectureData = materials.lectures[2 * week + 1];
            const secondReadingsData = materials.readings[2 * week + 1];

            // Add data to schedule
            if (firstLectureData) {
                weekSchedule[week < 6 ? firstLecture : secondLecture].push({
                    lecture: firstLectureData,
                    readings: firstReadingsData,
                    date: semesterOffsetToDateString(week, week < 6 ? firstLecture : secondLecture),
                });
            }
            if (secondLectureData) {
                weekSchedule[week < 6 ? secondLecture : firstLecture].push({
                    lecture: secondLectureData,
                    readings: secondReadingsData,
                    date: semesterOffsetToDateString(week < 6 ? week : week + 1, week < 6 ? secondLecture : firstLecture),
                });
            }
        }

        // Assignments have second priority
        if (weekToAssignments[week]) {
            weekToAssignments[week].forEach((assignment) => {
                const day = assignment.dueDay;
                let date = semesterOffsetToDateString(week, day);
                if (week > 5 && (day === "Monday" || day === "Tuesday")) {
                    date = semesterOffsetToDateString(week + 1, day);
                }
                weekSchedule[day].push({ assignment: assignment, date });
            });
        }

        // Precepts have third priority
        if (week < 12) {
            const preceptData = materials.precepts[week];
            if (preceptData) {
                // Precept appears after last lecture for week
                weekSchedule[week < 6 ? secondLecture : firstLecture].push({
                    precept: preceptData,
                    date: `Precept`,
                });
            }
        }

        // Events have last priority
        if (weekToEvents[week]) {
            weekToEvents[week].forEach((otherEvent) => {
                const day = otherEvent.due.day;
                let date = semesterOffsetToDateString(week, day);
                if (week > 5 && (day === "Monday" || day === "Tuesday")) {
                    date = semesterOffsetToDateString(week + 1, day);
                }
                weekSchedule[day].push({ otherEvent: otherEvent, date });
            });
        }

        masterSchedule.push(weekSchedule);
    }

    // Condense schedule into array of arrays of objects
    const simplifiedSchedule = masterSchedule.map((week, i) => {
        let simplifiedWeek = [
            ...week.Monday,
            ...week.Tuesday,
            ...week.Wednesday,
            ...week.Thursday,
            ...week.Friday,
            ...week.Saturday,
            ...week.Sunday,
        ];

        if (i > 5) {
            simplifiedWeek = [
                ...week.Wednesday,
                ...week.Thursday,
                ...week.Friday,
                ...week.Saturday,
                ...week.Sunday,
                ...week.Monday,
                ...week.Tuesday,
            ];
        }

        return simplifiedWeek;
    });

    // Render
    return (
        <PageLayout title={'Materials'}>
            <Content>
                <Typography variant='h3' gutterBottom>
                    {'Materials'}
                </Typography>
                <MaterialsTable schedule={simplifiedSchedule} />
            </Content>
        </PageLayout>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                courseSettings {
                    firstLecture
                    secondLecture
                }
            }
        }
        assignments: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/\\/src\\/content\\/Assignments\\/.*\\.md$/"}
            }
        ) {
            edges {
                node {
                    frontmatter {
                        calendarName
                        dueWeek
                        dueDay
                        dueTime
                        available
                        visible
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default Materials;

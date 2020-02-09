// Library imports
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { PageLayout, Content, MaterialsTable } from 'components';
import { materials } from 'content';
// UI imports
import Typography from '@material-ui/core/Typography';

function Materials() {
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
        firstLecture,
        secondLecture,
    } = site.siteMetadata.courseSettings;
    const firstDay = new Date(`${semester}-${firstDayOfSemester}Z`);

    // Function to compute date from week and day
    const computeAndFormatDate = (weekNumber, dayOfWeek) => {
        // String mapping
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

    // Organize assignments and events by week
    const weekToAssignments = {};
    materials.assignments.forEach((assignment) => {
        const { week } = assignment.due;
        const weekIndex = week - 1;
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
    for (let week = 0; week < 13; week++) {
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
                weekSchedule[firstLecture].push({
                    lecture: firstLectureData,
                    readings: firstReadingsData,
                    date: computeAndFormatDate(week, firstLecture),
                });
            }
            if (secondLectureData) {
                weekSchedule[secondLecture].push({
                    lecture: secondLectureData,
                    readings: secondReadingsData,
                    date: computeAndFormatDate(week, secondLecture),
                });
            }
        }

        // Assignments have second priority
        if (weekToAssignments[week]) {
            weekToAssignments[week].forEach((assignment) => {
                const day = assignment.due.day;
                const date = computeAndFormatDate(week, day);
                weekSchedule[day].push({ assignment: assignment, date });
            });
        }

        // Precepts have third priority
        if (week < 12) {
            const preceptData = materials.precepts[week];
            if (preceptData) {
                // Precept appears after last lecture for week
                weekSchedule[secondLecture].push({
                    precept: preceptData,
                    date: `Precept`,
                });
            }
        }
        masterSchedule.push(weekSchedule);

        // Events have last priority
        if (weekToEvents[week]) {
            weekToEvents[week].forEach((otherEvent) => {
                const day = otherEvent.due.day;
                const date = computeAndFormatDate(week, day);
                weekSchedule[day].push({ otherEvent: otherEvent, date });
            });
        }
    }

    // Condense schedule into array of arrays of objects
    const simplifiedSchedule = masterSchedule.map((week) => {
        const simplifiedWeek = [
            ...week.Monday,
            ...week.Tuesday,
            ...week.Wednesday,
            ...week.Thursday,
            ...week.Friday,
            ...week.Saturday,
            ...week.Sunday,
        ];

        return simplifiedWeek;
    });

    // Render
    return (
        <PageLayout title={'Materials'}>
            <Content>
                <Typography component={'section'} paragraph={true}>
                    <Typography variant='h4' gutterBottom>
                        {'Materials'}
                    </Typography>
                    <MaterialsTable schedule={simplifiedSchedule} />
                </Typography>
            </Content>
        </PageLayout>
    );
}

export default Materials;

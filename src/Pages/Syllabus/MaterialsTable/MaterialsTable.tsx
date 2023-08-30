// import { Fragment } from 'react';

// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// import { StylesGroup } from '../../../typings';

// const styles: StylesGroup = {
//     table: {
//         minWidth: '700px',
//     },
//     orange: {
//         '& th, td': {
//             backgroundColor: 'primary.main',
//             color: 'white',
//         },
//     },
//     week: { align: 'center' },
//     black: {
//         '& th, td': {
//             backgroundColor: 'secondary.main',
//             color: 'white',
//         },
//     },
//     lastRow: {
//         '& td': {
//             borderBottomWidth: 0,
//         },
//     },
//     nowrap: {
//         whiteSpace: 'nowrap',
//     },
//     primaryLink: {
//         color: 'white',
//         fontWeight: 700,
//     },
// };

// export const MaterialsTable = () => {

//      // Grab semester and first day of semester
//      const { site, assignments } = data;
//      const { firstLecture, secondLecture } = site.siteMetadata.courseSettings;

//      // Extract assignment query into array
//      const assignmentList = assignments.edges.map(({ node }) => ({
//          ...node.frontmatter,
//          ...node.fields,
//      }));

//      // Organize assignments and events by week
//      const weekToAssignments = {};
//      assignmentList.forEach((assignment) => {
//          const weekIndex = assignment.dueWeek - 1;
//          if (!weekToAssignments[weekIndex]) {
//              weekToAssignments[weekIndex] = [];
//          }

//          weekToAssignments[weekIndex].push(assignment);
//      });
//      const weekToEvents = {};
//      materials.other.forEach((otherEvent) => {
//          const { week } = otherEvent.due;
//          const weekIndex = week - 1;
//          if (!weekToEvents[weekIndex]) {
//              weekToEvents[weekIndex] = [];
//          }

//          weekToEvents[weekIndex].push(otherEvent);
//      });

//      // Build semester schedule week by week
//      const masterSchedule = [];
//      for (let week = 0; week < 14; week++) {
//          // Initialize empty schedule for the week
//          const weekSchedule = {
//              Monday: [],
//              Tuesday: [],
//              Wednesday: [],
//              Thursday: [],
//              Friday: [],
//              Saturday: [],
//              Sunday: [],
//          };

//          // Lectures take first priority in ordering
//          if (week < 12) {
//              // Extract data
//              const firstLectureData = materials.lectures[2 * week];
//              const firstReadingsData = materials.readings[2 * week];
//              const secondLectureData = materials.lectures[2 * week + 1];
//              const secondReadingsData = materials.readings[2 * week + 1];

//              // Add data to schedule
//              if (firstLectureData) {
//                  weekSchedule[firstLecture].push({
//                      lecture: firstLectureData,
//                      readings: firstReadingsData,
//                      date: semesterOffsetToDateString(week, firstLecture),
//                  });
//              }
//              if (secondLectureData) {
//                  weekSchedule[secondLecture].push({
//                      lecture: secondLectureData,
//                      readings: secondReadingsData,
//                      date: semesterOffsetToDateString(week, secondLecture),
//                  });
//              }
//          }

//          // Assignments have second priority
//          if (weekToAssignments[week]) {
//              weekToAssignments[week].forEach((assignment) => {
//                  const day = assignment.dueDay;
//                  const date = semesterOffsetToDateString(week, day);
//                  weekSchedule[day].push({ assignment: assignment, date });
//              });
//          }

//          // Precepts have third priority
//          if (week < 12) {
//              const preceptData = materials.precepts[week];
//              if (preceptData) {
//                  // Precept appears after last lecture for week
//                  weekSchedule[secondLecture].push({
//                      precept: preceptData,
//                      date: `Precept`,
//                  });
//              }
//          }

//          // Events have last priority
//          if (weekToEvents[week]) {
//              weekToEvents[week].forEach((otherEvent) => {
//                  const day = otherEvent.due.day;
//                  const date = semesterOffsetToDateString(week, day);
//                  weekSchedule[day].push({ otherEvent: otherEvent, date });
//              });
//          }

//          masterSchedule.push(weekSchedule);
//      }

//      // Condense schedule into array of arrays of objects
//      const simplifiedSchedule = masterSchedule.map((week, i) => {
//          const simplifiedWeek = [
//              ...week.Monday,
//              ...week.Tuesday,
//              ...week.Wednesday,
//              ...week.Thursday,
//              ...week.Friday,
//              ...week.Saturday,
//              ...week.Sunday,
//          ];

//          return simplifiedWeek;
//      });

//     let lectureCount = 0;
//     let preceptCount = 0;

//     return (
//         <TableContainer component={Paper}>
//             <Table size='small' sx={styles.table}>
//                 <TableHead>
//                     <TableRow sx={styles.black}>
//                         <TableCell sx={styles.week}>{'Week'}</TableCell>
//                         <TableCell>{'Date'}</TableCell>
//                         <TableCell>{'Topics'}</TableCell>
//                         <TableCell>{'Readings'}</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {schedule.map((week, i) => (
//                         <Fragment key={i}>
//                             <SpecialWeek i={i} className={black} />
//                             <WeekLabel
//                                 weekIndex={i}
//                                 rowSpan={week.length + 1}
//                                 className={clsx(black, i === 12 && lastRow)}
//                             />
//                             {week.map((item, j) => {
//                                 const isLastRow = i === 12 && j === week.length - 1;
//                                 if (item.lecture) {
//                                     // Generate lecture
//                                     const lectureNumber = lectureCount;
//                                     lectureCount += 1;
//                                     return (
//                                         <Lecture
//                                             key={j}
//                                             className={clsx(isLastRow && lastRow)}
//                                             lectureNumber={lectureNumber}
//                                             nowrap={nowrap}
//                                             {...item}
//                                         />
//                                     );
//                                 } else if (item.precept) {
//                                     // Generate precept
//                                     const preceptNumber = preceptCount;
//                                     preceptCount += 1;
//                                     return (
//                                         <Precept
//                                             key={j}
//                                             className={clsx(isLastRow && lastRow)}
//                                             preceptNumber={preceptNumber}
//                                             nowrap={nowrap}
//                                             {...item}
//                                         />
//                                     );
//                                 } else if (item.assignment) {
//                                     // Generate assignment
//                                     return (
//                                         <Assignment
//                                             key={j}
//                                             className={clsx(orange, isLastRow && lastRow)}
//                                             nowrap={nowrap}
//                                             primaryLink={primaryLink}
//                                             {...item}
//                                         />
//                                     );
//                                 } else if (item.otherEvent) {
//                                     // Generate other event
//                                     return (
//                                         <OtherEvent
//                                             key={j}
//                                             className={clsx(isLastRow && lastRow)}
//                                             nowrap={nowrap}
//                                             {...item}
//                                         />
//                                     );
//                                 }
//                             })}
//                         </Fragment>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

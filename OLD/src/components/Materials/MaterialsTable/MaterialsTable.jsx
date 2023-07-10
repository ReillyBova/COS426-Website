// Library imports
import React, { Fragment } from 'react';
import clsx from 'clsx';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Local imports
import {
    Lecture,
    Precept,
    Assignment,
    OtherEvent,
    SpecialWeek,
    WeekLabel,
} from './subcomponents';

// Custom styling for component
const materialTableStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    orange: {
        '& th, td': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
        },
    },
    black: {
        '& th, td': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff',
        },
    },
    lastRow: {
        '& td': {
            borderBottomWidth: 0,
        },
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    primaryLink: {
        color: 'white',
        fontWeight: 700,
    },
}));
function MaterialsTable({ schedule }) {
    const {
        table,
        orange,
        black,
        lastRow,
        nowrap,
        primaryLink,
    } = materialTableStyles();
    let lectureCount = 0;
    let preceptCount = 0;

    return (
        <TableContainer component={Paper}>
            <Table size='small' className={table}>
                <TableHead>
                    <TableRow className={black}>
                        <TableCell align={'center'}>{'Week'}</TableCell>
                        <TableCell>{'Date'}</TableCell>
                        <TableCell>{'Topics'}</TableCell>
                        <TableCell>{'Readings'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule.map((week, i) => (
                        <Fragment key={i}>
                            <SpecialWeek i={i} className={black} />
                            <WeekLabel
                                weekIndex={i}
                                rowSpan={week.length + 1}
                                className={clsx(black, i === 12 && lastRow)}
                            />
                            {week.map((item, j) => {
                                const isLastRow =
                                    i === 12 && j === week.length - 1;
                                if (item.lecture) {
                                    // Generate lecture
                                    const lectureNumber = lectureCount;
                                    lectureCount += 1;
                                    return (
                                        <Lecture
                                            key={j}
                                            className={clsx(
                                                isLastRow && lastRow
                                            )}
                                            lectureNumber={lectureNumber}
                                            nowrap={nowrap}
                                            {...item}
                                        />
                                    );
                                } else if (item.precept) {
                                    // Generate precept
                                    const preceptNumber = preceptCount;
                                    preceptCount += 1;
                                    return (
                                        <Precept
                                            key={j}
                                            className={clsx(
                                                isLastRow && lastRow
                                            )}
                                            preceptNumber={preceptNumber}
                                            nowrap={nowrap}
                                            {...item}
                                        />
                                    );
                                } else if (item.assignment) {
                                    // Generate assignment
                                    return (
                                        <Assignment
                                            key={j}
                                            className={clsx(
                                                orange,
                                                isLastRow && lastRow
                                            )}
                                            nowrap={nowrap}
                                            primaryLink={primaryLink}
                                            {...item}
                                        />
                                    );
                                } else if (item.otherEvent) {
                                    // Generate other event
                                    return (
                                        <OtherEvent
                                            key={j}
                                            className={clsx(
                                                isLastRow && lastRow
                                            )}
                                            nowrap={nowrap}
                                            {...item}
                                        />
                                    );
                                }
                            })}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MaterialsTable;

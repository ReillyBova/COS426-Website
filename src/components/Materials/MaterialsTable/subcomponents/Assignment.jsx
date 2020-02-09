// Library imports
import React from 'react';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function Assignment({ date, assignment, className, nowrap }) {
    return (
        <TableRow className={className}>
            <TableCell className={nowrap}>{date}</TableCell>
            <TableCell colSpan={2}>
                {`${assignment.title} due at ${assignment.due.time}`}
            </TableCell>
        </TableRow>
    );
}

export default Assignment;

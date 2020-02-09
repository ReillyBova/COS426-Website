// Library imports
import React from 'react';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function OtherEvent({ date, otherEvent, className, nowrap }) {
    return (
        <TableRow className={className}>
            <TableCell className={nowrap}>{date}</TableCell>
            <TableCell colSpan={2}>{otherEvent.title}</TableCell>
        </TableRow>
    );
}

export default OtherEvent;

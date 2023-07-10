// Library imports
import React from 'react';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function WeekLabel({ weekIndex, rowSpan, className }) {
    return (
        <TableRow className={className}>
            <TableCell rowSpan={rowSpan} align='center'>
                {weekIndex < 12 ? weekIndex + 1 : ''}
            </TableCell>
        </TableRow>
    );
}

export default WeekLabel;

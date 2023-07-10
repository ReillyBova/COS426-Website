// Library imports
import React from 'react';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function SpecialWeek({ i, className }) {
    const specialWeeks = { 6: 'Spring Recess', 12: 'Reading Period' };

    if (specialWeeks[i]) {
        return (
            <TableRow className={className}>
                <TableCell align='center' colSpan={4}>
                    {specialWeeks[i]}
                </TableCell>
            </TableRow>
        );
    } else {
        return null;
    }
}

export default SpecialWeek;

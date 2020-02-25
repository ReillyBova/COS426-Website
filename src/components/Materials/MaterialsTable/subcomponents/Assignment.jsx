// Library imports
import React from 'react';
// Project imports
import { InternalLink } from 'components';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function Assignment({ date, assignment, className, nowrap, primaryLink }) {
    // Render as link if possible
    return (
        <TableRow className={className}>
            <TableCell className={nowrap}>{date}</TableCell>
            <TableCell colSpan={2}>
                {assignment.visible && assignment.available && assignment.slug ? (
                    <InternalLink
                        className={primaryLink}
                        to={`/${assignment.slug}`}
                    >
                        {assignment.calendarName}
                    </InternalLink>
                ) : (
                    assignment.calendarName
                )}
                {` due at ${assignment.dueTime}`}
            </TableCell>
        </TableRow>
    );
}

export default Assignment;

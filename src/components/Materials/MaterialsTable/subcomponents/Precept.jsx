// Library imports
import React from 'react';
import { withPrefix, useStaticQuery, graphql } from 'gatsby';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function Precept({ date, precept, preceptNumber, className, nowrap }) {
    // Grab semester and first day of semester
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            numPreceptsPosted
                        }
                    }
                }
            }
        `
    );
    const { numPreceptsPosted } = site.siteMetadata.courseSettings;
    const preceptString = `Precept ${preceptNumber}: ${precept}`;

    return (
        <TableRow className={className}>
            <TableCell className={nowrap}>{date}</TableCell>
            <TableCell colSpan={2}>
                {preceptNumber < numPreceptsPosted ? (
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={withPrefix(
                            `precepts/Precept-${preceptNumber}.pdf`
                        )}
                    >
                        {preceptString}
                    </a>
                ) : (
                    preceptString
                )}
            </TableCell>
        </TableRow>
    );
}

export default Precept;

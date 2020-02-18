// Library imports
import React, { Fragment } from 'react';
import { withPrefix, useStaticQuery, graphql } from 'gatsby';
// Project imports
import { ExternalLink } from 'components';
// UI imports
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function Lecture({
    date,
    lecture,
    readings,
    lectureNumber,
    className,
    nowrap,
}) {
    // Grab semester and first day of semester
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            numLecturesPosted
                        }
                    }
                }
            }
        `
    );
    const { numLecturesPosted } = site.siteMetadata.courseSettings;
    const lectureString = `Lecture ${lectureNumber}: ${lecture}`;

    return (
        <TableRow className={className}>
            <TableCell className={nowrap}>{date}</TableCell>
            <TableCell>
                {lectureNumber < numLecturesPosted ? (
                    <ExternalLink
                        to={withPrefix(`lectures/Lecture-${lectureNumber}.pdf`)}
                    >
                        {lectureString}
                    </ExternalLink>
                ) : (
                    lectureString
                )}
            </TableCell>
            <TableCell>
                {readings.map(({ text, link, selection }, i) => {
                    // Seperator between each reading
                    const seperator = i > 0 ? ', ' : '';
                    const pdfLink = withPrefix(`readings/${link}.pdf`);

                    // Compute text to return
                    if (text) {
                        return <Fragment key={i}>{seperator + text}</Fragment>;
                    } else if (selection) {
                        return (
                            <Fragment key={i}>
                                {seperator}
                                {selection}{' '}
                                <ExternalLink to={pdfLink}>{link}</ExternalLink>
                            </Fragment>
                        );
                    } else {
                        return (
                            <Fragment key={i}>
                                {seperator}
                                <ExternalLink to={pdfLink}>{link}</ExternalLink>
                            </Fragment>
                        );
                    }
                })}
            </TableCell>
        </TableRow>
    );
}

export default Lecture;

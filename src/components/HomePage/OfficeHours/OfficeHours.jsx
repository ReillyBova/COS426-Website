// Library imports
import React from 'react';
// Project imports
import { office_hours } from 'content';
import { urlify } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';

function OfficeHours() {
    const title = 'Office Hours';
    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' id={urlify(title)} gutterBottom>
                {title}
            </Typography>
            <Typography component='div' paragraph={true}>
                <Typography variant='h6'>{'Expectations'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {office_hours.expectations[0]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {office_hours.expectations[1]}
                    <ul>
                        { office_hours.help.map((item, i) => (
                            <li key={i}>
                                {item.scenario}
                                {item.example && (
                                    <ul>
                                      <li>
                                          {`e.g. "${item.example}"`}
                                      </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Nota Bene'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {office_hours.notes[0]}
                    <b>{office_hours.notes[1]}</b>
                    {office_hours.notes[2]}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default OfficeHours;

// Library imports
import React from 'react';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const awardsStyles = makeStyles(() => ({
    gridStyle: {
        marginTop: 0,
        marginBottom: 0,
        overflow: 'auto',
    },
}));

const processAwards = (awardsString, isInstructor, isAward) => {
    const awardArray = awardsString.split(',');

    return awardArray.map((awardString, i) => {
        let label, key;

        if (isInstructor) {
            const firstSpaceIndex = awardString.indexOf(' ');
            const emojiIcon = awardString.substr(0, firstSpaceIndex);
            const titleString = awardString.substr(firstSpaceIndex + 1);
            label = (
                <span>
                    {emojiIcon} <span> </span>
                    <span> </span> {titleString}
                </span>
            );
            key = `${titleString}-${i}`;
        } else {
            label = `${awardString} (Students' Choice)`;
            key = `${awardString}-${i}`;
        }

        return (
            <Grid item key={key}>
                <Chip
                    size='small'
                    variant={isInstructor ? 'outlined' : 'default'}
                    color={isAward ? 'primary' : ''}
                    label={label}
                />
            </Grid>
        );
    });
};

// Generate awards from frontmatter strings
function Awards({ frontmatter }) {
    // Custom class
    const { gridStyle } = awardsStyles();

    const {
        instructorAwards,
        instructorMentions,
        studentAwards,
        studentMentions,
    } = frontmatter;

    return (
        <Grid container className={gridStyle} justify='flex-start' spacing={1}>
            {processAwards(instructorAwards, true, true)}
            {processAwards(instructorMentions, true, false)}
            {processAwards(studentAwards, false, true)}
            {processAwards(studentMentions, false, false)}
        </Grid>
    );
}

export default Awards;

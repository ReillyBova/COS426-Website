import { Grid } from '@mui/material';

import { MarkdownUtils } from '../../../Utils/MarkdownUtils';
import { IPerson, ProfileCard } from './ProfileCard';

const peopleFIles = import.meta.glob('/src/Content/People/*.md');

export const StaffGrid = () => {
    const markdownFiles = MarkdownUtils.useMarkdownFileLoader(peopleFIles);

    const peopleData = markdownFiles ? markdownFiles.map(({ attributes }) => attributes as IPerson) : [];

    const professors = peopleData.filter((person) => person.role === 'Professor');
    const gradTAs = peopleData.filter((person) => person.role === 'Graduate TA');
    const undergradTAs = peopleData.filter((person) => person.role === 'Undergraduate TA');

    return (
        <Grid container spacing={3} justifyContent='space-around'>
            {professors.map((person, i) => (
                <Grid key={`professors-${person.name}-${i}`} item md={4} lg={3}>
                    <ProfileCard person={person} />
                </Grid>
            ))}
            {gradTAs.map((person, i) => (
                <Grid key={`gradTAs-${person.name}-${i}`} item md={4} lg={3}>
                    <ProfileCard person={person} />
                </Grid>
            ))}
            {undergradTAs.map((person, i) => (
                <Grid key={`undergrad-${person.name}-${i}`} item md={4} lg={3}>
                    <ProfileCard person={person} />
                </Grid>
            ))}
        </Grid>
    );
};

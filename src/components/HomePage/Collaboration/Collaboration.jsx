// Library imports
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Project imports
import { AnchorLink } from 'components';
import { collaboration } from 'content';
import { urlify } from 'utils';
// UI imports
import Typography from '@material-ui/core/Typography';
// Local imports
import { CollaborationTable } from './subcomponents';

function Collaboration() {
    // Grab semester
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        courseSettings {
                            semester
                        }
                    }
                }
            }
        `
    );
    const semester = site.siteMetadata.courseSettings.semester;

    const title = 'Collaboration Policy';

    return (
        <Typography component={'section'} paragraph={true}>
            <Typography variant='h4' gutterBottom>
                <AnchorLink id={urlify(title)}>{title}</AnchorLink>
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {collaboration.collaboration[0]}
                <i>{collaboration.collaboration[1]}</i>
                {collaboration.collaboration[2]}
                <b>{collaboration.collaboration[3]}</b>
            </Typography>
            <Typography variant='body1' paragraph={true}>
                {collaboration.collaboration[4]}
            </Typography>
            <CollaborationTable table={collaboration.table} />
            <Typography component={'div'} paragraph={true}>
                <Typography variant='h6'>{'Individual Solutions'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.individual[0]}
                </Typography>
                <ul>
                    <li>
                        <Typography variant='body1' paragraph={true}>
                            {collaboration.individual[1]}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1' paragraph={true}>
                            {collaboration.individual[2]}
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1' paragraph={true}>
                            <b>{collaboration.individual[3]}</b>
                        </Typography>
                    </li>
                </ul>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.individual[4]}
                </Typography>
                <Typography variant='h6'>
                    {'Collaboration with Course Staff'}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.staff[0]}
                </Typography>
                <Typography variant='h6'>
                    {'Collaboration with Partners'}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.partners[0]}
                    <i>{collaboration.partners[1]}</i>
                    {collaboration.partners[2]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.partners[3]}
                </Typography>
                <Typography variant='h6'>
                    {'Collaboration with Classmates'}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.course[0]}
                </Typography>
                <Typography variant='h6'>
                    {'Concerning Electronic Communication'}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.electronic[0]}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://piazza.com/princeton/spring${semester}/cos426/home?`}
                    >
                        {collaboration.electronic[1]}
                    </a>
                    {collaboration.electronic[2]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.electronic[3]}
                </Typography>
                <Typography variant='body1' paragraph={true}>
                    <i>{collaboration.electronic[4]}</i>
                </Typography>
                <Typography variant='h6'>{'Final Note'}</Typography>
                <Typography variant='body1' paragraph={true}>
                    {collaboration.note[0]}
                    <i>{collaboration.note[1]}</i>
                    {collaboration.note[2]}
                </Typography>
            </Typography>
        </Typography>
    );
}

export default Collaboration;

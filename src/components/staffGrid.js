import React from 'react';

import Grid from '@material-ui/core/Grid';

import { ProfileCard } from 'components';
import {
    AdamF,
    AustinL,
    CarloR,
    JaiqiS,
    JadB,
    ReillyB,
    DanielC,
    AndrewW,
} from 'images';

function StaffGrid(props) {
    return (
        <Grid container spacing={24} justify="space-around" {...props}>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Adam Finklestein"
                    role="Professor"
                    image={AdamF}
                    link="https://www.cs.princeton.edu/~af/"
                    email="af@princeton.edu"
                    website="https://www.cs.princeton.edu/~af/"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Austin Le"
                    role="Graduate TA"
                    image={AustinL}
                    link="http://austinhle.com/"
                    github="https://github.com/austinhle"
                    email="austinle@princeton.edu"
                    website="http://austinhle.com/"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Carlo Rosati"
                    role="Graduate TA"
                    image={CarloR}
                    link="https://www.cs.princeton.edu/~crosati/"
                    email="crosati@princeton.edu"
                    website="https://www.cs.princeton.edu/~crosati/"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Jiaqi Su"
                    role="Graduate TA"
                    image={JaiqiS}
                    link="http://www.cs.princeton.edu/~jiaqis/personal-website/index.php"
                    email="jiaqis@princeton.edu"
                    website="http://www.cs.princeton.edu/~jiaqis/personal-website/index.php"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Jad Bechara"
                    role="Undergraduate TA"
                    image={JadB}
                    link="https://jbechara.github.io/"
                    email="jbechara@princeton.edu"
                    github="https://github.com/jbechara"
                    website="https://jbechara.github.io/"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Reilly Bova"
                    role="Undergraduate TA"
                    image={ReillyB}
                    link="https://www.princeton.edu/search?search=Reilly+Bova#people"
                    email="rbova@princeton.edu"
                    github="https://github.com/ReillyBova/"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Daniel Chae"
                    role="Undergraduate TA"
                    image={DanielC}
                    link="https://www.princeton.edu/search?search=Daniel+Chae#people"
                    email="dkchae@princeton.edu"
                />
            </Grid>
            <Grid item sm={4} md={3}>
                <ProfileCard
                    name="Andrew Wannacott"
                    role="Undergraduate TA"
                    image={AndrewW}
                    link="https://keybase.io/awonnacott"
                    email="awonnacott@princeton.edu"
                    github="https://github.com/awonnacott/"
                    website="https://keybase.io/awonnacott"
                />
            </Grid>
        </Grid>
    );
}

export default StaffGrid;

import React from 'react';
import withRoot from '../withRoot';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Layout, ProfileCard } from 'components';
import {
    Textbook,
    AdamF,
    AustinL,
    CarloR,
    JaiqiS,
    JadB,
    ReillyB,
    DanielC,
    AndrewW,
} from 'images';

const styles = (theme) => ({
    textbook: {
        margin: 24,
        maxWidth: 200,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 150,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            float: 'right',
        },
    },
    profile: {
        maxWidth: 250,
        margin: 'auto',
    },
    button: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
    profile_pic: {
        width: '100%',
        '&:hover': {
            opacity: 0.8,
        },
    },
    profile_text: {
        paddingBottom: 0,
    },
});

function IndexPage(props) {
    const { classes } = props;
    return (
        <Layout>
            <Typography component="div" paragraph={true}>
                <Typography variant="h4" gutterBottom>
                    {'Syllabus'}
                </Typography>
                <Typography component="div" paragraph={true}>
                    <Typography variant="h6">{'Description'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {`Computer graphics is the intersection of computer
                        science, geometry, physics, and art. This course will
                        study topics in this broad and remarkable field, with an
                        emphasis on practical methods and applications. In
                        particular, the course will provide an extensive
                        introduction to image processing, modeling, rendering,
                        and computer animation. The goal of this course is to
                        equip students with the various tools and techniques
                        they need to build large projects with significant
                        graphical components; this includes applications for
                        realizing artistic visions (art and architecture), user
                        interaction (UI/UX development), entertainment products
                        (video games, CGI, animations, and augmented reality),
                        visualizations and academic research (physics, biology,
                        chemistry, engineering, and other disciplines), etc.`}
                    </Typography>
                    <Typography variant="body1" paragraph={true}>
                        {`Topics include: color theory, sampling, image
                        processing, image compositing, mesh representations,
                        mesh processing, parametric curves and surfaces,
                        implicit surfaces, subdivision surfaces, geometric data
                        structures, geometric transformations, ray casting,
                        lighting and reflectance, global illumination,
                        rasterization, scan conversion, particle systems,
                        animation, computer games, fabrication, etc.`}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Prerequisites'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {`The course is appropriate for students who have taken
                        COS 217 and COS 226 (or equivalent). Javascript will be
                        the main programming language, however no prior
                        knowledge of the language is required for students who
                        wish to enroll in this course.`}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Lectures'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {`Lectures are held on Tuesdays and Thursdays from
                        3:00–4:20PM in Friend Center 006.`}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Precepts'}</Typography>
                    <Typography variant="body1" paragraph={true}>
                        {`Precept is held on Wednesday or Thursday from
                        7:30–8:20PM in Friend Center 004. Students may attend
                        either (or both) during any week, regardless of their
                        registration. In general, precept attendance is highly
                        encouraged.`}
                    </Typography>
                </Typography>
                <Typography component={'div'} paragraph={true}>
                    <Typography variant="h6">{'Required Reading'}</Typography>
                    <Card className={classes.textbook}>
                        <CardMedia
                            component="img"
                            alt="Computer Graphics with OpenGL"
                            image={Textbook}
                            title="Computer Graphics with OpenGL"
                        />
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="http://www.labyrinthbooks.com/all_detail.aspx?isbn=9780136053583"
                            >
                                {`Labyrinth`}
                            </Button>
                        </CardActions>
                    </Card>
                    <Typography
                        component={'div'}
                        variant="body1"
                        paragraph={true}
                    >
                        {`There is one "required" textbook for this course:`}
                        <ul>
                            <i>{`Computer Graphics with OpenGL`}</i>, 4th Ed.,
                            {`Hearn, Baker, and Carithers. Prentice Hall, 2010.
                            ISBN: 978-0136053583.`}
                        </ul>
                        {`In the past, most students have found it is possible to
                        pass the course without opening the textbook once, as
                        almost all graded material is provided through lecture
                        and precepts; nevertheless, this textbook will prove
                        extremely useful for especially eager and motivated
                        students who wish to pursue further studies in computer
                        graphics. In addition to covering graphics concepts that
                        could not otherwise squeeze into this course, the
                        textbook contains wonderful C++ and OpenGL
                        implementations that all graphics programmers would be
                        well-suited to know.`}
                    </Typography>
                </Typography>
            </Typography>
            <Typography component={'div'} paragraph={true}>
                <Typography variant="h4" gutterBottom>
                    {'Staff'}
                </Typography>
                <Typography variant="body1" paragraph={true}>
                    {`Below you will find links to staff contact information,
                    but please keep in mind that it is almost always more
                    appropriate to post your question on Piazza rather than
                    emailing an individual staff member.`}
                </Typography>
                <Grid container spacing={24} justify="space-around">
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
            </Typography>
        </Layout>
    );
}

export default withRoot(withStyles(styles)(IndexPage));

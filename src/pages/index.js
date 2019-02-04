import React from 'react';
import withRoot from '../withRoot';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { Layout } from 'components';
import { Textbook } from 'images';

const styles = (theme) => ({
    card: {
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
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            alt="Computer Graphics with OpenGL"
                            className={classes.media}
                            image={Textbook}
                            title="Computer Graphics with OpenGL"
                        />
                        <CardActions>
                            <Button size="small" color="primary">
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
                    {`Below you will find our contact information, but please keep
                    in mind that it is almost always more appropriate to post
                    your question on Piazza rather than emailing an individual
                    staff member.`}
                </Typography>
            </Typography>
        </Layout>
    );
}

export default withStyles(styles)(withRoot(IndexPage));

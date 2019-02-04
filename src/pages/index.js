import React from 'react';
import withRoot from '../withRoot';

import Typography from '@material-ui/core/Typography';

import { Layout } from 'components';

const IndexPage = () => (
    <Layout>
        <Typography variant="h4" gutterBottom>
            {"Syllabus"}
        </Typography>
        <Typography variant="h6" gutterBottom>
            {"Description"}
            <Typography variant="body1" paragraph={true}>
                {`Computer graphics is the intersection of computer science, geometry,
                physics, and art. This course will study topics in this broad and remarkable
                field, with an emphasis on practical methods and applications. In particular,
                the course will provide an extensive introduction to image processing, modeling,
                rendering, and computer animation. The goal of this course is to equip
                students with the various tools and techniques they need to build
                large projects with significant graphical components; this includes
                applications for realizing artistic visions (art and architecture),
                user interaction (UI/UX development), entertainment products (video games,
                CGI, animations, and augmented reality), visualizations and academic
                research (physics, biology, chemistry, engineering, and other
                disciplines), etc.`}
            </Typography>
            <Typography variant="body1" paragraph={true}>
                {`Topics include: color theory, sampling, image processing,
                image compositing, mesh representations, mesh processing, parametric
                curves and surfaces, implicit surfaces, subdivision surfaces,
                geometric data structures, geometric transformations, ray casting,
                lighting and reflectance, global illumination, rasterization,
                scan conversion, particle systems, animation, computer games,
                fabrication, etc.`}
            </Typography>
        </Typography>
        <Typography variant="h6" gutterBottom>
            {"Prerequisites"}
            <Typography variant="body1" paragraph={true}>
                {`The course is appropriate for students who have taken COS 217
                and COS 226 (or equivalent). Javascript will be the main
                programming language, however no prior knowledge of the language
                is required for students who wish to enroll in this course.`}
            </Typography>
        </Typography>
        <Typography variant="h6" gutterBottom>
            {"Lectures"}
            <Typography variant="body1" paragraph={true}>
                {`Lectures are held on Tuesdays and Thursdays from
                3:00–4:20PM in Friend Center 006.`}
            </Typography>
        </Typography>
        <Typography variant="h6" gutterBottom>
            {"Precepts"}
            <Typography variant="body1" paragraph={true}>
                {`Precept is held on Wednesday or Thursday from
                7:30–8:20PM in Friend Center 004. Students may attend either
                (or both) during any week, regardless of their registration. In
                general, precept attendance is highly encouraged.`}
            </Typography>
        </Typography>
        <Typography variant="h6" gutterBottom>
            {"Required Reading"}
            <Typography variant="body1" paragraph={true}>
                <i>
                    {`Computer Graphics with OpenGL`}
                </i>
                {`, 4th Ed., Hearn, Baker, and
                Carithers. Prentice Hall, 2010. ISBN: 978-0136053583.`}
            </Typography>
        </Typography>
    </Layout>
);

export default withRoot(IndexPage);

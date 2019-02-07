import React from 'react';
import withRoot from '../withRoot';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import { Layout, StaffGrid } from 'components';
import ThreeContainer from '../components/threeContainer';
import { Textbook, GradeChart } from 'images';

const styles = (theme) => ({
    textbook: {
        margin: '0 0 24px 24px',
        maxWidth: 200,
        [theme.breakpoints.down('xs')]: {
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            float: 'right',
        },
    },
    piechart: {
        margin: '0 0 24px 24px',
        maxWidth: 500,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 400,
            marginTop: 24,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
    },
    staff_desktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    staff_mobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toggle: {
        width: '100px',
    },
    collab_paper: {
        maxWidth: 900,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflowX: 'auto',
    },
    collab_table: {
        minWidth: 700,
        whiteSpace: 'nowrap',
    },
});

class IndexPage extends React.Component {
    state = {
        show_people: false,
    };

    handleChange = () => {
        this.setState((state) => ({ show_people: !state.show_people }));
    };

    render() {
        const { classes } = this.props;
        const { show_people } = this.state;

        return (
          <Layout>
            <ThreeContainer style={{height: 100}} />
          </Layout>
        );

        // return (
        //     <Layout>
        //         <ThreeContainer />
        //         <Typography component="div" paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Syllabus'}
        //             </Typography>
        //             <Typography component="div" paragraph={true}>
        //                 <Typography variant="h6">{'Description'}</Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Computer graphics is the intersection of computer
        //                     science, geometry, physics, and art. This course will
        //                     study topics in this broad and remarkable field, with an
        //                     emphasis on practical methods and applications. In
        //                     particular, the course will provide an extensive
        //                     introduction to image processing, modeling, rendering,
        //                     and computer animation. The goal of this course is to
        //                     equip students with the various tools and techniques
        //                     they need to build large projects with significant
        //                     graphical components; this includes applications for
        //                     realizing artistic visions (art and architecture), user
        //                     interaction (UI/UX development), entertainment products
        //                     (video games, CGI, animations, and augmented reality),
        //                     visualizations and academic research (physics, biology,
        //                     chemistry, engineering, and other disciplines), etc.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Topics include: color theory, sampling, image
        //                     processing, image compositing, mesh representations,
        //                     mesh processing, parametric curves and surfaces,
        //                     implicit surfaces, subdivision surfaces, geometric data
        //                     structures, geometric transformations, ray casting,
        //                     lighting and reflectance, global illumination,
        //                     rasterization, scan conversion, particle systems,
        //                     animation, computer games, fabrication, etc.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">{'Prerequisites'}</Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`The course is appropriate for students who have taken
        //                     COS 217 and COS 226 (or equivalent). Javascript will be
        //                     the main programming language, however no prior
        //                     knowledge of the language is required for students who
        //                     wish to enroll in this course.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">{'Lectures'}</Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Lectures are held on Tuesdays and Thursdays from
        //                     3:00–4:20PM in Friend Center 006.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">{'Precepts'}</Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Precept is held on Wednesday or Thursday from
        //                     7:30–8:20PM in Friend Center 004. Students may attend
        //                     either (or both) during any week, regardless of their
        //                     registration. In general, precept attendance is highly
        //                     encouraged.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">
        //                     {'Required Reading'}
        //                 </Typography>
        //                 <Card raised className={classes.textbook}>
        //                     <CardMedia
        //                         component="img"
        //                         alt="Computer Graphics with OpenGL"
        //                         image={Textbook}
        //                         title="Computer Graphics with OpenGL"
        //                     />
        //                     <CardActions>
        //                         <Button
        //                             size="small"
        //                             color="primary"
        //                             href="http://www.labyrinthbooks.com/all_detail.aspx?isbn=9780136053583"
        //                         >
        //                             {`Labyrinth`}
        //                         </Button>
        //                     </CardActions>
        //                 </Card>
        //                 <Typography
        //                     component={'div'}
        //                     variant="body1"
        //                     paragraph={true}
        //                 >
        //                     {`There is one "required" textbook for this course:`}
        //                     <ul>
        //                         <i>{`Computer Graphics with OpenGL`}</i>, 4th
        //                         Ed.,
        //                         {`Hearn, Baker, and Carithers. Prentice Hall, 2010.
        //                         ISBN: 978-0136053583.`}
        //                     </ul>
        //                     {`In the past, most students have found it is possible to
        //                     pass the course without opening the textbook once, as
        //                     almost all graded material is provided through lecture
        //                     and precepts; nevertheless, this textbook will prove
        //                     extremely useful for especially eager and motivated
        //                     students who wish to pursue further studies in computer
        //                     graphics. In addition to covering graphics concepts that
        //                     could not otherwise squeeze into this course, the
        //                     textbook contains wonderful C++ and OpenGL
        //                     implementations that all graphics programmers would be
        //                     well-suited to know.`}
        //                 </Typography>
        //             </Typography>
        //         </Typography>
        //         <Typography component={'div'} paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Staff'}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Staff contact information is listed below, but students
        //                 seeking help should keep in mind that it is almost always
        //                 more appropriate to post their question to Piazza rather
        //                 than emailing an individual member of the course staff.`}
        //             </Typography>
        //             <div className={classes.staff_desktop}>
        //                 <StaffGrid />
        //             </div>
        //             <div className={classes.staff_mobile}>
        //                 <Typography
        //                     component={'div'}
        //                     paragraph={true}
        //                     align="center"
        //                 >
        //                     <Button
        //                         variant="contained"
        //                         color="primary"
        //                         className={classes.toggle}
        //                         onClick={this.handleChange}
        //                     >
        //                         {show_people ? 'Hide' : 'Show'}
        //                     </Button>
        //                 </Typography>
        //                 <Slide
        //                     direction="up"
        //                     in={show_people}
        //                     mountOnEnter
        //                     unmountOnExit
        //                 >
        //                     <StaffGrid />
        //                 </Slide>
        //             </div>
        //         </Typography>
        //         <Typography component={'div'} paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Precepts'}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`The precepts for this class follow the "flipped
        //                 classroom" methodology and serve to assist students with
        //                 their assignments. During the first 10–15 minutes
        //                 of precept, instructors briefly review precept materials
        //                 with the enitre class; these precept materials generally
        //                 consist of "tips and tricks" slides for current assignment.
        //                 It is highly recommended that students read through an
        //                 assignment's precept slides (in their entirety) before
        //                 starting work on the assignment itself.`}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Following review, the precept then turns into a `}
        //                 <b>{`problem session`}</b>
        //                 {`, during which instructors are avaliable as LabTAs
        //                 to answer students' questions individually and to provide
        //                 personal assignment troubleshooting.`}
        //             </Typography>
        //         </Typography>
        //         <Typography component={'div'} paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Coursework'}
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">{'Course Grades'}</Typography>
        //                 <Card raised className={classes.piechart}>
        //                     <CardActions>
        //                         <img
        //                             style={{ padding: 8 }}
        //                             width="100%"
        //                             src={GradeChart}
        //                         />
        //                     </CardActions>
        //                 </Card>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Final grades are based on six biweekly programming
        //                     assignments (60%), one written exam (15%), a final
        //                     programming project (20%), and course participation (5%).
        //                     Throughout the semester, there will ample opportunities
        //                     for extra credit and student participation. In
        //                     particular, students are highly encouraged both to
        //                     enter each assignment art contest, as well as to
        //                     engage regularly with their peers on Piazza.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">{'Written Exam'}</Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Only one exam is administered during this course.
        //                     Currently, this exam is scheduled to be taken in-class
        //                     on Thursday, 14 March 2019 (Midterms Week). The exam
        //                     is closed-book however, students are permitted to
        //                     each bring `}
        //                     <b>{`there own`}</b>
        //                     {` 8.5x11" double-sided cheat-sheet.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`The written exam covers all course material up through
        //                     (and including) week 5. Students may be tested on any
        //                     and all graphics concepts touched on through lectures,
        //                     readings, and assignments during this period. Examples
        //                     of exams from previous offerings of this course will
        //                     be posted soon; however, note that past exams may
        //                     have covered different material.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Although the six weeks of course material that follow
        //                     the exam are not covered on any written test, it
        //                     is still "tested" through strict no-collaboration
        //                     questions that are introduced into assignment writeups
        //                     following Spring break. Effectively, these questions
        //                     will serve as a second "take-home" exam spread
        //                     throughout the later assignments. This is done in order
        //                     allieviate the dependency of students' final grades
        //                     on their sole written exam grade, while also testing
        //                     material without overburdening students with tedious
        //                     and stressful examinations. Note that the grades for
        //                     no-collaboration questions are incorporated into
        //                     assignment grades rather than into exam grades.`}
        //                 </Typography>
        //             </Typography>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">
        //                     {'Programming Assignments'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`There are six biweekly programming assignments.
        //                     Assignments are `}
        //                     <b>{`not`}</b>
        //                     {` weighted evenly. Assignments will be implemented
        //                     mostly in javascript. Any computer and browser may
        //                     be used for development, however students should ensure
        //                     that their programs work on Chrome with the latest
        //                     release of macOS, as this is the environment
        //                     in which submissions are tested and graded.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Assignments are submitted via the Princeton CS
        //                     Dropbox. Students should look for the submission
        //                     link in the description of each assignment, login
        //                     with their Princeton netID, and then submit all applicable
        //                     files by the posted deadline. Students may resubmit
        //                     and unsubmit files as needed up until the submission
        //                     deadline. Further alterations will result in the
        //                     assignment being marked as late.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`When submitting an assignment, all code, writeup,
        //                     input images, output images, overlay images, etc.,
        //                     should be packed into a single folder titled
        //                     "assignmentN" (where N is the assignment number — eg.
        //                     , assignment0) and compressed. In the interest of
        //                     preserving space, it is requested that all images
        //                     are submitted in .jpg format.`}
        //                 </Typography>
        //                 <Typography component={'div'} paragraph={true}>
        //                     <Typography variant="h6">
        //                         {'Final Project'}
        //                     </Typography>
        //                     <Typography variant="body1" paragraph={true}>
        //                         {`The final project is a chance for students to
        //                         build a system incorporating one or more idea
        //                         that has been learned in class. Projects should
        //                         be done in groups of two or three (other team
        //                         sizes are permitted with permission of an
        //                         instructor). The focus of the project can be
        //                         anything of the group's choosing, as long as it
        //                         somehow involves computer graphics. Many students
        //                         choose to create games, or art demos, but it
        //                         really can be anything.`}
        //                     </Typography>
        //                     <Typography variant="body1" paragraph={true}>
        //                         {`Students are welcome to recycle code infrastructure
        //                             provided for previous assignments, and they
        //                             are also permitted to borrow ideas or other
        //                             code infrastructure from the web or elsewhere.
        //                             However, teams should be very careful to
        //                             distinguish which parts they contributed to
        //                             directly, and which other parts are loaned from
        //                             elsewhere. Moreover, while it is ok to use
        //                             common libraries/infrastructure, they should
        //                             not dwarf students' own code in terms of their
        //                             role in the project. In particular, if a
        //                             hypothetical group were to make a game, they
        //                             should not build ontop of a highly polished
        //                             and complete game engine like Unity.`}
        //                     </Typography>
        //                 </Typography>
        //                 <Typography component={'div'} paragraph={true}>
        //                     <Typography variant="h6">
        //                         {'Late Policy'}
        //                     </Typography>
        //                     <Typography variant="body1" paragraph={true}>
        //                         {`Assignments are due at 11:55PM on their posted
        //                         due dates, where submission time is determined
        //                         by the file date of the file upload. Following a
        //                         very brief grace period (which students should
        //                         confirm with an instructor beforehand), one minute
        //                         late is the same as one day late. Note that if
        //                         any part of an assignment is submitted late, the
        //                         entire assignment will be marked late. To submit
        //                         an assignment late, remove all uploads from the
        //                         online submission system, since instructors will
        //                         grade partial submissions as-is (whereas no submissions
        //                         are marked late). Note that work cannot be accepted
        //                         after Dean's Date without a Dean's recommendation.`}
        //                     </Typography>
        //                     <Typography variant="body1" paragraph={true}>
        //                         {`Late assignments are marked down 1/4 of the
        //                         full grade `}
        //                         <i> {`per day or partial day`}</i>
        //                         {` late. The penalities for a student's first
        //                         three late days are automatically waived.
        //                         Additional late penalties will be waived only in
        //                         the case of unforeseeable circumstances like
        //                         medical emergencies, as documented by a student's
        //                         Dean or Director of Studies. Note that late days
        //                         cannot be used for the final project as it is due
        //                         on Dean's Date`}
        //                     </Typography>
        //                 </Typography>
        //                 <Typography component={'div'} paragraph={true}>
        //                     <Typography variant="h6">{'Regrades'}</Typography>
        //                     <Typography variant="body1" paragraph={true}>
        //                         {`Students who feel they have been incorrectly
        //                         graded may write a short private Piazza post
        //                         describing the potential grading mistake. All
        //                         regrade requests must be posted within two weeks
        //                         of when the potential grading error was made.`}
        //                     </Typography>
        //                 </Typography>
        //             </Typography>
        //         </Typography>
        //         <Typography component={'div'} paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Collaboration Policy'}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Programming is an individual creative process much like
        //                 composition. Students must reach their own understanding
        //                 of the problem and discover a path to its solution. During
        //                 this time, discussions among students in this course about
        //                 the assignments is not only permitted, but `}
        //                 <i> {'encouraged'}</i>
        //                 {`. Moreover, those who find they benefit from bouncing ideas
        //                 off of their peers are encouraged to work in `}
        //                 <b>{`pairs.`}</b>
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Note that this is somewhat more relaxed than the
        //                 collaboration policies of COS 126, COS 226, COS 217, etc.,
        //                 in the sense the conceptual components (ideation, brain-storming, specification understanding,
        //                 problem-solving) of all assignments are partnered, even
        //                 though programming components of assignments are still
        //                 individual. This relaxed policy does not mean pairs
        //                 are allowed share all their code with one another. Here
        //                 is an executive summary:`}
        //             </Typography>
        //             <Paper className={classes.collab_paper}>
        //                 <Table padding="dense" className={classes.collab_table}>
        //                     <TableHead>
        //                         <TableRow>
        //                             <TableCell />
        //                             <TableCell align="right">
        //                                 {`Your Partner`}
        //                             </TableCell>
        //                             <TableCell align="right">
        //                                 {`Course Staff`}
        //                             </TableCell>
        //                             <TableCell align="right">
        //                                 {`COS 426 Grads`}
        //                             </TableCell>
        //                             <TableCell align="right">
        //                                 {`Classmates`}
        //                             </TableCell>
        //                             <TableCell align="right">
        //                                 {`The Internet`}
        //                             </TableCell>
        //                         </TableRow>
        //                     </TableHead>
        //                     <TableBody>
        //                         <TableRow>
        //                             <TableCell component="th" scope="row">
        //                                 {`Discuss Concepts With:`}
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                         </TableRow>
        //                         <TableRow>
        //                             <TableCell component="th" scope="row">
        //                                 {`Acknowledge Collaboration With:`}
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                         </TableRow>
        //                         <TableRow>
        //                             <TableCell component="th" scope="row">
        //                                 {`Expose Code/Solutions To:`}
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                         </TableRow>
        //                         <TableRow>
        //                             <TableCell component="th" scope="row">
        //                                 {`View Code/Solutions Of:`}
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CheckIcon color="primary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                         </TableRow>
        //                         <TableRow>
        //                             <TableCell component="th" scope="row">
        //                                 {`Copy Code/Solutions From:`}
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                             <TableCell align="center">
        //                                 <CancelIcon color="secondary" />
        //                             </TableCell>
        //                         </TableRow>
        //                     </TableBody>
        //                 </Table>
        //             </Paper>
        //             <Typography component={'div'} paragraph={true}>
        //                 <Typography variant="h6">
        //                     {'Individual Solutions'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Students must individually compose all of their own
        //                     solutions. The term solutions refers to any of the
        //                     products created when completing a programming
        //                     assignment, such as source code (including comments),
        //                     an personal understanding of all submitted work, output
        //                     images, and the writeup file. It includes both finished
        //                     and unfinished products, regardless of correctness or
        //                     completeness.`}
        //                 </Typography>
        //                 <ul>
        //                     <li>
        //                         <Typography variant="body1" paragraph={true}>
        //                             {`Students must never share their code with
        //                             anyone (besides their current partner) who is
        //                             taking COS 426 now or who might take COS 426 in
        //                             the future. Note that sharing output artwork with
        //                             others is not only permitted but encouraged, so
        //                             long as doing so does not expose solution specifics.`}
        //                         </Typography>
        //                     </li>
        //                     <li>
        //                         <Typography variant="body1" paragraph={true}>
        //                             {`Students must never recieve or view someone
        //                             else's solutions to a programming assignment
        //                             (or variant of an assignment), besides that of
        //                             their current partner.`}
        //                         </Typography>
        //                     </li>
        //                 </ul>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`All the rules above continue to apply after
        //                     assignments are graded and after the end of the semester.`}
        //                 </Typography>
        //                 <Typography variant="h6">
        //                     {'Collaboration with Course Staff'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Students are welcome to discuss their solutions
        //                     with course staff members during the precept problem
        //                     sessions, in office hours, and via private Piazza
        //                     posts.`}
        //                 </Typography>
        //                 <Typography variant="h6">
        //                     {'Collaboration with Partners'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Students may show their partial or complete solution
        //                     to another student, and they may examine their solutions.
        //                     However, all submitted code must be fully understood
        //                     and more specifically `}
        //                     <i>{`typed`}</i>
        //                     {` into the computer by student submitting the
        //                     assignment. If a students sees and understands another
        //                     student's solution (perhaps because they are working
        //                     as a pair) then they should take a minute to think
        //                     about it and then type their own version of the solution.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`For each assignment, students must specifically
        //                     state in their writeup file the names of any
        //                     individuals with whom they collaborated, or from
        //                     whom they received help, and the nature of the help
        //                     that they received. This includes help from friends,
        //                     the internet, classmates, labTAs, and course staff members,
        //                     among others.`}
        //                 </Typography>
        //                 <Typography variant="h6">
        //                     {'Collaboration with Classmates'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Students are encouraged to discuss common
        //                     concerns with classmates either in private or
        //                     publicly in the Piazza course forum. These discussions
        //                     must be kept at a general level, without exposing
        //                     their solutions.`}
        //                 </Typography>
        //                 <Typography variant="h6">
        //                     {'Concerning Electronic Communication'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`If a student has a question or comment that will
        //                     be helpful to other students, and they need not
        //                     reveal any parts of their work to express the question
        //                     or comment properly, then they should post it to the
        //                     course's `}
        //                     <a href="https://piazza.com/princeton/spring2019/cos426/home?">{`Piazza`}</a>
        //                     {` page. One of the course's
        //                     instructors will reply as soon as possible.
        //                     Instructors also welcome replies from other students,
        //                     and may "endorse" a student's response instead of
        //                     composing an instructor's response.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`If a student has a question or comment that will
        //                     not be helpful to other students, or if they must
        //                     reveal parts of their work to express their question
        //                     or comment adequately, then they should post it
        //                     privately on Piazza.`}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     <i>
        //                         {`Students should not, under any circumstances,
        //                         share code in digital form!`}
        //                     </i>
        //                 </Typography>
        //                 <Typography variant="h6">
        //                     {'Final Note'}
        //                 </Typography>
        //                 <Typography variant="body1" paragraph={true}>
        //                     {`Please do `}
        //                     <i>{`not`}</i>
        //                     {` publish solutions to programming
        //                     assignments in a way that could compromise their
        //                     utility as pedagogical tools. For example, do not
        //                     make them available on a publicly accessible web
        //                     page, such as GitHub. At Princeton, this is a
        //                     violation of the basic Rights, Rules,
        //                     Responsibilities of members of the University community.`}
        //                 </Typography>
        //             </Typography>
        //         </Typography>
        //         <Typography component={'div'} paragraph={true}>
        //             <Typography variant="h4" gutterBottom>
        //                 {'Plagiarism'}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Plagiarism and abetting plagiarism are serious academic
        //                 infractions. Programming is a creative work and the academic
        //                 regulations that apply to plagiarizing prose also apply to
        //                 plagiarizing code. Princeton's `}
        //                 <a href="https://rrr.princeton.edu/">{`Rights, Rules, Responsibilities`}</a>
        //                 {` defines plagiarism as "the use of any outside source
        //                 without proper acknowledgment." It ranges from "verbatim
        //                 copying" (e.g., cutting-and-pasting code) to "thorough
        //                 paraphrasing" (e.g., changing variable names or rearranging
        //                 code).`}
        //             </Typography>
        //             <Typography variant="h6">
        //                 {'Copying from a Partner'}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`The more leniant collaboration policy for this course
        //                 is a privilege and built upon trust. If students are caught
        //                 breaking this trust by violating the collaboration policy, encouraged to discuss common
        //                 concerns with classmates either in private or
        //                 publicly in the Piazza course forum. These discussions
        //                 must be kept at a general level, without exposing
        //                 their solutions.`}
        //             </Typography>
        //             <Typography variant="body1" paragraph={true}>
        //                 {`Following review, the precept then turns into a `}
        //                 <b>{`problem session`}</b>
        //                 {`, during which instructors are avaliable as LabTAs
        //                 to answer students' questions individually and to provide
        //                 personal assignment troubleshooting.`}
        //             </Typography>
        //         </Typography>
        //     </Layout>
        // );
    }
}

export default withRoot(withStyles(styles)(IndexPage));

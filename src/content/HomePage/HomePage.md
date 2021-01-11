# Syllabus
### Description
Computer graphics is the intersection of computer science, geometry, physics, and art. This course will study topics in this broad and remarkable field, with an emphasis on practical methods and applications. In particular, the course will provide an extensive introduction to image processing, modeling, rendering, and computer animation. The goal of this course is to equip students with the various tools and techniques they need to build large projects with significant graphical components; this includes applications for realizing artistic visions (art and architecture), user interaction (UI/UX development), entertainment products (video games, CGI, animations, and augmented reality), visualizations and academic research (physics, biology, chemistry, engineering, and other disciplines), etc.

Topics include: color theory, sampling, image processing, image compositing, mesh representations, mesh processing, parametric curves and surfaces, implicit surfaces, subdivision surfaces, geometric data structures, geometric transformations, ray casting, lighting and reflectance, global illumination, rasterization, scan conversion, particle systems, animation, computer games, fabrication, etc.

### Prerequisites
The course is appropriate for students who have taken COS 217 and COS 226 (or equivalent). JavaScript will be the main programming language; however no prior knowledge of the language is required for students who wish to enroll in this course.

### Lectures and Precepts
Lectures are held on Tuesdays and Thursdays from 3:00–4:20PM over Zoom.

Precept is held on Wednesday and Thursday from 7:30–8:20PM in Friend Center 008. Students may attend either (or both) during any week, regardless of their registration. In general, precept attendance is highly encouraged.

### Required Reading

<div>
    <textbook>
    </textbook>
</div>

There is one required textbook for this course:

> *Computer Graphics with OpenGL*, 4th Ed., Hearn, Baker, and Carithers. Prentice Hall, 2010. ISBN: 978-0136053583.

In the past, most students have found it is possible to pass the course without opening the textbook once, as almost all graded material is provided through lecture and precepts; nevertheless, this textbook will prove extremely useful for especially eager and motivated students who wish to pursue further studies in computer graphics. In addition to covering graphics concepts that could not otherwise squeeze into this course, the textbook contains wonderful C++ and OpenGL implementations that all graphics programmers would be well-suited to know.

# Staff
Staff contact information is listed below, but students seeking help should keep in mind that it is almost always more appropriate to post their question to <piazza-link></piazza-link> rather than emailing an individual member of the course staff.

<div>
    <staff>
    </staff>
</div>


# Precepts
The precepts for this class follow the "flipped classroom" methodology and serve to assist students with their assignments. During the first 10–15 minutes of precept, instructors briefly review precept materials with the entire class; these precept materials generally consist of "tips and tricks" slides for current assignment. It is highly recommended that students read through an assignment's precept slides (in their entirety) before starting work on the assignment itself.

Following review, the precept then turns into a **problem session**, during which instructors are available as LabTAs to answer students' questions individually and to provide personal assignment troubleshooting.

# Office Hours
### Expectations
COS 426 is a 400-level class. For students concentrating in Computer Science, this course will be marked as a senior departmental on their transcript. Accordingly, students should not only expect to be held to higher standards, but should also expect less hand-holding in general than they may find in 300-level courses and below.

In particular, students should not expect LabTAs to give them the answer to an assignment problem after enough pestering. Course staff are available to help students with their learning, not their grade. Here is a list of what instructors can help with:

* Course staff are happy to help explain course concepts or general techniques that students may be confused about.
  * e.g. "Could you please explain image convolution?"
* Course staff are happy to clarify assignment specs, provided the clarification is not about an intentional ambiguity.
  * e.g. "Should this filter rotate the image clockwise or counterclockwise?"
* Course staff are happy to give the occasional starting hint (but no more) to put students on the right track for a certain problem.
  * e.g. "The runtime of the brush filter should not exceed 4r^2 per center."
* Course staff are happy to answer questions about JavaScript syntax.
  * e.g. "How can I iterate over entries in an Object?"
* Course staff will give modest debugging assistance only once students have demonstrated that they understand the solution to a problem at a high level (in other words, after students explain what they are trying to do, and that explanation is correct).

### Nota Bene
Unless a student has a JavaScript syntax question, **instructors will not look at any code** until the student has demonstrated that they understand the solution to the problem they need help with (see the last bullet point above). Second, unless it's a syntax issue, instructors will not fix a student's code for them. They will simply state what region of the code looks wrong. Also, if a student's explanation is incorrect, instructors will not fix it for them. Course staff will either state what part of it is wrong, and / or ask a question to give the student something to think about.

### Schedule
Undergraduate LabTAs are available to help students during both precepts. LabTAs are also available in the Friend Fishbowl room Friday 11am–4pm, Saturday 12–3pm, and Sunday 1–5pm & 9–11pm.

Graduate course staff are available over Zoom from 3–5pm on Mondays, and 1–2pm on Tuesdays. Professor Heide's office hours are held Tuesday after class in the Zoom lecture meeting.

# Coursework
### Course Grades

<div>
    <coursework>
    </coursework>
</div>

Final grades are based on six biweekly programming assignments (60%), one written exam (15%), a final programming project (20%), and course participation (5%). Throughout the semester, there will ample opportunities for extra credit and student participation. In particular, students are highly encouraged both to enter each assignment art contest, as well as to engage regularly with their peers on <piazza-link></piazza-link>.

### Written Exam
Only one exam is administered during this course. Currently, this exam is scheduled to be taken in-class on the Thursday of midterms week. The exam is closed-book; however, students are permitted to each bring an **8.5x11" double-sided cheat-sheet**. The written exam covers all course material up through (and including) Week 5. Students may be tested on any and all graphics concepts touched on through lectures, readings, and assignments during this period. Examples of exams from previous offerings of this course will be posted; however, note that past exams may have covered different material. Students may also find the qualitative exercises available on the course website helpful when preparing for the exam, but they should expect more quantitative questions on the exam itself.

Although the six weeks of course material that follow the exam are not covered on any written test, it is still "tested" through strict no-collaboration questions that are introduced into assignment writeups following Spring Recess. Effectively, these questions will serve as a second "take-home" exam spread throughout the later assignments. This is done in order alleviate the dependency of students' final grades on their sole written exam grade, while also testing material without overburdening students with tedious and stressful examinations. Note that the grades for no-collaboration questions are incorporated into assignment grades rather than into exam grades.

### Programming Assignments
There are six biweekly programming assignments. Assignments are **not** weighted evenly. Assignments will be implemented mostly in JavaScript. Any computer and browser may be used for development, however students should ensure that their programs work on Chrome with the latest release of macOS, as this is the environment in which submissions are tested and graded.

Assignments are submitted via the Princeton CS Dropbox, also known as TigerFile. Students should look for the submission link in the description of each assignment, login with their Princeton netID, and then submit all applicable files by the posted deadline. Students may resubmit and unsubmit files as needed up until the submission deadline. Further alterations will result in the assignment being marked as late.

When submitting an assignment, all code, writeup, input images, output images, overlay images, etc., should be packed into a single folder titled "assignmentN" (where N is the assignment number — eg. , assignment0) and compressed. In the interest of preserving space, it is requested that all images are submitted in .jpg format.

### Final Project
The final project is a chance for students to build a system incorporating one or more idea that has been learned in class. Projects should be done in groups of two or three (other team sizes are permitted with permission of an instructor). The focus of the project can be anything of the group's choosing, as long as it somehow involves computer graphics. Many students choose to create games, or art demos, but it really can be anything.

Students are welcome to recycle code infrastructure provided for previous assignments, and they are also permitted to borrow ideas or other code infrastructure from the web or elsewhere. However, teams should be very careful to distinguish which parts they contributed to directly, and which other parts are loaned from elsewhere. Moreover, while it is ok to use common libraries/infrastructure, they should not dwarf students' own code in terms of their role in the project. In particular, if a hypothetical group were to make a game, they should not build on top of a highly polished and complete game engine like Unity.

### Late Policy
Assignments are due at 11:55PM on their posted due dates, where submission time is determined by the file date of the file upload. Following a very brief grace period (which students should confirm with an instructor beforehand), one minute late is the same as one day late. Note that if any part of an assignment is submitted late, the entire assignment will be marked late. To submit an assignment late, remove all uploads from the online submission system, since instructors will grade partial submissions as-is (whereas no submissions are marked late). Note that work cannot be accepted after Dean's Date without a Dean's recommendation.

Late assignments are marked down 1/4 of the full grade *per day or partial day* late. This said, students may elect to wave up to three days of late penalties. Additional late penalties will be waived only in the case of unforeseeable circumstances like medical emergencies, as documented by a student's Dean or Director of Studies. Note that late days cannot be used for the final project as it is due on Dean's Date

### Regrades
Students who feel they have been incorrectly graded may write a short private <piazza-link></piazza-link> post describing the potential grading mistake. All regrade requests must be posted within two weeks of when the potential grading error was made.

# Collaboration Policy
Programming is an individual creative process much like composition. Students must reach their own understanding of the problem and discover a path to its solution. During this time, discussions among students in this course about the assignments is not only permitted but *encouraged*. Moreover, those who find they benefit from bouncing ideas off of their peers are encouraged to work in **pairs**.

Note that this is somewhat more relaxed than the collaboration policies of COS 126, COS 226, COS 217, etc., in the sense the conceptual components (ideation, brain-storming, understanding, problem-solving) of all assignments are partnered, even though programming components of assignments are still individual. This relaxed policy does not mean pairs are allowed share all their code with one another. Here is an executive summary:

<div>
    <collaboration-table>
    </collaboration-table>
</div>

### Individual Solutions
Students must individually compose all of their own solutions. The term solutions refers to any of the products created when completing a programming assignment excluding the writeup file, such as source code (including comments), a personal understanding of all submitted work, and output images. It includes both finished and unfinished products, regardless of correctness or completeness.

* Students must never share their code with anyone (besides their current partner) who is taking COS 426 now or who might take COS 426 in the future. Note that sharing output artwork with others is not only permitted but encouraged, so long as doing so does not expose solution specifics.
* Students must never receive or view someone else's solutions to a programming assignment (or variant of an assignment), besides that of their current partner.
* **Students must never view someone else's writeup, including that of their current partner.**

All the rules above continue to apply after assignments are graded and after the end of the semester.

### Collaboration with Course Staff
Students are welcome to discuss their solutions with course staff members during the precept problem sessions, in office hours, and via private <piazza-link></piazza-link> posts.

### Collaboration with Partners
Students may show their partial or complete solution to another student, and they may examine their solutions. However, all submitted code must be fully understood and more specifically *typed* into the computer by student submitting the assignment. If a student sees and understands another student's solution (perhaps because they are working as a pair) then they should take a minute to think about it and then type their own version of the solution.

For each assignment, students must specifically state in their writeup file the names of any individuals with whom they collaborated, or from whom they received help, and the nature of the help that they received. This includes help from friends, the internet, classmates, and course staff members, among others.

### Collaboration with Classmates
Students are encouraged to discuss common concerns with classmates either in private or publicly in the <piazza-link></piazza-link> course forum. These discussions must be kept at a general level, without exposing their solutions.

### Concerning Electronic Communication
If a student has a question or comment that will be helpful to other students, and they need not reveal any parts of their work to express the question or comment properly, then they should post it to the course's <piazza-link></piazza-link> page. One of the course's instructors will reply as soon as possible. Instructors also welcome replies from other students and may "endorse" a student's response instead of composing an instructor's response.

If a student has a question or comment that will not be helpful to other students, or if they must reveal parts of their work to express their question or comment adequately, then they should post it privately on <piazza-link></piazza-link>.

***Students should not, under any circumstances, share code in digital form!***

### Final Note
Please *do not publish solutions* to programming assignments in a way that could compromise their utility as pedagogical tools. For example, do not make them available on a publicly accessible web page, such as GitHub. At Princeton, this is a violation of the basic Rights, Rules, Responsibilities of members of the University community.

# Plagiarism
Plagiarism and abetting plagiarism are serious academic infractions. Programming is a creative work and the academic regulations that apply to plagiarizing prose also apply to plagiarizing code. Princeton's [Rights, Rules, Responsibilities](https://rrr.princeton.edu/) defines plagiarism as "the use of any outside source without proper acknowledgment." It ranges from "verbatim copying" (e.g., cutting-and-pasting code) to "thorough paraphrasing" (e.g., changing variable names or rearranging code).

### Copying from a Partner
The more lenient collaboration policy for this course is a privilege; it is founded in the trust between students and instructors. If students are caught breaking this trust by violating the collaboration policy, they risk having this policy revoked for the entire class.

### Outside Sources & Citations
Students are only permitted to copy or adapt that is not theirs if it comes from the course materials (i.e., the course textbook, programming assignment specifications, lecture slides, precept slides, etc.). When students use outside sources, they must cite any code that they copy or adapt (with the exception of code that is included in the assignment starter files).

### Plagiarism Penalties
We refer alleged academic violations (including plagiarism and abetting plagiarism) to the [Committee on Discipline](https://rrr.princeton.edu/#comp25). If found responsible, the typical penalty is an F as a course grade plus whatever penalty that the CoD imposes. (The typical CoD penalty for plagiarism is suspension from the University for one year.) Violators of course policies that are not adjudicated by the CoD will receive penalties based on the severity of the violation, ranging from a warning (for violations that are both unintentional and innocuous) to an F in the course (for violations that are both intentional and serious).

# Acknowledgements
The COS 426 course staff would like to thank former COS 426 undergraduate and two-time TA Reilly Bova ’20 for creating this beautiful website and revising all the assignment specifications. We would also like to thank William Sweeney ’20 and Reilly Bova together for rewriting the precept slides and compiling supplementary content for the course.

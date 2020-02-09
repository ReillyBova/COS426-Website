const office_hours = {
    expectations: [
        `COS 426 is a 400-level class. For students concentrating in Computer
        Science, this course will be marked as a senior departmental on their
        transcript. Accordingly, students should not only expect to be held to
        higher standards, but should also expect less hand-holding in general
        than they may find in 300-level courses and below.`,
        `In particular, students should not expect LabTAs to give them the answer
        to an assignment problem after enough pestering. Course staff are avaliable
        to help students with their learning, not their grade. Here is a list of
        what instructors can help with:`,
    ],
    help: [
        {
            scenario: `Course staff are happy to help explain course concepts or general techniques that students may be confused about.`,
            example: `Could you please explain image convolution?`,
        },
        {
            scenario: `Course staff are happy to clarify assignment specs, provided the clarification is not about an intentional ambiguity.`,
            example: `Should this filter rotate the image clockwise or counterclockwise?`,
        },
        {
            scenario: `Course staff are happy to give the occasional starting hint (but no more) to put students on the right track for a certain problem.`,
            example: `The runtime of the brush filter should not exceed 4r^2 per center.`,
        },
        {
            scenario: `Course staff are happy to answer questions about JavaScript syntax.`,
            example: `How can I iterate over entries in an Object?`,
        },
        {
            scenario: `Course staff will give modest debugging assistance only once students
            have demonstrated that they understand the solution to a problem at
            a high level (in other words, after students explain what they are
            trying to do, and that explanation is correct).`,
        },
    ],
    notes: [
        `Unless a student has a JavaScript syntax question, `,
        `instructors will not look at any code`,
        ` until the student has demonstrated that they understand the solution to the problem
        they need help with (see the last bullet point above). Second, unless
        it's a syntax issue, instructors will not fix a student's code for them. They will
        simply state what region of the code looks wrong. Also, if a student's
        explanation is incorrect, instructors will not fix it for them. Course
        staff will either state what part of it is wrong, and / or ask a
        question to give the student something to think about.`,
    ],
    schedule: [
        `Undergraduate LabTAs are avaliable to help students during both precepts.
        LabTAs are also avaliable in the Friend Fishbowl room Friday 11am–4pm,
        Saturday 12–3pm, and Sunday 1–5pm & 9–11pm.`,
        `Graduate course staff are avaliable in CS 003 from 3–5pm on Mondays,
        and 1–2pm on Tuesdays. Professor Heide's office hours are held Tuesday
        after class in CS 104 or CS 410.`
    ]
};

export default office_hours;

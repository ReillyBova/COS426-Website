const materials = {
    lectures: [
        'Introduction & Color',
        'Digital Image Processing', // Week 1
        'Sampling, Resampling & Warping',
        'Compositing & Morphing', // Week 2
        '3D Modeling',
        'Polygonal Meshes', // Week 3
        'Parametric Curves & Surfaces',
        'Subdivision Surfaces', // Week 4
        'Implicit Surfaces & Solid Models',
        'Scenes & Transformations', // Week 5
        'More On Transformations',
        '', // Week 6
        'Rendering & Raycasting',
        'Lighting & Reflectance', // Week 7
        'Global Illumination',
        '3D Rasterization Pipeline', // Week 8
        'Scan Conversion',
        'Non-photorealistic Rendering', // Week 9
        'Passive Dynamics & Particle Systems',
        'Character Animation', // Week 10
        'Games',
        'Production F/X', // Week 11
        '3D Fabrication',
        '', // Week 12
    ],
    precepts: [
        'Learning Javascript', // Week 1
        'Image Processing I', // Week 2
        'Image Processing II', // Week 3
        'Halfedge Structure', // Week 4
        'Mesh Processing', // Week 5
        'Open Office Hours (Wed only; no Thu precept)', // Week 6
        'GLSL & Raytracing I', // Week 7
        'Raytracing II', // Week 8
        'Rasterization I', // Week 9
        'Rasterization II', // Week 10
        'Animation', // Week 11
        'Open Office Hours (Wed only; no Thu precept)', // Week 12
    ],
    readings: [
        [{ text: 'Ch. 1, 2, & 19' }],
        [
            { link: 'Smith95b' },
            { selection: 'Sections 1–2 of', link: 'Paris09' },
        ], // Week 1
        [{ text: 'Ch. 6.15' }, { link: 'Hanrahan95' }],
        [{ text: 'Ch. 5.3' }, { link: 'Beier92' }], // Week 2
        [{ text: 'Ch. 13' }],
        [{ selection: 'Sections 1–3 of', link: 'Botsch07' }], // Week 3
        [{ text: 'Ch. 14' }],
        [{ selection: 'Sections 1, 2.1, 4, & 5 of', link: 'Zorin00' }], // Week 4
        [{ text: 'Ch. 15' }],
        [{ text: 'Ch. A.1, A.2, A.5, 7, 9, & 11' }], // Week 5
        [{ text: 'Ch. 8 & 10' }],
        [], // Week 6
        [{ text: 'Ch. 16 & 21.1' }],
        [{ text: 'Ch. 17–18' }], // Week 7
        [{ text: 'Ch. 21' }],
        [{ text: 'Ch. 6' }], // Week 8
        [],
        [], // Week 9
        [{ link: 'Reeves83' }, { link: 'Witkin01a' }, { link: 'Witkin01b' }],
        [], // Week 10
        [],
        [], // Week 11
        [],
        [], // Week 12
    ],
    other: [
        {
            title: 'In-class Exam (on content through Week 5)',
            due: { week: 6, day: 'Thursday' },
        },
        {
            title: 'In-class Project Proposals',
            due: { week: 12, day: 'Thursday' },
        },
        {
            title: 'Final Project Presentations I (Tentative Date)',
            due: { week: 13, day: 'Friday' },
        },
        {
            title: 'Final Project Presentations II (Tentative Date)',
            due: { week: 13, day: 'Saturday' },
        },
    ],
};

export default materials;

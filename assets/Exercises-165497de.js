const e={},t=`The following exercises are primarily provided so that students may test and challenge their graphics knowledge, thereby facilitating and expanding students' learning. In the past, students have also found these questions helpful when preparing for the exam. Note that the questions on the exam may not necessarily reflect the exercises below, and that there may be material on the exam that is not covered by the below questions (and vice versa). In particular, students should expect that exam questions will be more quantitative in nature than these provided exercises.

# Raster Graphics and Color Spaces

1. Describe how a color CRT works.
2. Describe the tristimulus theory of color perception and its relevance to computer displays.
3. What is the CIE Chromaticity diagram?
4. Can every color perceptible to the human eye be displayed as a combination of three primaries? Give evidence to support your answer.
5. Write the equations that convert a color in the RGB model to the CMY model.
6. Describe which part of the RGB color cube represents gray values.
7. Same question for the CMY color cube, the HSV color hexcone, and the HLS double cones.

# Image Quantization

1. What is intensity quantization? When does it happen? How can we compensate for it?
2. True or False: dithering spreads quantization error among pixels.

# Image Sampling and Reconstruction

1. "A pixel is a sample, not a little square." What are the implications of this statement on image processing algorithms?
2. If a pixel is an infinitely small sample, how is it visible on the screen of a CRT display?
3. Display on a CRT is most similar to what reconstruction filter?
4. How many samples are required to represent a given signal without loss of information?
5. What signals can be reconstructed without loss for a given sampling rate?
6. When is a signal band-limited? What is the Nyquist rate for a band-limited signal?
7. What is aliasing? When does it happen? Give three examples.
8. What is antialiasing? How does antialiasing compare to dithering?
9. Convolution in the spatial domain is equivalent to what operation in the frequency domain?
10. What is a sinc reconstruction filter? What are its properties? Why don't we use sinc filters for reconstruction in practice?
11. Write a convolution filter well-suited for edge detection. Same for blurring.

# Image Warping

1. Compare forward mapping and reverse mapping for image processing.
2. What are the advantages and disadvantages of each method?

# Image Composition and Metamorphosis

1. What is the meaning of the following rgba tuples: (1,1,1,1), (1,1,1,0.5), (0.5,0.5,0.5,1), (1,1,1,0)?
2. What is the resulting pixel color of: (1,0,0,0.5) over (0,1,0,0.5) over (0,0,1,0.5)?

# 3D Primitives

1. What is the volume of a 3D point? a 3D ray? a 3D line? a 3D polygon? a 3D sphere?
2. What issues must be addressed by a 3D rendering system but not by a 2D rendering system?
3. Why does a 3D line not have a convenient implicit representation?
4. What is the implicit representation for a 3D plane? What are the geometric interpretations of each parameter?

# Ray Tracing

1. What is a primary ray? a secondary ray?
2. What is a ray tree? What determines the branching factor at each node of the ray tree?
3. Describe how shadows are determined in a recursive ray tracer. Extend your answer to consider polygonal area light sources.
4. Derive the algebraic solution for the intersection of a ray and a plane.
5. Derive the algebraic solution for the intersection of a ray and a sphere.
6. Derive the algebraic solution for the intersection of a ray and an infinite cylinder.
7. Which of the following spatial data structures partition 3D space into non-overlapping cells: a) grid, b) octree, c) BSP tree, d) bounding volume hierarchy?
8. What is the expected computational complexity of intersecting a ray with a scene containing N triangles using the following spatial data structures: a) none, a) grid, c) BSP tree.
9. Derive the equation for determining the direction of refraction rays given an incoming ray and indices of refraction.
10. If L represents emission from a light source, C represents reception at a camera, D represents a diffuse reflection at a surface, and S is a pure specular reflection at a surface, which of the following ray paths are modeled by your ray tracer of assignment #3: a) LDC b) LSC c) LDDC d) LSSC e) LSDSC f) LDSDC
11. Ray tracing is an approximate solution method for the rendering equation. Explain.

# Direct Illumination

1. Give examples from the real world of light sources best approximated by point light sources, by directional light sources, and by spot light sources.
2. Write an equation describing the attenuation with distance (r) of light intensity emanating from a point light source in the real world. How is it modeled in a raytracer? Why are they different?
3. Give examples from the real world of surface materials that are primarily diffuse and/or primarily specular.
4. Derive the equation for diffuse reflectance (Iout = cos(theta) \\* Iin).
5. Write the equation for the Phong model of surface reflectance including ambient, emissive, diffuse, specular, transmission, and shadow terms. What is the ambient term? Why is it included in the model?

# Modeling Transformations

1. What types of 3D transformations can be represented with a 3x3 matrix?
2. What types of 3D transformation can be represented by a 4x4 matrix and 3D homogeneous coordinates?
3. Why do we represent transformations with matrices?
4. Which of the following 3D points with homogenous coordinates is closer to the origin: (8, 4, 2) or (4, 2, 1)?
5. What is a linear transformation? What are its properties?
6. What is an affine transformation? Which properties of linear transformation do not apply to affine transformations?
7. What is a projective transformation? Which properties of an affine transformation do not apply to projective transformations?
8. Write a sequence of transformation matrices that scales 3D points based on their distances from an arbitrary origin O = (Ox, Oy, Oz).
9. Write a sequence of transformation matrices that rotates 3D points counter-clockwise by theta degrees about an arbitrary 3D line defined by P1 and P2.

# Viewing Transformations

1. Write the parameters describing a pin-hole camera.
2. Write the matrix that transforms a 3D coordinate system with origin O and orthogonal basis vectors e1, e2, and e3 to the standard cartesian coordinate system with the origin at (0,0,0) and basis vectors (1,0,0), (0,1,0), and (0,0,1).
3. To what direction does the camera "towards" vector map during a transformation from the world coordinate system to a right-handed camera coordinate system?
4. What is a parallel projection? Write a parameterized matrix that can be used for all possible parallel projections. What is the geometric interpretation for each of the parameters?
5. What is a perspective projection? Write a parameterized matrix that converts a perspective view frustum to a canonical viewing volume. What is the geometric interpretation for each parameter?
6. Can any parallel projection be described in terms of a perspective projection? Vice-versa?
7. Is it possible to represent a 3D->2D parallel projection with a 3x3 matrix? If so, write it. If not, why? Same question for perspective projection.
8. Under what circumstances are parallel projections mostly used? Same question for perspective projections. Which type of projection produces the most realistic-looking images?

# Textures

1. What is a reason to use texture mapping rather than lots of little polygons? Are the two representations functionally equivalent? What are the differences?
2. Describe the different coordinate systems used for texture mapping.
3. Describe how texture coordinates are computed during scan conversion with a sweep-line algorithm.
4. Describe at least three different lighting parameters that could be modulated with texture maps. For each, give an example object for which the texture map would be useful.
5. What are Mip Maps? Give an example of when they are useful. Why are they used?
6. What is bump mapping? Give an example object that might use it. Write a procedure that describes a plausible bump map for that object.
7. What is environment mapping? When is it used? How could an environment map be captured?

# Hidden Surface Removal

1. Write the equation for determining whether a polygon is back-facing with respect to a viewer.
2. For each of the following algorithms, how does it insure that the pixels resulting from rendering the front-most polygons are in the frame buffer: a) depth-sort, b) z-buffer, c) ray casting, d) Warnock's area subdivision, e) scan-line?
3. What is image-space precision? object-space precision? Specify whether the following algorithms operate with object-space or image-space (pixels) precision: a) back-face culling, b) depth-sort, c) z-buffer, d) ray casting, e) Warnock's area subdivision, f) scan-line.
4. For each of the following hidden surface removal methods, a) back-face culling, b) depth-sort, c) z-buffer, d) scan-line, specify in which stage of the rendering pipeline it executes: DB traversal, modeling transform, trivial reject, lighting, viewing transform, clipping, projection, rasterization, or display.
5. If writing pixels into the frame buffer is hypothetically the performance bottleneck in the rendering pipeline, rank the following algorithms from fastest to slowest: a) depth-sort, b) z-buffer, c) ray casting, d) Warnock's area subdivision, e) scan-line?
6. Which hidden surface removal algorithms perform more slowly for frame buffers with higher resolution?
7. What is depth-complexity? Which hidden surface removal algorithms perform more slowly for scenes with high depth-complexity?
8. Z-buffers have become ubiquitous in hardware on most PC graphics accelerators. What are the disadvantages of the z-buffer algorithm?
9. The z-buffer method requires a z-value to be stored for every pixel in the entire screen. In some situations, this memory requirement is prohibitive. Propose a method in which the z-buffer approach is used, but memory is allocated for only part of the screen. What additional problems arise?

# Radiosity

1. Write the radiosity equation. For each of the terms (B, E, rho, and F) describe its meaning and give suitable units.
2. The radiosity equation is system of equations. What are the variables to be solved for? Is the system of equations linear?
3. Which of the following assumptions must be true for the basic radiosity equation to be a good approximation to the rendering equation: a) all surfaces are diffuse, b) all surfaces are planar, c) the radiosity is the same at all points on a patch element, d) there are no occlusions resulting from one patch blocking light transfers between any other two patches.
4. If we write the radiosity equation as Ax=b, consider the properties of A: What are the values on the diagonal for planar patch elements? Is the matrix diagonal dominant? Is it symmetric? When can it be singular? Is it positive definite?
5. The radiosity method studied in class simulates which types of lighting effects: a) shadows, b) direct illumination from area light sources, c) direct illumination from point light sources, d) indirect illumination due to reflections off specular surfaces, e) indirect illumination due to reflections off diffuse surfaces?
6. Write an an expression for the form factor F_ij for two mutually visible patch elements i and j. Give a short intuitive explanation for each term. How does the expression change if the two patch elements are partially occluded by blockers?
7. What is the relationship between F_ij and F_ji if we assume uniform light reflection?
8. What is radiance? How is it different than radiosity?
9. Is the progressive radiosity method asymptotically more efficient than Gauss-Seidel iteration? If so, why? If not, why do people use progressive refinement?

# Meshes

1. The computers in MECA can draw triangle strips at faster rates than independent triangles. Why?
2. If an object's surface is a closed 2-manifold, how many faces can share each edge? How many faces can share each vertex?
3. Write the Euler-Pontcare formula for 3D polyhedra. Give values for V, E, and F for: a) a cube, b) an octahedron, c) a dodecahedron, d) an icosahedron.
4. What is the computational complexity of an operation that changes the coordinates of a vertex V for each of the following mesh representations: a) list of triangles with explicit vertex coordinates stored redundantly (like the .ray representation)? b) triangle strip/fan? c) Vertex table and face table with references to vertices? d) winged-edge?
5. What is the computational complexity of an operation that inserts a new vertex on the edge between two existing vertices V1 and V2 for each of the following mesh representations: a) list of triangles with explicit vertex coordinates stored redundantly (like the .ray representation)? b) triangle strip/fan? c) Vertex table and face table with references to vertices? d) winged-edge?
6. Given a winged-edge data structure and a pointer to an edge E and a face F, write pseudo-code for the following functions: a) Return the face across E from F. b) Return the edge adjacent to E moving counter-clockwise around F. c) Return the vertex adjacent to E moving clockwise around F. What is the computational complexity of these operations?

# Curves

1. For each of the following properties, give an example of a curve representation that guarantees it: a) local control, b) interpolates control points, c) C1 continuity, d) C2 continuity, d) curve lies with convex hull of control points.
2. Why do computer graphics applications use piecewise polynomial curves of degree 3 rather than curves of higher-order, say degree 100?
3. How many control points are required to specify a Bezier curve of degree d?
4. From the Bernstein polynomials (the Bezier blending functions), prove that a cubic Bezier curve interpolates V0 and V3.
5. What property of the Bernstein polynomials guarantees that a Bezier curve lies within the convex hull of its control points?
6. Draw a Bezier curve for which recursive subdivision would be a more efficient method for rendering.
7. What is C1 continuity? How is it different than G1 continuity? How is it different that C2 continuity?
8. Draw a spline curve comprising two Bezier curve segments in which the derivatives at the joint are in OPPOSITE directions.
9. How many degrees of freedom are available for a spline with m cubic segments? How many constraints (degrees of freedom) are required to specify C2 continuity at each interior joint of a spline with m cubic segments? How many constraints at the endpoints of the spline? How many degrees of freedom are left?
10. Which of the following properties are guaranteed by C2 interpolating splines a) C2 continuity, b) interpolation of control points, c) local control, d) convex hull.
11. Which of the following properties are guaranteed by cubic B-Splines: a) C2 continuity, b) interpolation of control points, c) local control, d) convex hull.
12. Which of the following properties are guaranteed by cubic Catmull-Rom Splines: a) C2 continuity, b) interpolation of control points, c) local control, d) convex hull.

# Surfaces

1. What is an implicit surface? Give a simple example.
2. Which of the following are true for implicit surfaces: a) easy to draw, b) easy to test intersections, c) hard to describe complex shapes, d) local control?
3. What is a parametric surface? Give a simple example.
4. Which of the following are true for parametric surfaces: a) easy to draw, b) easy to test intersections, c) hard to describe complex shapes, d) local control?
5. Which of the following are true for a cubic Bezier tensor product surface: a) interpolates the four corner control points, b) interpolates the centroid of the control points, c) lies within the convex hull of the control points, d) provides local control, e) has at most one point with positive curvature.
6. Show that a point at parameter values (u,v) on a bicubic Bezier patch is the same as the point at parameter value u on a cubic Bezier curve defined by the four control points B1-B4 found by evaluating four Bezier curves through a group of four patch control points at parameter value v.
7. What is a subdivision surface? Give a simple example.
8. Which of the following are true for subdivision surfaces: a) easy to draw, b) easy to test intersections, c) hard to describe complex shapes, d) local control?
9. For each of the following properties, list the surface representations (mesh, implicit, parametric, subdivision) that provide it best and worst: a) high accuracy, b) conciseness, c) local support, d) C2 continuity, e) efficient display, f) efficient intersections.

# Solids

1. What is a voxel grid? Give a simple example.
2. What is the storage requirements for a uniform voxel grid with 512 voxels on each side of the cube and 24 bits of data in each voxel?
3. What is the computational complexity of tracing a ray through a voxel grid with N^3 voxels: a) O(1), b) O(logN), c) O(N), d) O(NlogN), e) O(N^2), f) O(N^3).
4. Which of the following are true for voxels: a) fast iso-surface rendering, b) easy to test intersections, c) hard to describe complex shapes, d) affine invariant?
5. What is a quadtree? an octree? Give a simple example. What is an advantage of such a representation compared to uniform voxels? a disadvantage?
6. What is the computational complexity of tracing a ray through an octree with at most N^3 cells: a) O(1), b) O(logN), c) O(N), d) O(NlogN), e) O(N^2), f) O(N^3). Is the expected complexity less? Under what conditions?
7. What is a binary space partition (BSP)? Give a simple example. What is an advantage of such a representation compared to an octree? a disadvantage?
8. Which of the following are true for a BSP: a) all leaf cells are convex, b) finding which cell contains a point takes expected-case O(logN) time using a BSP with N leaf cells, c) the largest number of cells possibly resulting from a BSP constructed by N splits has O(N) leaf cells.
9. Describe the visibility ordering algorithm used when drawing BSPs. Explain why it is guaranteed to produce a front-to-back (or back-to-front) ordering.
10. What is the computational complexity of tracing a ray through a balanced BSP with N leaf cells: a) O(1), b) O(logN), c) O(N), d) O(NlogN), e) O(N^2), f) O(N^3). Is the expected complexity less? Under what conditions?
11. What is constructive solid geometry? Give a simple example. What is an advantage of such a representation compared to other solid representations? a disadvantage?
12. Draw a CSG tree for a coffee cup.
13. Give an algorithm to draw an image of the surface of a CSG object.
14. For each of the following properties, list the solid representations (voxels, octrees, BSPs, CGS) that provide it best and worst: a) high accuracy, b) conciseness, c) guaranteed validity, d) efficient boolean operations, e) efficient display.
`;export{e as attributes,t as markdown};

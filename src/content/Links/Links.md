# Documentation

## JavaScript
JavaScript (JS), the primary language students will use in this course, is a highly-flexible, interpreted scripting language and is well-known for powering the front-end infrastructure of the Web. The JavaScript language is prototype-based, multi-paradigm, single-threaded, and dynamic; it supports object-oriented, imperative, and declarative (e.g. functional programming) programming styles.

Because of its widespread use, the specifications for JavaScript, known as the ECMAScript specifications, continue to improve and alter with time. The official resource for JavaScript documentation in this course are Mozilla's [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Students who are unfamiliar language might also find MDN's [JavaScript examples](https://www.w3schools.com/js/js_examples.asp) helpful.

As with any language, poor JavaScript style can make code hard to read and can even introduce bugs. For this course, we recommend the [Airbnb JS Style Guide](https://github.com/airbnb/javascript), but students may conform to any modern ES6+ styling standards. As an aside, it is recommended that all students read through Airbnb JS Style Guide to pick up on useful JavaScript shorthands, such as Object deconstruction.

## OpenGL
[OpenGL](https://www.opengl.org/documentation/) is an open-source API that allows application developers to communicate with graphics acceleration hardware such as the GPU. In particular, OpenGL specification describes an abstract API for drawing 2D and 3D graphics, and it is designed to be implemented mostly or entirely in hardware.

Part of the OpenGL specification is the [OpenGL Shading Language (GLSL)](http://docs.gl/sl4/acos). GLSL is a C/C++ flavored programming language and is used to write simple shaders that execute directly on the GPU.

Following increasing demands for hardware-accelerated graphics content on the Web, the Google Chrome team (subsequently followed by the other major browser developers) adapted the native-based OpenGL API into the browser-based [WebGL JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API). The latest major release of WebGL, WebGL 2.0, exposes the OpenGL ES 3.0 API, and allows website developers to include GPU-accelerated rendering, physics, image processing, and other effects in HTML5 canvas elements. One of the most appealing features of WebGL is that it ensures cross-browser and cross-platform support for WebGL-based graphics project.

## ThreeJS
Although the WebGL API makes web-based graphics possible, the API is relatively inaccessible to the general application developer who has no industry or graduate experience in low-level graphics programming. This is where [ThreeJS](https://threejs.org/), as well as other WebGL frameworks, come in.

ThreeJS is a [well-documented](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) open-sourced JavaScript library that integrates with WebGL and provides hundreds of useful graphics primitives to the application developer. In this class, ThreeJS provides the backbone for our 3D assignment frameworks, and it is often used by students to build their final projects. For a showcase of what ThreeJS can do, visit the project's [examples page](https://threejs.org/examples/#webgl_geometries).

# Tools
## JavaScript Editor
Because JavaScript assignments in this course are compiled just-in-time by the web-browser and executed therein, we recommend that students use relatively lightweight IDEs or code editors to compose their assignment solutions. While any editor (even a simple text editor) is fine, students in previous iterations of this course have favored Microsoft's [Visual Studio Code](https://code.visualstudio.com/) (NB: this is **not** the same as *Visual Studio*, a professional-class IDE), GitHub's JavaScript-based [Atom](https://atom.io/), and the lightweight [Sublime Text](https://www.sublimetext.com/).

Both Visual Studio Code and Atom are feature-rich and have fantastic package support; however, they suffer in performance and occasionally crash. Conversely, Sublime is blazing fast and fairly reliable; however, its package management is atrocious, and as of Sublime Text 3.0, vanilla Sublime is not provide many features beyond syntax-highlighting.

## Browser DevTools
All major browsers contain a robust set of developer tools, often referred to as DevTools. In Chromium based browsers, the DevTools can be accessed by left-clicking an HTML element in the browser window and selecting "Inspect" in the dropdown. The DevTools panel can also be opened through the keyboard shortcut `Command + Option + C` on Mac, and `Command + Shift + C` on Windows.

The most useful DevTools for students will be the Console pane and the Sources pane. One common strategy for debugging assignments in this class is to print trace statements out to the Console via `console.log()`. A second and more-productive debugging strategy is to set breakpoints in the code via the `breakpoint` keyword, which opens the browser's JavaScript debugger in the Sources pane when executed. It is recommended that students use this second debugging strategy over the first in this class.

We highly recommend that students read through [Google's guide](https://developers.google.com/web/tools/chrome-devtools/javascript) on debugging JavaScript through Chrome DevTools.

## ThreeJS Editor
The ThreeJS project recently released a [browser-based editor](https://threejs.org/editor/) to build ThreeJS scenes through a visual interface, rather than directly through code. Students exploring ideas for their final project may find this tool useful for quickly demoing and playing around with ideas, before committing them to code.

# Tutorials
## JavaScript and Websites
For JavaScript beginners, the full language documentation is generally not a great place to start. Thankfully, there are fantastic online resources for learning web-development. In particular, we recommend the [Mozilla JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), as well as W3Schools' guides on [JavaScript](https://www.w3schools.com/js/default.asp), [HTML](https://www.w3schools.com/html/default.asp), and [CSS](https://www.w3schools.com/css/default.asp).

Web-development is outside the scope of this course, however students who wish to learn more about the field after finishing the above tutorials are encouraged to follow them up with the [ReactJS tutorial](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial).

## ThreeJS and Shaders
Because ThreeJS provides myriad features, and yet dictates no structure for organizing them, many developers find that the library has a steep learning curve. During previous iterations of this course, students have found it productive to peruse our 3D assignment framework code, read through the [ThreeJS docs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene), view source code for the [ThreeJS examples](https://threejs.org/examples/#webgl_geometries), as well as watch [videos](https://www.youtube.com/watch?v=ABV1mK1CGOY) and read other third-party ThreeJS tutorials in order to acclimate themselves with the library. The [threejsfundamentals](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html) tutorial, in particular, is fantastic and highly recommended.

Unfortunately, while shading languages like GLSL have incredible expressive capacity, they also tend to have steep learning curves. One possible resource for learning GLSL is the [Learn OpenGL tutorial](https://learnopengl.com/Getting-started/Shaders). We also recommend the wonderful, aesthetically pleasing, and interactive [Book of Shaders](https://thebookofshaders.com/), from which past students have occasionally drawn to inspire their art projects.

# Additional Readings
The field of Computer Graphics is as expansive as it is fascinating. Try as we might, there is no way to squeeze the entire field into a semester-long course. Thus, as a supplement to the lecture slides, precept slides, and official course readings, we recommend the following webpages for students' perusal. These readings are not necessary to perform well in this course, but rather are provided for the convenience of the eager and enthusiastic student. Additionally, students may find these readings helpful in clarifying complicated, confusing, or complex topics from class.

This is a growing list, so expect more links to appear here as the semester continues.

## Color theory
* [Color Model](https://en.wikipedia.org/wiki/Color_model)
* [Colors and Computer Graphics](https://en.wikipedia.org/wiki/Comparison_of_color_models_in_computer_graphics)

## Image Processing
* [Alpha Compositing](https://en.wikipedia.org/wiki/Alpha_compositing)
* [Kernels and Convolution](https://en.wikipedia.org/wiki/Kernel_(image_processing))
* [Histogram Equalization Example](https://en.wikipedia.org/wiki/Histogram_equalization#Small_image)
* [Histogram Matching](https://en.wikipedia.org/wiki/Histogram_matching)

## Meshes & Modeling
* [Polygon Mesh](https://en.wikipedia.org/wiki/Polygon_mesh)

## Simulation
* [Approximating Newtonian Mechanics (Störmer–Verlet)](https://en.wikipedia.org/wiki/Verlet_integration)

# Final Project Hall of Fame
A selection of the best final projects from previous years. Links to the demos and source code for these projects are available below for students' collective inspiration, interest, and entertainment.

## Spring 2019 Selection

* [ColoRing](https://beckybarber18.github.io/coloring/): Color the arena faster than your opponent can before time runs out in this two-player retro arcade game ([src](https://github.com/beckybarber18/coloring)) --- Bianca Catoto, Ilene E, and Rebecca Barber

* [Color Maze](https://kattusite.github.io/colormaze/): Collect artifacts and unlock graphical gameplay in this maze of hidden dimensions ([src](https://github.com/Kattusite/colormaze)) --- William Sweeny, Kevin Jeon, and Aditya Kohli

* [Collideoscope](https://collideoscope.github.io): How far can you make it in this extremely addicting kaleidoscope infinite runner? ([src](https://github.com/ewilden/collideoscope)) --- Noah Moss and Evan Wildenhain

* [CTRL-Z](https://qdonohue.github.io/ctrlz/): Defend your fort while being sent back in time as you accumulate damage in this two-player arcade game ([src](https://github.com/qdonohue/ctrlz)) --- Quinn Donohue, Cody Sedillo, and Victor Riveros


* [Death Star Assault](https://ajayp15.github.io/DeathStarAssault/): Relive final battle from the classic 1977 film *Star Wars* through the X-Wing of Luke Skywalker in this arcade game ([src](https://github.com/ajayp15/DeathStarAssault/)) --- Ajay Penmatcha and Antony Toron

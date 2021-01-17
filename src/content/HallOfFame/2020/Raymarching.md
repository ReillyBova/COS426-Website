---
# Project Name
title: "Raymarching with Signed Distance Fields"
# Project Authors
authors: "Jake Waksbaum, Benjamin Huang, Anvay Grover"
# Project Year
year: 2020
# Project Image
imageName: "raymarching"
# Demo url
demoURL: "https://jbaum98.github.io/cos426_final_project/editor"
# Repo url
repoURL: "https://git.sr.ht/~jakewaksbaum/shader_visualizer/"
# Writeup url
writeupURL: "https://jbaum98.github.io/cos426_final_project/writeup.pdf"
# A value that determines project visibility. The higher the number, the closer it will appear to the top
# For instance, the project that wins "Best Overall Award" should be given the highest visibilityRank
visibilityRank: 2
# Awards
instructorAwards: "🧠 Technical Achievement Award"
instructorMentions: "🏛️ Hall of Fame"
studentAwards: "Technical Achievement Award"
studentMentions: ""
---
We explore an alternative technique to raytracing for rendering 3D scenes called Signed Distance Field Raymarching that represents the entire scene using a signed distance field (SDF) that maps each point in space to the distance to the nearest object. We are able to implement comparable features to the raytracer in assignment 3 at near real-time frame rates (10-30 FPS). We also render a scene that would be infeasible to produce with raytracing due to its recursive nature.

We highlight the composable nature of the SDF representation by building an editor that allows users to build complex shapes by composing primitives with transformations.

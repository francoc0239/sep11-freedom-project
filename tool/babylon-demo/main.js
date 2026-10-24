import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from '@babylonjs/core';

// Get the canvas element
const canvas = document.getElementById("renderCanvas");

// Generate the BABYLON 3D engine
const engine = new Engine(canvas, true);

// Create the scene
const createScene = function () {
    const scene = new Scene(engine);

    // This creates and positions a free camera
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Built-in 'sphere' shape
    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
    sphere.position.y = 1;

    // Built-in 'ground' shape
    MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    return scene;
};

const scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});


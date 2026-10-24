// canvas
const canvas = document.getElementById('renderCanvas')

// crate a babyLon js engine
const engine = new BABYLON.Engine(canvas,true);

function createScene(){
    //scene
    const scene = new BABYLON.Scene(engine);
    //cam (there are different types)
    const camerca = new BABYLON.FreeCamera('apple', new BABYLON.Vector3(0,0,0), scene) 


    //light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vecotr3(0,1,0), scene)

return scene
}

// create our scene
const scene = createScene();


engine.runRenderLoop(() => {
    scene.render();

});


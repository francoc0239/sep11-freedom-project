# Tool Learning Log

## Tool: **Babylon**

## Project: **Shrilie party**

---

### 10/24/26:
* Before starting actually coding I was curious what It could actually do [Babylon](https://www.babylonjs.com/)
    * Babylon allows your idea of a video game or scene come to life using 3d and lighing
    * Babylon also allows you to have drawings and change them into 3d 
    * Babylon also has a lot of texture and allows you to change whatever you want with an editor 
* One challenge I had was actually setting everything up because I never used it
    * But in order to fix this I used google to helpe me
* In order to understand, I started with the basics. I used this webstie to help me [First Steps](https://doc.babylonjs.com/journey/theFirstStep) 
    * the first thing i wanted to learn was how to use cameras 
    here is the code I got 
    ```js
  camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    ```
    * What this is saying is that the cameca is a Free camera where you can move it. the numbers are where you first want to start.
    * `<canvas id="renderCanvas"></canvas>` This renders a starting canvas for your objects. 
    * `const canvas = document.getElementById('renderCanvas')` this renders a canvas and allows it to be read in js 
    ```js
    function createScene(){
    //scene
    const scene = new BABYLON.Scene(engine);
    //cam (there are different types)
    const camerca = new BABYLON.FreeCamera('apple', new BABYLON.Vector3(0,1,0), scene) }

    ```
    * What this code is saying is that it makes a scene work and the camera is created so its free to move but the camera starts from the top. 
    * `'apple'` is the name of the camera were using
    ```js
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vecotr3(0,1,0), scene)
    ```
    * what this code is saying is that the light is called 'light' and it starts from the top view.
    ```js
    engine.runRenderLoop(() => {
    scene.render();}
    ``` 
    * This actually renders the code so you can see eveything.

    * this is the full code 

```js 
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


```
* In order to learn all of this I used [this video](https://youtu.be/eQH4273wy7w?is=jNAuGI6tOlqUNR9E). The video was really helpful when starting





### X/X/XX:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->

import { Engine } from "piton-engine";

/*GET CANVAS*/

const example1:Function = ()=>{
    const engine:Engine = new Engine({});
    const canvas:HTMLCanvasElement = engine.getCanvas();
    console.log(canvas);
};

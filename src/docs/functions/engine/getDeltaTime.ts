import { Engine } from "piton-engine";

/*GET DELTA TIME*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    const deltaTime:number = engine.getDeltaTime();
    console.log(deltaTime);
};
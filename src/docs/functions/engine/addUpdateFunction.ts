import { Engine } from "piton-engine";

/*ADD UPDATE FUNCTION*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    engine.addUpdateFunction(update.bind(this));
    function update(){
        console.log("UPDATE RUNNING!")
    };
};
example1();
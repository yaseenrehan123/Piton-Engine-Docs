import { Engine } from "piton-engine";

/*ADD START FUNCTION*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    engine.addStartFunction(start.bind(this));
    function start(){
        console.log("START RUNNING!")
    };
};
example1();
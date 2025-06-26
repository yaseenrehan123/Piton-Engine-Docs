import { Engine } from "piton-engine";

/*REMOVE UPDATE FUNCTION*/

const example1: Function = () => {
    const engine: Engine = new Engine({});
    let counter: number = 0;
    let delayTime: number = 5;
    const boundUpdate = update.bind(this);
    engine.addUpdateFunction(boundUpdate);
    function update() {
        console.log("UPDATE RUNNING");
        const deltaTime: number = engine.getDeltaTime();
        if (counter < delayTime) {
            counter += deltaTime;
        }
        else{
            console.log("COUNTER: " , Math.floor(counter));
            engine.removeUpdateFunction(boundUpdate); //TERMINATE UPDATE
        }
    };
};
example1();
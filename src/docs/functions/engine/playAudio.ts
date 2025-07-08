import { Engine } from "piton-engine";

/*PLAY AUDIO*/

const example1: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            audio_JSON_path: "data/audiosData.json"
        }
    });
    engine.addStartFunction(start.bind(this));
    function start() {
        engine.addOnDOMInteractionFunction(() => { //PLAYS WHEN FIRST CLICK ON DOM HAPPENS
            engine.playAudio({
                key: "healthPotion",
                //loop: false,
                //volume:1
            });
        });

    }
    //NOTE: YOU CANT PLAY AN AUDIO UNTIL YOU HAVE INTERACTED WITH THE DOM ONCE
}
example1();
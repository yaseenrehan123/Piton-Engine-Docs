import { Engine } from "piton-engine";

/*GET AUDIO*/

const example1: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            audio_JSON_path: '/data/audiosData.json'
        }
    });
    const input = engine.getInput();
    engine.addUpdateFunction(update.bind(this));
    function update() {
        if (input.getJustPressed()) {
            const potionAudio: HTMLAudioElement = engine.getAudio('healthPotion');
            if (!potionAudio) throw new Error("AUDIO NOT FOUND!");
            potionAudio.play();
        }

    }
};

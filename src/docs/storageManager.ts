import { Alignment, Button, Engine, EntityTemplates, Text } from "piton-engine";
import type { EntityId, EntityManager } from "piton-engine";

/*STORAGE MANAGER*/

/*FUNCTIONS*/

/*
saveData() //SAVES A TYPE OF DATA WITH KEY
getData() //RETRIEVES DATA
removeData() //REMOVES A DATA
removeAllData() //REMOVES ALL DATA
*/

/*EXAMPLES*/

/*EXAMPLE 1*/


const example1: Function = () => {
    const engine: Engine = new Engine();
    const em: EntityManager = engine.getEntityManager();
    const et: EntityTemplates = new EntityTemplates(engine);
    const storageManager = engine.getStorageManager();
    const sceneId: EntityId = et.createSceneEntity('scene');
    const id: EntityId = et.createRectButtonEntity(200, 100, '', sceneId);
    em.addComponent(id, Alignment, new Alignment({
        alignmentHorizontal: 'center',
        alignmentVertical: 'middle'
    }));
    const textId: EntityId = engine.getChildWithComponent(id, Text, true);
    const text = em.getComponent(textId, Text, true);
    const button = em.getComponent(id, Button, true);
    let count: number = storageManager.getData("count", 0); //KEY , DEFAULT VALUE
    text.content = count.toString();
    button.onJustPressed = () => {
        count++;
        storageManager.saveData("count", count);
        text.content = count.toString();
    };
    //STEPS:
    //1) GET THE STORAGE MANAGER
    //2) GET THE VALUE , PASS IN A DEFAULT VALUE , FOR FIRST TIME IT WILL USE THE DEFAULT VALUE BECAUSE NOTHING IS SET YET
    //3) SAVE A NEW VALUE
    //3) WHEN A NEW VALUE IS SAVED , IT SHALL USE THAT
};


const example2: Function = () => {
    type SettingsData = { //TYPE IS OPTIONAL, IT'S JUST FOR EXTRA TYPESAFETY
        music: boolean,
        sfx: boolean
    }
    const engine: Engine = new Engine({
        resources: {
            jsons: {
                settingsData: "data/settingsData.json"
            }
        }
    });
    const em: EntityManager = engine.getEntityManager();
    const et: EntityTemplates = new EntityTemplates(engine);
    const storageManager = engine.getStorageManager();
    const sceneId: EntityId = et.createSceneEntity('scene');
    let settingsData: SettingsData;
    engine.addStartFunction(start.bind(this));
    function start() {
        const defaultSettingsData: SettingsData = engine.getJSON("settingsData");
        settingsData = storageManager.getData("settingsData", defaultSettingsData);
        initMusicBtn();
        initSfxBtn();
    };
    function initMusicBtn() {
        const id: EntityId = et.createRectButtonEntity(200, 100, '', sceneId);
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'middle',
            offset: { x: -150, y: 0 }
        }));
        const textId: EntityId = engine.getChildWithComponent(id, Text, true);
        const text = em.getComponent(textId, Text, true);
        const button = em.getComponent(id, Button, true);
        text.content = "MUSIC: " + settingsData.music;
        button.onJustPressed = () => {
            settingsData.music = !settingsData.music;
            text.content = "MUSIC: " + settingsData.music;
            storageManager.saveData("settingsData", settingsData);
        }
    }
    function initSfxBtn() {
        const id: EntityId = et.createRectButtonEntity(200, 100, '', sceneId);
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'middle',
            offset: { x: 150, y: 0 }
        }));
        const textId: EntityId = engine.getChildWithComponent(id, Text, true);
        const text = em.getComponent(textId, Text, true);
        const button = em.getComponent(id, Button, true);
        text.content = "SFX: " + settingsData.sfx;
        button.onJustPressed = () => {
            settingsData.sfx = !settingsData.sfx;
            text.content = "SFX: " + settingsData.sfx;
            storageManager.saveData("settingsData", settingsData);
        }
    }
    //STEPS:
    //1) GET THE DEFAULT JSON USING 'Engine.getJSON()' WHICH IS USED TO GET STATIC JSON DATA.
    //2) NOW IN A VAR USE STORAGEMANAGER TO GET THE DATA WITH THE DEFAULT DATA AS DEFAULT VALUE
};

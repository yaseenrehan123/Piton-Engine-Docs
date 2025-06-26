import { Alignment, Engine,EntityTemplates, } from "piton-engine";
import type {EntityId,EntityManager } from "piton-engine";

/*CREATE RECT BUTTON*/

const example1:Function =()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start(){
        initScene();
        initRectButton();
    };
    function initScene(){
        const id:EntityId = entityTemplates.createSceneEntity('scene');
    };
    function initRectButton(){
        const sceneId:EntityId | null = engine.getSceneByName('scene');
        if(sceneId === null) throw new Error("SCENE ID NOT FOUND! KEY: 'scene'");
        const id:EntityId = entityTemplates.createRectButtonEntity(200,100,'RECT BUTTON',sceneId);
        em.addComponent(id,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));
    };
};

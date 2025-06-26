import { Alignment, Engine,EntityTemplates, } from "piton-engine";
import type {EntityId,EntityManager } from "piton-engine";

/*CREATE TEXTURED BUTTON*/

const example1:Function =()=>{
    const engine:Engine = new Engine({
        resources:{
            images_JSON_path:'/data/imagesData.json'
        }
    });
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start(){
        initScene();
        initTexturedButton();
    };
    function initScene(){
        const id:EntityId = entityTemplates.createSceneEntity('scene');
    };
    function initTexturedButton(){
        const sceneId:EntityId | null = engine.getSceneByName('scene');
        if(sceneId === null) throw new Error("SCENE ID NOT FOUND! KEY: 'scene'");
        const img:HTMLImageElement = engine.getImage('rightBtn');
        const id:EntityId = entityTemplates.createTexturedButtonEntity(img,256,256,sceneId);
        em.addComponent(id,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));
    };
};


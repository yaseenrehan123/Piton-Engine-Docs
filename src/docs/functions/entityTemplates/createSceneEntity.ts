import { Engine , EntityTemplates, Scene} from "piton-engine";
import type {EntityId , EntityManager } from "piton-engine";

/*CREATE SCENE ENTITY*/

const example1:Function =()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const id:EntityId = entityTemplates.createSceneEntity('scene');
    const scene = em.getComponent(id,Scene);
    if(scene){
        scene.onLoad =()=>{
            console.log("SCENE LOADED!");
        };
        scene.onUnload =()=>{
            console.log("SCENE UNLOADED!");
        }
    };
    engine.loadScene(id);
    console.log("ID: ",id,"COMPONENTS: ",em.getAllComponents(id));
};

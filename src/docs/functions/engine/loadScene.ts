import { Children, Engine,EntityTemplates, Parent } from "piton-engine"
import type { EntityId,EntityManager } from "piton-engine"

/*LOAD SCENE*/

const example1:Function = ()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const et:EntityTemplates = new EntityTemplates(engine);
    const id:EntityId = et.createSceneEntity('scene');
    engine.loadScene(id);
};
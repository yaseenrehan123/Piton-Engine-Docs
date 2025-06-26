import { Engine , EntityTemplates} from "piton-engine";
import type {EntityId , EntityManager } from "piton-engine";

/*CREATE EMPTY ENTITY*/

const example1:Function =()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const id:EntityId = entityTemplates.createEmptyEntity();
    console.log("ID: ",id,"COMPONENTS: ",em.getAllComponents(id));
};

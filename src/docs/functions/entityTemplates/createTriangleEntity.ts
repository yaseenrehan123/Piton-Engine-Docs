import { Engine , EntityTemplates, Transform} from "piton-engine";
import type {EntityId , EntityManager } from "piton-engine";

/*CREATE TRIANGLE ENTITY*/

const example1:Function =()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const id:EntityId = entityTemplates.createTriangleEntity(
        {x:-200,y:0},
        {x:50,y:200},
        {x:300,y:0}
    );
    const transform = em.getComponent(id,Transform);
    if(transform){
        transform.globalPosition.position = {x:300,y:300};
    }
    console.log("ID: ",id,"COMPONENTS: ",em.getAllComponents(id));
};

import { Children, Engine,EntityTemplates, Parent } from "piton-engine"
import type { EntityId,EntityManager } from "piton-engine"
/*ADD PARENT*/

/*IF YOU ARE USING A TEMPLATES YOU COULD JUST PASS THE PARENT ENTITY DIRECTLY AND DONT NEED TO CALL IT*/

/*
EACH ENTITY HAS A 'Parent' AND 'Children' COMPONENT *EXCEPT SCENES WHICH ONLY HAVE A CHILDREN COMPONENT* 
THE 'addParent()' CHANGES THE BOTH 'Parent' AND 'Children' COMPONENT OF THE ENTITIES INVOLVING.
PARENT ENTITY -> CHILDREN -> ADDS NEW CHILD ENTITY
CHILD ENTITY -> PARENT -> CHANGES PARENT COMPONENT VALUE TO PARENT ENTITY
*/

const example1:Function = ()=>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const et:EntityTemplates = new EntityTemplates(engine);
    const parentId:EntityId = et.createEmptyEntity();
    const childId:EntityId = et.createEmptyEntity(/*parentId*/); //WORKS AS WELL!
    engine.addParent(childId,parentId);
    console.log("PARENT ID CHILDREN COMPONENT: " , em.getComponent(parentId,Children));
    console.log("CHILD ID PARENT COMPONENT: " ,em.getComponent(childId,Parent));
}
import { Children, Engine,EntityTemplates, Transform } from "piton-engine";
import type { EntityId,EntityManager } from "piton-engine";

/*REMOVE ENTITY WITH CLEANUP*/

/*WHAT DOES 'removeEntityWithCleanup()' DO?*/

/*
IT BASICALLY JUST DOES THE SAME AS 'EntityManager.removeEntity(id);'
BUT ALSO TAKING CARE OF SOME COMPONENTS.
BASICALLY THINK OF IT AS A FN WHICH PERFORMS EXTRA FUNCTIONS BEFORE REMOVING AN ENTITY
*/

const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const id1:EntityId = entityTemplates.createEmptyEntity();
        const id2:EntityId = entityTemplates.createEmptyEntity(id1);
        //OVERALL ALL GOOD, WE CREATE TWO ENTITIES HAVE ONE PARENTED TO THE OTHER
        
        //NOW LET'S GET THE CHILDREN COMPONENT OF ID 1
        const children = em.getComponent(id1,Children,true);
        children.value.forEach((child:EntityId)=>{
            console.log("BEFORE REMOVAL: ",child)
            const transform = em.getComponent(child,Transform);
        });

        //NOW LET'S REMOVE ENTITY2
        em.removeEntity(id2);
        //NOW IF WE TRY TO ACCESS THE CHILDREN COMPONENT OF ID1
        children.value.forEach((child:EntityId)=>{
            console.log("AFTER REMOVAL: ",child)
            const transform = em.getComponent(child,Transform);
        });
    }
    //WE GET AN ERROR!

    //NOW THIS IS BECAUSE WE REMOVED ENTITY 2 FROM SYSTEM, BUT ENTITY 1 STILL HAS THAT ID IN IT'S CHILDREN COMPONENT
    //SO WE ARE ESSENTIALLY USING getComponent ON AN ENTITY THAT DOES NOT EXIST ANYMORE! RESULTING IN ERROR
}
//example1();

/*NOW YOU UNDERSTAND WHAT THE PROBLEM IS, LET'S UNDERSTAND WHAT 'removeEntityWithCleanup' DOES TO SOLVE IT*/

const example2:Function = () =>{
    const engine: Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const id1:EntityId = entityTemplates.createEmptyEntity();
        const id2:EntityId = entityTemplates.createEmptyEntity(id1);
        const id3:EntityId = entityTemplates.createEmptyEntity(id1);

        const children = em.getComponent(id1,Children,true);

        engine.removeEntityWithCleanup(id2);
        //NOW IF WE TRY TO ACCESS THE CHILDREN COMPONENT OF ID1
        children.value.forEach((child:EntityId)=>{
            console.log("AFTER REMOVAL: ",child)
            const transform = em.getComponent(child,Transform);
        });
    };
    //AS YOU CAN SEE HERE, HERE IT CONSOLES.LOG AFTER REMOVAL:  2
    //NOT TO BE MISTAKED HERE, 2 IS ID OF ENTITY ID 3 AS THEY GO FROM 0,1,2
    
    //WHAT HAPPEND IS BEFORE REMOVING AN ENTITY, IT MODIFIED THE CHILDREN COMPONENT TO REMOVE ITSELF,
    //  HENCE REMOVING DEAD REFRENCES
};
//example2();

const example3:Function = () =>{
    const engine: Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const id1:EntityId = entityTemplates.createEmptyEntity();
        const id2:EntityId = entityTemplates.createEmptyEntity(id1);
        const id3:EntityId = entityTemplates.createEmptyEntity(id1);

        const children = em.getComponent(id1,Children,true);

        engine.removeEntityWithCleanup(id1);
        console.log("ENTITY 2 EXISTS: ",em.hasEntity(id2));
        console.log("ENTITY 2 EXISTS: ",em.hasEntity(id3));
    };
    // HERE AS YOU CAN SEE, ENTITY 2 AND 3 DOES NOT EXIST, NOW YOU MAY WONDER WHY?
    //NORMAL EntityManager.removeEntity() DOESNT DELETE CHILDREN, IT JUST REMOVES THE ID, SO CHILDREN STILL EXISTS, 
    // AND IN THEIR 'Parent' COMPONENT HAS REFRENCE TO PARENT ID.
    //IT MAKES IT SO WHEN A PARENT GET'S DELETED IT DESTROYS THE WHOLE CHAIN OF CHILDRENS AS WELL
};
//example3();

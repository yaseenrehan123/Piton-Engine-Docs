import { Alignment, Children, Engine, EntityActive, Text, Transform } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*CHILDREN COMPONENT*/

/*
export class Children{// increment through code
    public value:EntityId[] = []; //TYPE:Array<EntityId> , A ARRAY FOR ENTITY ID'S
};
*/

/*
IN CHILDREN COMPONENT THERE ARE NO OPTIONS
BECAUSE THIS COMPONENT WILL MOSTLY BE MODIFIED THROUGH 
CODE
*/

/*NOW YOU CAN USE THIS LIB ANY WAY YOU WANT , BUT THERE ARE SOME FEATURES WHICH COULD MAKE IT MORE EASIER TO WORK WITH*/

/*BAD PRACTICES*/ /*NOT RECOMMENDED!*/

/*
const badPractice: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const entityA: EntityId = entityTemplates.createEmptyEntity();
    const entityB: EntityId = entityTemplates.createEmptyEntity();
    const entityAChildren = em.getComponent(entityA, Children);
    if (entityAChildren) {
        entityAChildren.value.push(entityB); //NOT RECOMMENDED
    };
};
*/

/*WE HIGHLY RECOMMEND USING addParent OR PASSING PARENTID ID entityTemplates
FOR MORE INFO CHECK EXAMPLE#1-2 IN parent.ts
*/

/*EXAMPLES*/ /*UNCOMMEND AS YOU NEED*/

/*EXAMPLE 1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates = new EntityTemplates(engine);
    const sceneId: EntityId = entityTemplates.createSceneEntity('mainMenu');
    const rectButtonId = entityTemplates.createRectButtonEntity(200, 100, 'Button', sceneId);
    em.addComponent(rectButtonId, Alignment, new Alignment({
        alignmentHorizontal: 'center',
        alignmentVertical: 'middle'
    }));
    // RECTBUTTON HAS A CHILD WHICH IS IT'S TEXT
    //GOAL: GET THE CHILD AND CHANGE IT;S ALIGNMENT
    //const rectButtonChildren = em.getComponent(rectButtonId, Children);
    //if (rectButtonChildren) {
    //    rectButtonChildren.value.forEach((child: EntityId) => {
    //        if (em.getComponent(child, Text)) { //MAKE SURE IT HAS TEXT
    //            const alignment = em.getComponent(child, Alignment);
    //            if (alignment) {
    //               alignment.alignmentHorizontal = 'left';
    //                //alignment.alignmentVertical = 'top'
    //            }
    //
    //        }
    //    });
    //};

    //THIS IS ACCEPTABLE BUT THERE ARE BUILT IN FUNCTIONS TO SIMPLIFY THE PROCESS
    const textId: EntityId | null = engine.getChildWithComponent(rectButtonId, Text);
    console.log(textId);
    if (textId) {
        const alignment = em.getComponent(textId, Alignment);
        if (alignment) {
            alignment.alignmentHorizontal = 'left';
        }

    };

};
*/


/*EXAMPLE 2*/

/*
const example2: Function = () => {
    class Ui { }//TAG COMPONENT
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const sceneId: EntityId = entityTemplates.createSceneEntity('scene');
    const buttonA = entityTemplates.createRectButtonEntity(100, 100, 'ButtonA', sceneId);
    const transformA = em.getComponent(buttonA, Transform);
    if (transformA) {
        transformA.globalPosition.position = { x: 200, y: 100 }
    };
    em.addComponent(buttonA, Ui, new Ui());
    const buttonB = entityTemplates.createRectButtonEntity(100, 100, 'ButtonB', sceneId);
    const transformB = em.getComponent(buttonB, Transform);
    if (transformB) {
        transformB.globalPosition.position = { x: 250, y: 250 }
    }
    em.addComponent(buttonB, Ui, new Ui());
    const buttonC = entityTemplates.createRectButtonEntity(100, 100, 'ButtonC', sceneId);
    const transformC = em.getComponent(buttonC, Transform);
    if (transformC) {
        transformC.globalPosition.position = { x: 500, y: 500 }
    };
    em.addComponent(buttonC, Ui, new Ui());
    const uiInScene: EntityId[] = engine.getChildrenWithComponent(sceneId, Ui);//GET ALL UI IN A PARTICULAR SCENE
    uiInScene.forEach((id: EntityId) => {
        const entityActive = em.getComponent(id, EntityActive);
        if (entityActive) {
            entityActive.value = false; //DISABLE ALL UI IN A SCENE
        }
    });
    // IN THIS EXAMPLE GETCHILDRENWITHCOMPONENT CAN BE USEFUL TO GET CHILDREN WITH A SPECIFIC COMPONENT.
    // THINK OF IT LIKE A QUERY BUT ONLY FOR CHILDRENS , IF WE DID A QUERY HERE IT WOULD INCLUDE ALL UI ELEMENTS
    // EVEN FROM OTHER SCENES!
};
*/

import { Engine, Parent } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*PARENT COMPONENT*/

/*
export class Parent{
    public value:EntityId | null = null; //TYPE:EntityId / null , EITHER PARENT IS NULL OR A ENTITY ID
    constructor(options:ParentOptions = {}){
        this.value = options.value ?? null;
    }
};
*/

/*PARENT OPTIONS*/

/*
export type ParentOptions = {
    value?: EntityId //OPTIONAL , OPTION FOR VALUE PROPERTY
};
*/

/*THOUGH YOU COULD ASSIGN PARENT DIRECTLY USING THE COMPONENT LIKE:*/

/*
const badPractice: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const entityA: EntityId = entityTemplates.createEmptyEntity();
    const entityB: EntityId = entityTemplates.createEmptyEntity();
    const entityBParent = em.getComponent(entityB, Parent);
    if (entityBParent) {
        entityBParent.value = entityA; //NOT RECOMMENDED
    };
};
*/

/*
THIS APRROACH HAS TWO CLEAR ISSUES
1) WE ALSO WOULD NEED TO MODIFY THE 'CHILDREN' COMPONENT MANUALLY,
2) IT'S TOO LONG.
*/

/*FOR BETTER WAYS CHECK EXAMPLES BELOW!*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE 1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const entityA: EntityId = entityTemplates.createEmptyEntity();
    const entityB: EntityId = entityTemplates.createEmptyEntity();
    engine.addParent(entityB, entityA) //USE THE ADDPARENT FN 
    console.log(em.getComponent(entityB, Parent)); //OUTPUT: 0(entityA's Id)
};
*/

/*EXAMPLE 2*/

/*
const example2: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const entityA: EntityId = entityTemplates.createEmptyEntity();
    const entityB: EntityId = entityTemplates.createEmptyEntity(entityA);//ASSIGN UPON CREATION
    console.log(em.getComponent(entityB, Parent));
    //ALL ENTITYTEMPLATES FUNCTIONS HAVE A FIELD TO QUICKLY ASSIGN PARENT IF YOU ARE
    //CREATING ENTITIES USING TEMPLATES.
};
*/

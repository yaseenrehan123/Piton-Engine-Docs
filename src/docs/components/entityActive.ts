import { Alignment, Button, Engine, EntityActive, EntityTemplates, Rectangle, Shape, Sprite, Text, Transform } from "piton-engine";
import type { EntityId, EntityManager } from "piton-engine";

/*ENTITYACTIVE COMPONENT*/

/*ENTITYACTIVE COMPONENT*/

/*
export class EntityActive {
    public value: boolean = true;        // TYPE: boolean - Whether the entity is currently active in the engine.
                                         // If false, the entity and its components are ignored by most systems.

    constructor(options: EntityActiveOptions = {}) {
        this.value = options.value ?? true;
    }
};
*/

/*ENTITYACTIVE OPTIONS*/

/*
export type EntityActiveOptions = {
    value?: boolean // OPTIONAL - Option for 'value' property, defaults to true (active).
};
*/

/*TO BE PROCCESSED ENTITY AND AND ALL IT'S PaARENTS MUST HAVE ENTITYACTIVE COMPONENT, AND SET TO TRUE*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE 1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates = new EntityTemplates(engine);
    const parentId: EntityId = entityTemplates.createEmptyEntity(); //BASIC ENTITY WITH NO COMPONENTS
    const parentEntityActive = em.getComponent(parentId, EntityActive);
    if (parentEntityActive) {
        console.log("PARENT ACTIVE TURNED OFF!")
        parentEntityActive.value = false;
    }
    const childId: EntityId = entityTemplates.createRectangleEntity(100, 100, parentId); //ASSIGN PARENT
    const childTransform = em.getComponent(childId, Transform);
    if (childTransform) {
        childTransform.globalPosition.position = { x: 300, y: 300 };
    };

    // YOU CANT SEE THE SHAPE BECAUSE IT'S PARENT IS TURNED OFF
};
*/


/*EXAMPLE 2*/

/*
const example2: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            images_JSON_path: '/data/imagesData.json'
        }
    });
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates = new EntityTemplates(engine);
    const sceneId: EntityId = entityTemplates.createSceneEntity('scene');
    let popupId: EntityId | null = null;
    engine.addStartFunction(start.bind(this));
    function start() {
        initEnablePopupBtn();
        initPopup();
    };
    function initEnablePopupBtn() {
        const id = entityTemplates.createRectButtonEntity(200, 100, 'ENABLE POPUP', sceneId);
        //const transform = em.getComponent(id,Transform);
        const shape = em.getComponent(id, Shape);
        const button = em.getComponent(id, Button);
        //if(transform){
        //    transform.globalPosition.position = {x:300,y:200};
        //};
        if (shape) {
            shape.color = 'blue'
            const rect = shape.shape;
            if (rect instanceof Rectangle) {
                rect.rounded = true;
            }
        };
        if (button) {
            button.onJustPressed = () => {
                if (popupId !== null) {
                    const entityActive = em.getComponent(popupId, EntityActive);
                    if (entityActive) {
                        entityActive.value = true;
                    }
                }
            };
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'middle'
        }));
    };
    function initPopup() {
        const id: EntityId = entityTemplates.createRectangleEntity(400, 400, sceneId);
        const shape = em.getComponent(id, Shape);
        const entityActive = em.getComponent(id, EntityActive);
        if (shape) {
            shape.color = 'blue';
            shape.alpha = 0.8;
            shape.layer = 1;
            //shape.active = false;
            const rect = shape.shape;
            if (rect instanceof Rectangle) {
                rect.rounded = true;
                rect.roundedRadius = 20;
            }
        };
        if (entityActive) {
            entityActive.value = false;
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'middle'
        }));
        popupId = id;
        initPopupText(id);
        initDisablePopupBtn(id);
    };
    function initPopupText(parentId: EntityId) {
        const id: EntityId = entityTemplates.createTextEntity('POPUP', parentId);
        const text = em.getComponent(id, Text);
        if (text) {
            text.size = 70;
            text.maxWidth = 500;
            text.layer = 2;
        };
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'top',
            offset: { x: 0, y: 15 }
        }));
    };
    function initDisablePopupBtn(parentId: EntityId) {
        const img: HTMLImageElement = engine.getImage("cancelBtn");
        const id: EntityId = entityTemplates.createTexturedButtonEntity(img, 62, 62, parentId);
        //const transform = em.getComponent(id,Transform);
        const sprite = em.getComponent(id, Sprite);
        const button = em.getComponent(id, Button);
        //if(transform){
        //    transform.globalPosition.position = {x:100,y:100};
        //};
        if (sprite) {
            sprite.layer = 2;
        };
        if (button) {
            //button.showPressArea = true;
            button.layer = 2;
            button.onJustPressed = () => {
                if (popupId !== null) {
                    const entityActive = em.getComponent(popupId, EntityActive);
                    if (entityActive) {
                        entityActive.value = false;
                    }
                }

            }
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'right',
            alignmentVertical: 'top'
        }));
    };
};
*/
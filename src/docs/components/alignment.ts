import { Alignment, Engine, Shape } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*ALIGNMENT COMPONENT*/

/*
AlignmentHorizontal = 'none' | 'left' | 'center' | 'right'
AlignmentVertical = 'none' | 'top' | 'middle' | 'bottom'
*/

/*
export class Alignment{// A component to have a entity always fixedly aligned.
    public alignmentHorizontal:AlignmentHorizontal = 'none';//Horizontal Alignment
    public alignmentVertical:AlignmentVertical = 'none';//Vertical Alignment
    public offset:Vector2 = {x:0,y:0};//Offset from aligned position
    constructor(options:AlignmentOptions){
        this.alignmentHorizontal = options.alignmentHorizontal ?? 'none';
        this.alignmentVertical = options.alignmentVertical ?? 'none';
        this.offset = options.offset ?? {x:0,y:0};
    }
};
*/

/*ALIGNMENT OPTIONS*/

/*
export type AlignmentOptions ={
    alignmentHorizontal?:AlignmentHorizontal, //OPTIONAL
    alignmentVertical?:AlignmentVertical, //OPTIONAL
    offset?:Vector2 //OPTIONAL
}
*/

/*THE ALIGNMENT COMPONENT MUST HAVE A PARENT I.E, SPRITE , SHAPE , SCENE*/

/*WONT WORK IF PARENT IS NONE OR A EMPTY ENTITY*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const sceneId: EntityId = entityTemplates.createSceneEntity('scene');
    engine.addStartFunction(start.bind(this));
    function start() {
        const rectAId:EntityId = initRectA(sceneId);
        const rectBId:EntityId = initRectB(rectAId);
        const rectCId:EntityId = initRectC(rectBId);
        const rectDId:EntityId = initRectD(rectCId);
    };
    function initRectA(parentId: EntityId) {
        const id: EntityId = entityTemplates.createRectangleEntity(600, 600, parentId);
        const shape = em.getComponent(id, Shape);
        if (shape) {
            shape.color = 'red';
        };
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'middle'
        }));
        return id;
    };
    function initRectB(parentId: EntityId) {
        const id: EntityId = entityTemplates.createRectangleEntity(400, 400, parentId);
        const shape = em.getComponent(id, Shape);
        if (shape) {
            shape.color = 'blue';
            shape.layer = 1;
        };
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'center',
            alignmentVertical: 'top'
        }));
        return id;
    };
    function initRectC(parentId: EntityId) {
        const id: EntityId = entityTemplates.createRectangleEntity(300, 300, parentId);
        const shape = em.getComponent(id, Shape);
        if (shape) {
            shape.color = 'yellow';
            shape.layer = 2;
        };
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'right',
            alignmentVertical: 'top'
        }));
        return id;
    };
    function initRectD(parentId: EntityId) {
        const id: EntityId = entityTemplates.createRectangleEntity(200, 200, parentId);
        const shape = em.getComponent(id, Shape);
        if (shape) {
            shape.color = 'blue';
            shape.layer = 3;
        };
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'right',
            alignmentVertical: 'middle'
        }));
        return id;
    };
};
*/
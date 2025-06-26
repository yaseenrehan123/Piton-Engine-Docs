import { Engine, EntityTemplates, Transform, type EntityId, type Vector2 } from "piton-engine";

/*TRANSFORM COMPONENT*/

/*
export class Transform {
    public globalPosition: GlobalPosition; //TYPE:Vector2 , Is the global position of objects on screen.
    //public localPosition: LocalPosition; // NOT INCLUDED
    public rotation: Rotation; //TYPE:Rotation, Rotation component
    public scale: Scale; //TYPE:Scale, Scale component
    constructor(options: TransformOptions = {}) {
        this.globalPosition = {position:options.globalPosition ?? {x:0,y:0}};
        //this.localPosition = {position:options.localPosition ?? {x:0,y:0}};
        this.rotation = new Rotation(options.rotation?.value);
        this.scale = new Scale({value:options.scale?.value});
    }

};
*/

/*TRANSFORM OPTIONS*/

/*
export type TransformOptions = {
    globalPosition?: Vector2, //OPTIONAL, option for globalPosition property
    //localPosition?: Vector2, //NOT INCLUDED
    rotation?: RotationOptions, //OPTIONAL, option for rotation property.
    scale?: ScaleOptions //OPTIONAL, option for scale property
};
*/

/* EXAMPLES */ /*UNCOMMENT FOR TESTING*/

/* EXAMPLE 1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({}); // EMPTY OPTIONS
    const entityManager = engine.getEntityManager(); // GET ENTITYMANAGER
    const entityId: EntityId = entityManager.createEntity(); // CREATING A BASIC NUMBER THROUGH ENTITYMANAGER
    entityManager.addComponent(entityId, Transform, new Transform({ // ADDING TRANSFORM COMPONENT
        globalPosition: { x: 300, y: 300 }, // GLOBAL POSITION
        // rotation:{value:0}, // DEFAULT 0
        // scale:{value:{x:1,y:1}}, // DEFAULT {x:1,y:1}
    }));
    console.log(entityManager.getComponent(entityId, Transform)); // SEE THE RESULT!
};
*/


/*EXAMPLE 2*/

/*
const example2: Function = () => {
    const engine: Engine = new Engine({}); //EMPTY 
    const entityManager = engine.getEntityManager(); //GET ENTITYMANAGER
    const entityTemplates = new EntityTemplates(engine); //CREATE A ENTITY TEMPLATES CLASS
    engine.addStartFunction(start.bind(this)); //ADD START FN
    engine.addUpdateFunction(update.bind(this)); //ADD UPDATE FN

    function start() { //RUNS ONCE
        const entityId: EntityId = entityTemplates.createEmptyEntity(); //ADDS TRANSFORM COMPONENT WITH OTHER COMPONENTS AS WELL
    };
    function update() {// RUNS CONTINOUSLY
        entityManager.query('All', { //DO A QUERY
            transform: Transform
        }, (id, { transform }) => {
            const pos: Vector2 = transform.globalPosition.position; //GET REFRENCE TO POSITION
            pos.x++; //MOVE X
            pos.y++; //MOVE Y
            const ctx: CanvasRenderingContext2D = engine.getCtx();
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.moveTo(0, 0);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
            console.log(transform.globalPosition.position);
        });
    };

};
*/
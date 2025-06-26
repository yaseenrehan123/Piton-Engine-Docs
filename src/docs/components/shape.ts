import { Circle, Engine, Rectangle, Shape, Transform, Triangle, type Vector2 } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*SHAPE COMPONENT*/

/*
export class Shape{
    public shape:ShapeType; //TYPE:ShapeType = Rectangle | Circle | Triangle , SPECIFIC SHAPE CLASS
    public color:string = 'green'; //TYPE:string , COLOR OF SHAPE
    public outlineEnabled:boolean = false; //TYPE:boolean , WHETHER OUTLINE IS ENABLED
    public outlineWidth:number = 3; //TYPE:number , OUTLINE WIDTH
    public outlineColor:string = 'black'; //TYPE:string , OUTLINE COLOR
    public alpha:number = 1; //TYPE:number , ALPHA/OPACITY
    public active:boolean = true; //TYPE:boolean , WHETHER IT RENDERS OR NOT
    public layer:number = 0; //TYPE:number , ORDERING LAYER
    public blocksInput:boolean = true; //TYPE:boolean , WHEATHER IT BLOCKS INPUT WHEN ON TOP OF A BUTTON
    constructor(options:ShapeOptions){
        this.shape =  options.shape;
        this.color = options.color ?? 'green';
        this.outlineEnabled = options.outlineEnabled ?? false;
        this.outlineWidth = options.outlineWidth ?? 3;
        this.outlineColor = options.color ?? 'black';
        this.alpha = options.alpha ?? 1;
        this.active = options.active ?? true;
        this.layer = options.layer ?? 0;
        this.blocksInput = options.blocksInput ?? true;
    }
};   
*/

/*SHAPE OPTIONS*/

/*
export type ShapeOptions = {
    shape: ShapeType, //COMPULSORY, OPTION FOR 'shape' PROPERTY
    color?: string, //OPTIONAL , OPTION FOR 'color' PROPERTY
    outlineEnabled?: boolean, //OPTIONAL , OPTION FOR 'outlineEnabled' PROPERTY
    outlineWidth?: number, //OPTIONAL , OPTION FOR 'outlineWidth' PROPERTY
    outlineColor?: string, //OPTIONAL , OPTION FOR 'outlineColor' PROPERTY
    alpha?: number, //OPTIONAL , OPTION FOR 'alpha' PROPERTY
    active?: boolean, //OPTIONAL , OPTION FOR 'active' PROPERTY
    layer?: number, //OPTIONAL , OPTION for 'layer' PROPERTY
    blocksInput?: false //OPTIONAL , OPTION FOR 'blocksInput' PROPERTY
};
*/

/*
SHAPE CLASS CONTAINS PROPERTIES WHICH ARE COMMON FOR ALL SHAPES,
WHEN CREATING A SHAPE WE WILL BE USING SHAPE CLASS
*/

/*
ASIDE FROM SHAPE CLASS, THE INDIVIDUAL SHAPE CLASSES TOO POSSESS
PROPERTIES WHICH MIGHT BE HELPFUL
*/

/*RECTANGLE*/

/*
export class Rectangle {
    public width: number;
    public height: number;
    public centered: boolean = true;
    public rotation: number = 0;
    public rounded: boolean = false;
    public roundedRadius: number = 5;
    constructor(options: RectangleOptions) {
        this.width = options.width ?? 40;
        this.height = options.height ?? 40;
        this.centered = options.centered ?? true;
        this.rotation = options.rotation ?? 0;
        this.rounded = options.rounded ?? false;
        this.roundedRadius = options.roundRadius ?? 5;
    }
};
*/

/*CIRCLE*/

/*
export class Circle {
    public radius: number;
    constructor(options: CircleOptions) {
        this.radius = options.radius ?? 40;
    }
};
*/

/*TRIANGLE*/

/*
export class Triangle {
    public p1: Vector2;// side 1
    public p2: Vector2;// side 2
    public p3: Vector2 // side 3
    public centered: boolean = true;
    public rotation: number = 0;
    constructor(options: TriangleOptions) {
        this.p1 = options.p1 ?? { x: 30, y: 0 };
        this.p2 = options.p2 ?? { x: 0, y: 59 };
        this.p3 = options.p3 ?? { x: 30, y: 59 };
        this.centered = options.centered ?? true;
        this.rotation = options.rotation ?? 0;
    }
};
*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const shapeEntity:EntityId = entityTemplates.createEmptyEntity();
    const transform = em.getComponent(shapeEntity,Transform);
    if(transform){
        transform.globalPosition.position = {x:300,y:300};
    }
    em.addComponent(shapeEntity,Shape,new Shape({ //CREATING A SHAPE
        shape:new Rectangle({ //CREATING A RECT INSTANCE INSIDE SHAPE
            width:100,
            height:100
        })
    }));
    //FOR CIRCLE
    //em.addComponent(shapeEntity,Shape, new Shape({
    //    shape:new Circle({
    //        radius:20
    //    })
    //}));
    //FOR TRIANGLE
    //em.addComponent(shapeEntity,Shape,new Shape({
    //    shape:new Triangle({
    //        p1:{x:0,y:50},
    //        p2:{x:-80,y:-20},
    //        p3:{x:100,y:100}
    //    })
    //}));
    
};
//YOU CAN CREATE SHAPES LIKE THIS , BUT FOR SOME PEOPLE IT MIGHT BE 
//A BIT TOO COMPLICATED IN THAT CASE YOU CAN USE TEMPLATES.
*/

/*EXAMPLE 2*/

/*
const example2:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const rectId:EntityId = entityTemplates.createRectangleEntity(100,100);
    const circleId:EntityId = entityTemplates.createCircleEntity(100);
    const triangleId:EntityId = entityTemplates.createTriangleEntity(
        {x:-100,y:0},
        {x:200,y:-50},
        {x:0,y:150}
    );
    em.query('All',{
        transform:Transform
    },(id,{transform})=>{
        const canvasBounds:Vector2 = engine.getCanvasBounds();
        const randomPos:Vector2 = {
            x:engine.getRandomFloat(0,canvasBounds.x),
            y:engine.getRandomFloat(0,canvasBounds.y)
        };
        transform.globalPosition.position = randomPos;
    });
};
*/
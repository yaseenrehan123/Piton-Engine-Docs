import { Alignment, Engine, EntityTemplates, Text } from "piton-engine";
import type { EntityId , EntityManager } from "piton-engine";

/*TEXT COMPONENT*/

/*
export class Text{
    public content:string = 'text'; //TYPE:string , CONTENT/TEXT
    public size:number = 16; //TYPE:number , SIZE OF TEXT
    public color:string = 'white'; //TYPE:string , COLOR OF TEXT
    public outlineEnabled:boolean = false; //TYPE:boolean , WHETHER OUTLINE IS ENABLED
    public outlineWidth:number = 2; //TYPE:number , OUTLINE WIDTH
    public outlineColor:string = 'black'; //TYPE:string , OUTLINE COLOR
    public alpha:number = 1; //TYPE:number , ALPHA/OPACITY
    public active:boolean = true; //TYPE:boolean , WHETHER TEXT IS RENDERERED
    public layer:number = 0; //TYPE:number , ORDERING LAYER
    public rotation:number = 0; //TYPE:number , ROTATION
    public style:string = 'sans-serif'; //TYPE:string , FONT STYLE
    public maxWidth:number = 200; //TYPE:number , CONTROLS THE MAX WIDTH OF TEXT
    constructor(options:TextOptions){
        this.content = options.content ?? 'text';
        this.size = options.size ?? 16;
        this.color = options.color ?? 'white';
        this.outlineEnabled = options.outlineEnabled ?? false;
        this.outlineWidth = options.outlineWidth ?? 2;
        this.outlineColor = options.outlineColor ?? 'black';
        this.alpha = options.alpha ?? 1;
        this.active = options.active ?? true;
        this.layer = options.layer ?? 0;
        this.rotation = options.rotation ?? 0;
        this.style = options.style ?? 'sans-serif';
        this.maxWidth = options.maxWidth ?? 200;
    }
};
*/

/*TEXT OPTIONS*/

/*
export type TextOptions = {
    content?: string,
    size?: number,
    color?: string,
    outlineEnabled?: boolean,
    outlineWidth?: number,
    outlineColor?: string,
    alpha?: number,
    active?: boolean,
    layer?: number,
    rotation?: number,
    style?: string,
    maxWidth?: number
};
*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE 1*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates = new EntityTemplates(engine);
    const scene:EntityId = entityTemplates.createSceneEntity('scene');
    const entityA = entityTemplates.createEmptyEntity(scene);
    em.addComponent(entityA,Text, new Text({
        content:'HI THIS IS A TEXT',
        size:100,
        maxWidth:500
    }));
    em.addComponent(entityA,Alignment,new Alignment({
        alignmentHorizontal:'center',
        alignmentVertical:'middle'
    }));
    //YOU CAN CREATE TEXT LIKE THIS OR USE A TEMPLATE
};
*/
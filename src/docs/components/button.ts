import { Alignment, Button, Engine, Rectangle, Shape, Transform, type Vector2 } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*BUTTON COMPONENT*/

/*
export class Button{
    public pressArea:Vector2 = {x:100,y:100}; //TYPE:Vector2 , CLICK DETECTION AREA 
    public onJustPressed:Function = ()=>{}; //TYPE:Function , FIRES ONCE WHEN THE BUTTON START GETTING PRESSED
    public onPress:Function = ()=>{}; //TYPE:Function , FIRES CONTINOUSLY IF THE BUTTON IS BEING PRESSED
    public onJustReleased:Function = ()=>{}; //TYPE:Function , FIRES ONCE WHEN THE BUTTON IS RELEASED
    public onJustHovered:Function = ()=>{}; //TYPE:Function , FIRES ONCE WHEN THE BUTTON STARTS BEING HOVERED
    public onHovered:Function = ()=>{}; //TYPE:Function , FIRES CONTINOUSLY IF THE BUTTON IS BEING HOVERED
    public onHoveredReleased:Function = ()=>{}; //TYPE:Function , FIRES ONCE IF THE BUTTON STOPS BEING HOVERED
    public showPressArea:boolean = false; //TYPE:boolean , SHOWS A GREEN RECT TO DEBUG THE PRESS AREA
    public pressAreaShowColor:string = 'green'; //TYPE:string , COLOR OF THE DEBUGGING RECT
    public layer:number = 0; //TYPE:number , ORDERING LAYER
    public active:boolean = true; //TYPE:boolean , WHETHER CLICK DETECTION IS ENABLED/BUTTON ENABLED
    public changeCursorToPointer:boolean = true; //TYPE:boolean , WHETHER IT CHANGES CURSOR TO POINTER UPON BEING HOVERED
    public isHovered:boolean = false; //TYPE:boolean , WHETHER IT'S BEING CURRENTLY HOVERED
    constructor(options:ButtonOptions){
        this.pressArea = options.pressArea ?? {x:100,y:100};
        this.onJustPressed = options.onJustPressed ?? (()=>{});
        this.onPress = options.onPress ?? (()=>{});
        this.onJustReleased = options.onReleased ?? (()=>{});
        this.onJustHovered = options.onJustHovered ?? (()=>{});
        this.onHovered = options.onHovered ?? (()=>{});
        this.onHoveredReleased = options.onHoveredReleased ??(()=>{})
        this.showPressArea = options.showPressArea ?? false;
        this.pressAreaShowColor = options.pressAreaShowColor ?? 'green';
        this.layer = options.layer ?? 0;
        this.active = options.active ?? true;
        this.changeCursorToPointer = options.changeCursorToPointer ?? true;
    }
};
*/

/*BUTTON OPTIONS*/

/*
export type ButtonOptions = {
    pressArea?: Vector2
    onJustPressed?: Function,
    onPress?: Function,
    onReleased?: Function,
    onJustHovered?: Function,
    onHovered?: Function,
    onHoveredReleased?: Function,
    showPressArea?: boolean,
    pressAreaShowColor?: string,
    layer?: number,
    active?: boolean,
    changeCursorToPointer?: boolean
};
*/

/*
WORKS WITH BOTH MOUSE AND TOUCH INPUT.
*/

/*
IF AN ELEMENT(SPRITE,SHAPE) WITH HIGHER 'layer' IS OVER BUTTON AND HAS 'blocksInput' , THAT AREA OF BUTTON 
WONT BE ABLE TO DETECT INPUT.
*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE1*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const scene:EntityId = entityTemplates.createSceneEntity('scene');
    const button:EntityId = entityTemplates.createEmptyEntity(scene);
    em.addComponent(button,Button, new Button({
        pressArea:{x:200,y:100},
        showPressArea:true
    }));
    
    //em.addComponent(button,Shape,new Shape({
    //    shape:new Rectangle({
    //        width:200,
    //        height:100
    //    }),
    //    blocksInput:false //SET TO FALSE TO NOT ACCIDENTLY DISRUPT IT'S OWN BUTTON
    //}));
    
    em.addComponent(button,Alignment,new Alignment({
        alignmentHorizontal:'center',
        alignmentVertical:'middle'
    }));
    //YOU CAN CREATE JUST A BUTTON LIKE THIS BUT CURRENTLY IT DOESNT HAVE ANY VISUALS
    //(ASIDE FROM DEBUGGING WHICH SHOULD LIKELY BE TURNED OFF LATER).
    //FOR BUTTONS WITH VISUALS CHECK OUT EXAMPLE#2-3.
   
};
*/

/*EXAMPLE2*/

/*
const example2:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const sceneId:EntityId = entityTemplates.createSceneEntity('scene');
    const rectButtonId:EntityId = entityTemplates.createRectButtonEntity(200,100,'BUTTON',sceneId); //USE A TEMPLATE
    const button = em.getComponent(rectButtonId,Button);
    if(button){
        button.onJustPressed =()=>{
            console.log("BUTTON JUST PRESSED!");
        };
        button.onPress =()=>{
            console.log("BUTTON PRESSED!");
        };
        button.onJustReleased =()=>{
            console.log("BUTTON JUST RELEASED!");
        };
        button.onJustHovered =()=>{
            console.log("BUTTON JUST HOVERED!");
        };
        button.onHovered =()=>{
            console.log("BUTTON HOVERED!");
        };
        button.onJustReleased =()=>{
            console.log("BUTTON JUST RELEASED!");
        };
    }
    em.addComponent(rectButtonId,Alignment,new Alignment({
        alignmentHorizontal:'center',
        alignmentVertical:'middle'
    }));
    
};
*/

/*EXAMPLE3*/

/*
const example3: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            images_JSON_path: "/data/imagesData.json"
        }
    });
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const sceneId: EntityId = entityTemplates.createSceneEntity('scene');

    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));

    function start() {
        initRightBtn();
        initLeftBtn();
        initJumpBtn();
    }

    function update() {
        const ctx: CanvasRenderingContext2D = engine.getCtx();
        em.query('All', {
            transform: Transform
        }, (id, { transform }) => {
            const pos: Vector2 = transform.globalPosition.position;
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.moveTo(0, 0);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        });
    }

    function initRightBtn() {
        const img: HTMLImageElement = engine.getImage("rightBtn");
        const id: EntityId = entityTemplates.createTexturedButtonEntity(img, 256, 256, sceneId);
        const transform = em.getComponent(id, Transform);
        const button = em.getComponent(id, Button);
        if (transform) {
            transform.scale.value = { x: 1, y: 1 };
        }
        if (button) {
            button.showPressArea = true;
            button.pressArea = { x: 120, y: 120 };
            button.onPress = () => {
                console.log("RIGHT BUTTON PRESSED!");
            }
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'left',
            alignmentVertical: 'bottom',
            offset: { x: 100, y: 70 }
        }));
    }

    function initLeftBtn() {
        const img: HTMLImageElement = engine.getImage("leftBtn");
        const id: EntityId = entityTemplates.createTexturedButtonEntity(img, 256, 256, sceneId);
        const transform = em.getComponent(id, Transform);
        const button = em.getComponent(id, Button);
        if (transform) {
            transform.scale.value = { x: 1, y: 1 };
        }
        if (button) {
            button.showPressArea = true;
            button.pressArea = { x: 120, y: 120 };
            button.onPress = () => {
                console.log("LEFT BUTTON PRESSED!");
            }
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'left',
            alignmentVertical: 'bottom',
            offset: { x: -70, y: 70 }
        }));
    }

    function initJumpBtn() {
        const img: HTMLImageElement = engine.getImage("jumpBtn");
        const id: EntityId = entityTemplates.createTexturedButtonEntity(img, 256, 256, sceneId);
        const transform = em.getComponent(id, Transform);
        const button = em.getComponent(id, Button);
        if (transform) {
            transform.scale.value = { x: 1, y: 1 };
        }
        if (button) {
            button.showPressArea = true;
            button.pressArea = { x: 120, y: 120 };
            button.onJustPressed = () => { //USE JUST PRESSED HERE CAUSE INCASE OF JUMP THAT MAKES MORE SENSE
                console.log("JUMP BUTTON JUST PRESSED!");
            }
        }
        em.addComponent(id, Alignment, new Alignment({
            alignmentHorizontal: 'right',
            alignmentVertical: 'bottom',
            offset: { x: 60, y: 70 }
        }));
    };
};
*/

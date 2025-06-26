import { Alignment, Button, Engine, EntityActive, Rectangle, Shape, Text } from "piton-engine";
import { EntityTemplates, type EntityId,type EntityManager } from "piton-engine";

/*SCENE COMPONENT*/

/*
export class Scene{
    public name:string = ''; //TYPE:string , //NAME OF SCENE
    public onLoad:Function; //TYPE:Function , //FIRES WHEN A SCENE IS LOADED
    public onUnload:Function; //TYPE:Function , //FIRES WHEN A SCENE IS UNLOADED
    constructor(options:SceneOptions){
        this.name = options.name;
        this.onLoad = options.onLoad ?? (()=>{});
        this.onUnload = options.onUnload ?? (()=>{});

    }
};
*/

/*SCENE OPTIONS*/

/*
export type SceneOptions = {
    name: string, //COMPULSORY , OPTION FOR 'name' PROPERTY
    onLoad?: Function //OPTIONAL , OPTION FOR 'onLoad' PROPERTY
    onUnload?: Function //OPTIONLA , OPTION FOR 'unLoad' PROPERTY
};
*/

/*
SCENES ARE FOR CONTAINING ENTITIES , YOU MIGHT HAVE A MAINMENU OR GAME SCENE,
A SCENE CAN BE LOADED USING engine.loadScene(). IT DISABLES ALL SCENES, CALLS unLoad() 
ON PREVIOUS SCENE , and triggers load() FN ON NEW SCENE.
*/

/*EXAMPLES*/ /*COMMENT AS NEEDED*/

/*EXAMPLE 1*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const mainMenuSceneId:EntityId = entityTemplates.createSceneEntity('mainMenu');
    const gameSceneId:EntityId = entityTemplates.createSceneEntity('game');
    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));

    function start(){
        engine.loadScene(mainMenuSceneId);
        initPlayBtn();
        initGameText();
    };
    function update(){

    };
    function initPlayBtn(){
        const id:EntityId = entityTemplates.createRectButtonEntity(200,100,'PLAY',mainMenuSceneId);
        const shape = em.getComponent(id,Shape);
        const button = em.getComponent(id,Button);
        if(shape){
            shape.color = 'blue';
            const rect = shape.shape;
            if(rect instanceof Rectangle){
                rect.rounded = true;
                rect.roundedRadius = 10;
            }
        };
        if(button){
            button.onJustPressed = ()=>{
                engine.loadScene(gameSceneId);
                console.log("GAME SCENE LOADED");
            };
        }
        em.addComponent(id,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));

        const textId:EntityId | null = engine.getChildWithComponent(id,Text);
        if(textId){
            const text = em.getComponent(textId,Text);
            if(text){
                text.size = 40;
            }
        };
    };
    function initGameText(){
        const id:EntityId = entityTemplates.createTextEntity('THIS IS GAME SCENE',gameSceneId);
        const text = em.getComponent(id,Text);
        if(text){
            text.size = 100;
            text.maxWidth = 500;
        }
        em.addComponent(id,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));
    }
};
*/

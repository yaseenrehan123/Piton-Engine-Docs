import { Engine } from "piton-engine";
import type { EntityId, EntityManager } from "piton-engine";

/*ENGINE*/

/*PROPERTIES*/

/*
private canvas: HTMLCanvasElement | null //CONTAINS CANVAS
private ctx: CanvasRenderingContext2D | null //CONTAINS CTX
private canvasWidth: number //CONTAINS CANVAS'S WIDTH
private canvasHeight: number //CONTAINS CANVAS'S HEIGHT
private canvasDefWidth: number //CONTAINS CANVAS'S DEFAULT WIDTH(680)
private canvasDefHeight: number //CONTAINS CANVAS'S DEFAULT HEIGHT(600)
private entityManager: EntityManager | null //CONTAINS ENTITYMANAGAER
private lastFrameTime: number //CONTAINS LASTFRAMETIME TO CALCULATE 'deltaTime'
private deltaTime: number //CONTAINS DELTATIME
private updateFunctions: Function[] //ARR OF UPDATE FUNCTIONS 
private resources: AssetResources //PASSED IN RESOURCES THROUGH 'GameOptions'
private assetLoader: AssetLoader | null //CONTAINS ASSET LOADER, LOADS RESOURCES
private loadedResources: LoadedResources //CONTAINS LOADED RESOURCES, IMAGES,AUDIO ETC
private startFunctions: Function[] //ARR OF START FUNCTIONS
private sceneEntities: EntityId[] //ARR OF SCENES
private currentSceneId: EntityId | null //CURRENT SCENE
private input: Input | null //CONTAINS INPUT CLASS
private domInteracted: boolean = false; // CHECK FOR IF DOM IS ALREADY INTERACTED
private onDOMInteractionFunctions: Function[] = []; //ARR OF FN TO RUN AT FIRST DOM INTERACTION
private storageManager: StorageManager | null = null; // A STORAGEMANAGER INSTANCE
*/

/*FUNCTIONS*/

/*
getCanvas() //RETURNS CANVAS
getCtx() //RETURNS CTX
getCanvasBounds() // RETURNS CANVAS WIDTH,HEIGHT AS VECTOR2
getEntityManager() //RETURNS ENTITYMANAGER
getDeltaTime() //RETURNS DELTATIME
getImage() //RETURNS IMAGE THROUGH 'images_JSON_path'
getAudio() //RETURNS AUDIO THROUGH 'audio_JSON_path'
getJSON() //RETURNS A CUSTOM JSON FILE IN 'jsons'
getSceneByName() //RETURNS A SCENE WITH THE PASSED NAME
getInput() //RETURNS INPUT CLASS
getChildWithComponent() //RETURNS THE FIRST CHILD WITH THE COMPONENT IN AN ENTITY.
getChildrenWithComponent() //RETURNS ARRAY OF CHILDREN WITH THE LISTED COMPONENT, IF A PARENT HAS ANY.
getRandomNumber() //RETURNS A RANDOM NUM WITHIN A RANGE
getRandomFloat() //RETURNS A RANDOM FLOAT WITHIN A RANGE

addUpdateFunction() //ADDS A FN TO RUN BY UPDATE LOOP
removeUpdateFunction() // REMOVES A FN FROM UPDATE LOOP
addStartFunction() //ADDS A FN TO RUN AT START(AFTER RESOURCES ARE LOADED)
removeStartFunction() //REMOVES A FN FROM START
isEntityActive() //RETURNS WHETHER AN ENTITY IS ACTIVE(WHEN A ENTITY AND IT'S PARENT'S 'EntityActuve' COMPONENT VALUE IS TRUE)
addScene() //MANUALLY ADDS A SCENE TO 'sceneEntities' ARRAY(AUTO DONE IF SCENE IS CREATED USING TEMPLATE)
loadScene() //LOADS A SCENE, CALLING SCENE 'onLoad' and previous scene's 'onUnload' FN
addParent() //ADDS A PARENT TO ENTITY(AUTO DONE BY PASSING IN PARENT KEY IF USING TEMPLATE). //CANT ADD A PARENT TO A SCENE!
playAudio() //PLAYS AUDIO TAKING IN A 'AudioOptions' TYPE.
*/

/*EXAMPLES*/ /*UNCOMMENT AS NEEDED*/

/*EXAMPLE1*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({
        //canvas: //PASS IN A PRE-BUILT CANVAS , OTHERWISE IT WILL CREATE ONE ITSELF
        //canvasWidth: //PASS IN CANVAS WIDTH , DEFAULT 680
        //canvasHeight: //PASS IN CANVAS HEIGHT , DEFAULT 600
        //resources:{
            //images_JSON_path: //PATH TO IMAGES JSON FILE
            //audio_JSON_path: //PATH TO AUDIO JSON FILE
            //jsons:{} //CUSTOM JSON FILES TO LOAD
        //}
    });

};
*/

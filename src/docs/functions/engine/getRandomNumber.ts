import { Alignment, Engine, Text } from "piton-engine";
import { EntityTemplates, type EntityId,type EntityManager } from "piton-engine";

/*GET RANDOM NUMBER*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start(){
        const randomNum:number = engine.getRandomInt(0,100);
        initScene();
        initText(randomNum.toString());
    };
    function initScene(){
        const id:EntityId = entityTemplates.createSceneEntity('scene');
    }
    function initText(content:string){
        const sceneId:EntityId | null = engine.getSceneByName('scene');
        if(sceneId === null) throw new Error("SCENE ID NOT FOUND! ");
        const id:EntityId = entityTemplates.createTextEntity(content,sceneId);
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

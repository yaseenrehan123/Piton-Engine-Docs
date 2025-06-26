import { Alignment, Engine, EntityTemplates, Text } from "piton-engine";
import type { EntityId,EntityManager } from "piton-engine";
/*GET CHILD WITH COMPONENT*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start(){
        const scene:EntityId = entityTemplates.createSceneEntity('scene');
        const rectBtnId:EntityId = entityTemplates.createRectButtonEntity(200,100,'BUTTON',scene);
        em.addComponent(rectBtnId,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));
        const textId:EntityId | null = engine.getChildWithComponent(rectBtnId,Text);
        if(!textId) throw new Error("TEXT ID NOT FOUND!");
        const text = em.getComponent(textId,Text);
        if(!text) throw new Error("TEXT COMPONENT NOT FOUND! " + textId);
        text.size = 40;
        text.color = 'red';
    }
};

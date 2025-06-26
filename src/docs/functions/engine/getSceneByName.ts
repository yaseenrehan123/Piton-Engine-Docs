import { Alignment, Engine, EntityTemplates, Text, type EntityId } from "piton-engine";
import type { EntityManager } from "piton-engine";

/*GET SCENE BY NAME*/

const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const sceneA: EntityId = entityTemplates.createSceneEntity('sceneA');
        const sceneB: EntityId = entityTemplates.createSceneEntity('sceneB');
        const sceneC: EntityId = entityTemplates.createSceneEntity('sceneC');
        const sceneD: EntityId = entityTemplates.createSceneEntity('sceneD');
        engine.loadScene(sceneA);

        initText();
        loadSceneD();
    };
    function initText() {
        const sceneD: EntityId | null = engine.getSceneByName('sceneD');
        if (!sceneD) throw new Error("SCENE D NOT FOUND!");
        const id: EntityId = entityTemplates.createTextEntity('THIS IS SCENE D',sceneD);
        const text = em.getComponent(id,Text);
        if(text){
            text.size = 80;
            text.maxWidth = 500;
        }
        em.addComponent(id,Alignment,new Alignment({
            alignmentHorizontal:'center',
            alignmentVertical:'middle'
        }));
    }
    function loadSceneD() {
        setTimeout(() => {
            const sceneD: EntityId | null = engine.getSceneByName('sceneD');
            if (!sceneD) throw new Error("SCENE D NOT FOUND!");
            engine.loadScene(sceneD);
            console.log("SCENE D LOADED");
        }, 3000)
    }
};

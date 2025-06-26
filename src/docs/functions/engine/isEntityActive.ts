import { Engine } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*IS ENTITY ACTIVE*/

const example1: Function = () => {
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const sceneAId: EntityId = entityTemplates.createSceneEntity('sceneA');
        const sceneBId: EntityId = entityTemplates.createSceneEntity('sceneB');
        const sceneCId: EntityId = entityTemplates.createSceneEntity('sceneC');
        const sceneDId: EntityId = entityTemplates.createSceneEntity('sceneD');
        engine.loadScene(sceneCId);
        console.log("SCENE A ACTIVE: ", engine.isEntityActive(sceneAId));
        console.log("SCENE B ACTIVE: ", engine.isEntityActive(sceneBId));
        console.log("SCENE C ACTIVE: ", engine.isEntityActive(sceneCId));
        console.log("SCENE D ACTIVE: ", engine.isEntityActive(sceneDId));
    }
};

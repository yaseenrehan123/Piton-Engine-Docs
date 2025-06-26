import { Engine, EntityTemplates, Transform } from "piton-engine";
import type { EntityId, EntityManager } from "piton-engine";

/*CREATE SPRITE ENTITY*/

const example1: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            images_JSON_path: '/data/imagesData.json'
        }
    });
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start() {
        const img:HTMLImageElement = engine.getImage('asteroid');
        const id: EntityId = entityTemplates.createSpriteEntity(img,32,32);
        const transform = em.getComponent(id,Transform);
        if(transform){
            transform.globalPosition.position = {x:300,y:300};
        }
        console.log("ID: ", id, "COMPONENTS: ", em.getAllComponents(id));
    };

};

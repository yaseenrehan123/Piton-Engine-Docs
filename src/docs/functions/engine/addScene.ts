import { Children, Engine,EntityActive, Parent, Scene, Transform } from "piton-engine";
import type { EntityId,EntityManager } from "piton-engine";
/*ADD SCENE*/

/*A SCENE TEMPLATE ALREADY ADDS THE SCENE BY DEFAULT, SO IF YOU ARE USING THAT YOU DONT HAVE TO WORRY ABOUT IT!*/

const example1:Function = () =>{
    const engine:Engine = new Engine();
    const em:EntityManager = engine.getEntityManager();
    const id:EntityId = em.createEntity(); //CREATING A SCENE WITHOUT TEMPLATE
    em.addComponent(id,Transform,new Transform());
    em.addComponent(id,EntityActive,new EntityActive());
    em.addComponent(id,Children,new Children());
    em.addComponent(id,Scene,new Scene({
        name:'scene',
        onLoad:()=>{
            console.log("SCENE LOADED!");
        }
    }));
    engine.addScene(id);
    engine.loadScene(id);
    
};
example1();
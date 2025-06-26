import { Engine, EntityTemplates } from "piton-engine";

/*GET IMAGE*/

const example1:Function =()=>{
    const engine:Engine = new Engine({
        resources:{
            images_JSON_path:'/data/imagesData.json'
        }
    });
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    function start(){ //ONLY GET IMAGES ONCE THEY ARE LOADED
        const img:HTMLImageElement = engine.getImage('asteroid');
        if(!img) throw new Error("IMAGE NOT FOUND!");
        entityTemplates.createSpriteEntity(img,128,128);
    }
};

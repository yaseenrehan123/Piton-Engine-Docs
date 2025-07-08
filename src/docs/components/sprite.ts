import { Engine, Sprite, Transform } from "piton-engine";
import { EntityTemplates, type EntityId, type EntityManager } from "piton-engine";

/*SPRITE COMPONENT*/

/*
export class Sprite {
    public image: HTMLImageElement;       // TYPE: HTMLImageElement - Reference to the image to render.
    public width: number;                 // TYPE: number - Width of the sprite in pixels.
    public height: number;                // TYPE: number - Height of the sprite in pixels.
    public alpha: number;                 // TYPE: number - Opacity from 0 (invisible) to 1 (fully visible).
    public rotation: number;              // TYPE: number - Rotation in radians.
    public layer: number;                 // TYPE: number - Layer value used for draw order (higher draws on top).
    public active: boolean;               // TYPE: boolean - Whether the sprite is active and should be rendered.
    public blocksInput: boolean = true;   // TYPE: boolean - Whether this sprite blocks input (e.g., mouse clicks).
    public scale:Vector2 = {x:1,y:1};     // TYPE: Vector2 - A multiplier to scale the sprite
    constructor(options: SpriteOptions) {
        this.image = options.image;
        this.width = options.width;
        this.height = options.height;
        this.alpha = options.alpha ?? 1;
        this.rotation = options.rotation ?? 0;
        this.layer = options.layer ?? 0;
        this.active = options.active ?? true;
        this.blocksInput = options.blocksInput ?? true;
        this.scale = options.scale ?? {x:1,y:1};
    }
};
*/

/*SPRITE OPTIONS*/

/*
export type SpriteOptions = {
    image: HTMLImageElement, //COMPULSORY , Option for 'image' property
    width: number, //COMPULSORY , Option for 'width' property
    height: number, //COMPULSORY , Option for 'height' property
    alpha?: number, //OPTIONAL , Option for 'alpha' property , by default '1'
    rotation?: number, //OPTIONAL , Option for 'rotation' property , by default '0'
    layer?: number,  //OPTIONAL , Option for 'layer' property , by default '0'
    active?: boolean, //OPTIONAL , Option for 'active' property , by default 'true'
    blocksInput?: boolean //OPTIONAL , Option for 'blocksInput' property , by default true
};
*/

/*EXAMPLES*/

/*EXAMPLE 1*/

/*
const example1: Function = () => {
    const engine: Engine = new Engine({
        resources: { //PROPERTY TO PASS IN ASSET RESOURCES
            images_JSON_path: "/data/imagesData.json" // PASS IN YOUR JSON WHICH CONTAINS IMAGES URLS
        }
    });
    const em: EntityManager = engine.getEntityManager();
    engine.addStartFunction(start.bind(this));

    function start() { //RUNS AFTER IMAGES ARE LOADED TO PREVENT NULL REFRENCES
        const rightBtnImage = engine.getImage("rightBtn");
        if (!rightBtnImage) throw new Error("RIGHT BUTTON IMAGE NOT FOUND!");
        const entityId: EntityId = em.createEntity();
        em.addComponent(entityId, Sprite, new Sprite({
            image: rightBtnImage,
            width: 32,
            height: 32,
            //alpha:1,
            //rotation:0,
            //layer:0,
            //active:true,
            //blocksInput:true
        }));

        console.log(em.getAllComponents(entityId)); //NOW YOU CAN PROBABLY SEE THE COMPONENT IN CONSOLE

        //BUT YOU NOTICE IT ISNT RENDERING, BECAUSE SPRITE ALONE DOESNT RENDER A IMAGE, IT NEEDS A TRANSFORM COMPONENT.

        //CHECK OUT EXAMPLE 2
    };
};
*/

/*EXAMPLE 2*/

/*
const example2: Function = () => {
    const engine: Engine = new Engine({
        resources: {
            images_JSON_path: '/data/imagesData.json'
        }
    });
    const em: EntityManager = engine.getEntityManager();
    const templates: EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));
    function start() {
        const asteroidImage = engine.getImage("asteroid");
        if (!asteroidImage) throw new Error("ASTEROID IMAGE NOT FOUND!");

        const asteroid: EntityId = templates.createSpriteEntity(asteroidImage, 62, 62); //TRANSFORM AND SPRITE ALREADY ATTACHED
        const transform = em.getComponent(asteroid, Transform);
        if (transform) {
            transform.globalPosition.position = { x: 300, y: 0 };
        }
    };
    function update() {
        em.query('All', {
            transform: Transform,
            sprite: Sprite
        }, (id, { transform, sprite }) => {
            sprite.rotation++;
            transform.globalPosition.position.y++;
        });
    };

};
*/
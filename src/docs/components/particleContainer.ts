import { Engine,EntityTemplates, Transform } from "piton-engine";
import type { EntityId,EntityManager, Input } from "piton-engine";

/*PARTICLE CONTAINER COMPONENT*/

/*
export class ParticleContainer {
    public maxNumber: number;
    public img: HTMLImageElement; //TEXTURE
    public minScaleRange: Vector2;
    public maxScaleRange: Vector2;
    public minSpeedRange: number;
    public maxSpeedRange: number;
    public minLifeTimeRange: number;
    public maxLifeTimeRange: number;
    public minAlphaRange: number;
    public maxAlphaRange: number;
    public minRotationRange: number;
    public maxRotationRange: number;
    public alphaReductionRate: number;
    public duration:number;
    public counter:number;
    constructor(options: ParticleContainerOptions) {
        this.maxNumber = options.maxNumber ?? 16;
        this.img = options.img;
        this.minScaleRange = options.minScaleRange ?? { x: 1, y: 1 };
        this.maxScaleRange = options.maxScaleRange ?? { x: 2, y: 2 };
        this.minSpeedRange = options.minSpeedRange ?? 30;
        this.maxSpeedRange = options.maxSpeedRange ?? 100;
        this.minLifeTimeRange = options.minLifeTimeRange ?? 1;
        this.maxLifeTimeRange = options.maxLifeTimeRange ?? 2;
        this.minAlphaRange = options.minAlphaRange ?? 0.5;
        this.maxAlphaRange = options.maxAlphaRange ?? 1;
        this.minRotationRange = options.minRotationRange ?? 0;
        this.maxRotationRange = options.maxRotationRange ?? 360;
        this.alphaReductionRate = options.alphaReductionRate ?? 0.4;
        this.duration = options.duration ?? 1;
        this.counter = this.duration;
    }
};
*/

/*EXAMPLES*/

/*EXAMPLE 1*/

/*
const example1:Function = ()=>{
    const engine:Engine = new Engine({
        resources:{
            images_JSON_path:"data/imagesData.json"
        }
    });
    const em:EntityManager = engine.getEntityManager();
    const entityTemplates:EntityTemplates = new EntityTemplates(engine);
    const input:Input = engine.getInput();
    engine.addUpdateFunction(update.bind(this));
    function update(){
        if(input.getJustPressed()){
            const img:HTMLImageElement = engine.getImage('asteroid'); //GET THE IMAGE
            const {id,instance} = entityTemplates.createParticleContainerEntity({ //CONFIGURE THE OPTIONS
                img:img,
                maxNumber:30,
                minScaleRange:{x:0.4,y:0.4},
                maxScaleRange:{x:1,y:1},
                minSpeedRange:100,
                maxSpeedRange:300,
                minLifeTimeRange:1,
                maxLifeTimeRange:2,
                //minAlphaRange:0.4,
                //maxAlphaRange:1,
                //minRotationRange:0,
                //maxRotationRange:360,
                //alphaReductionRate:0.4,
                duration:2
            });
            const transform = em.getComponent(id,Transform,true);
            transform.globalPosition.position = input.getPosition(); //POSITION THE CONTAINER, IT WILL SPAWN PARTICLES AT IT'S POS
            instance(); //RUN , IT WILL INITAITE THE PARTICLES
        }
    };
};
example1();
*/
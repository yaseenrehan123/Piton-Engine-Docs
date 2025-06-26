import { Children, Engine, EntityActive, EntityTemplates, Parent, Sprite, Transform } from "piton-engine";
import type { EntityManager, EntityId, Vector2 } from "piton-engine";

/*GETTING STARTED*/

/*EXAMPLE 1: ADDING FUNCTIONS*/
const example1: Function = () => {
    //INSTANTIATE AN 'Engine' INSTANCE
    const engine: Engine = new Engine();
    //NOW YOU HAVE CREATED AN ENGINE INSTANCE WHICH MANAGES THE CODE

    //ADD A START FUNCTION
    function start() { //RUNS ONCE
        console.log("START");
    };
    function update() { //RUNS CONTINOUSLY
        console.log("UPDATE");
    };
    //WE HAVE NOW CREATED THE FUNCTIONS BUT THEY DONT DO ANYTHING

    //LINK THE FUNCTIONS SO ENGINE CAN RUN THEM
    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));
};

/*EXAMPLE 2: CANVAS*/
const example2: Function = () => {
    //NOW YOU MIGHT HAVE NOTICED THAT ENGINE AUTOMATICALLY CREATED A CANVAS FOR US

    //BUT WE CAN CREATE OR LIST IT MANUALLY TOO
    const preMadeCanvasExample: Function = () => {
        const canvas: HTMLCanvasElement | null = document.querySelector('.your-canvas-class');
        if (!canvas) throw new Error("CANVAS IN EXAMPLE 2 NOT FOUND!");
        const engine: Engine = new Engine({
            canvas: canvas, //LISTING OUR DOM CANVAS,
            canvasWidth: 1280, //CUSTOM WIDTH AND HEIGHT
            canvasHeight: 720
        });
    };

    //NOT WANTING TO USE DOM, YOU COULD STILL CREATE A CANVAS YOURSELF AND PASS IT IN
    const preMadeCanvasExample2: Function = () => {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        document.body.appendChild(canvas);
        const engine: Engine = new Engine({
            canvas: canvas,
            canvasWidth: 1280,
            canvasHeight: 720
        });
    };

};

/*EXAMPLE 3: ENTITIES*/
const example3: Function = () => {
    //NOW AFTER LEARNING ABOUT CANVAS LETS TALK ABOUT ENTITIES

    /*
    PITON ENGINE IS BUILT ON TOP OF 'entix-ecs' LIB. YOU CAN FIND THE LINK AND DETAILED DOCS HERE:
    https://github.com/yaseenrehan123/Entix-ECS

    HERE WE WILL DISCUSS ABOUT IT'S FEATURES BRIEFLY. 

    *YOU CAN SKIP IT IF YOU ARE ALREADY FAMILIAR WITH ECS*

    THE TERM 'ECS' CONSISTS OF THREE THINGS
    1)ENTITIES
    2)COMPONENTS
    3)SYSTEMS

    FIRST LETS DISCUSS WHAT AN ENTITY IS?

    AN ENTITY IS BASICALLY JUST AN ID/NUMBER SUCH AS 0,1,2,3,4,5...

    NOW, WHAT ARE COMPONENTS?

    THE ENTITIES CONTAINS SOME COMPONENTS, NO IN ACTUALLITY
    THE COMPONENTS ARE STORED ELSEWHERE , SUCH AS A MAP , AND ARE ACCESSED BY ENTITIES
    SO THINK OF ENTITY AS A KEY WHICH IS A NUMBER THAN WHEN USED CAN GET THE COMPONENTS
    THAT BELONG TO THAT ENTITY. 
    BASICALLY A KEY AND LOCKER EXAMPLE MIGHT BE SUITABLE.

    BUT THAN, WHAT ARE SYSTEMS?

    AFTER GETTING THE COMPONENTS, WE HAVE SYSTEMS THAT OPERATE ON THOSE COMPONENTS. 
    IN A BASIC EXAMPLE, IMAGINE YOURSELF MAKING A MILKSHAKE, YOU WOULD NEED VARIOUS
    INGREDIENTS(COMPONENTS). AFTER GETTING THE INGREDIENTS YOU WOULD PROBABLY BLEND
    THEM IN A BLENDER OR SOME OTHER MACHINE(SYSTEMS).
    THE SYSTEMS OPERATE ON THE COMPONENTS TO GIVE A RESULT

    */

    /*NOW LETS CREATE YOUR FIRST ENTITY*/

    const engine: Engine = new Engine(); //CREATE ENGINE AS USUAL
    //THE ENGINE CREATES A INSTANCE OF ENTITY MANAGER, SO LETS GET IT
    const entityManager: EntityManager = engine.getEntityManager();
    //NOW LETS CREATE OUR ENTITY
    const entity: EntityId = entityManager.createEntity(); //CREATES A ENTITY/NUMBER AND STORES IT IN MEMORY

    //NOW WE HAVE OUR ENTITY
    console.log("OUR ENTITY ID: ", entity);

    //YOU MIGHT SEE AN ERROR BUT YOU CAN SAFELY IGNORE IT, WE WILL GET TO WHY IT FIRES THIS
};

/*EXAMPLE 4: ADDING COMPONENTS*/
const example4: Function = () => {
    /*AFTER CREATING ENTITIES LET'S GO OVER COMPONENTS*/

    /*IN PITON-ENGINE COMPONENTS ARE CLASSES, SO YOU CAN USE ANY CLASS AS A COMPONENT*/
    const textComponentExample: Function = () => {
        class TestClass { }; //VALID COMPONENT

        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entity: EntityId = em.createEntity();
        //ADDING COMPONENT
        em.addComponent(entity, TestClass, new TestClass());
        //THE ADD COMPONENT TAKES IN THREE PARAMETERS
        //1) ENTITY TO ATTACH COMPONENT
        //2) TYPE OF COMPONENT(COMPONENT CLASS NAME)
        //3) DATA(INSTANCE OF COMPONENT CLASS)

        //LETS TEST IT OUT
        console.log("TEST COMPONENT:", em.getComponent(entity, TestClass));
    };

    //COMPONENTS USUALLY CONTAIN SOME DATA TO LETS PUT THAT DATA
    const dataComponentExample: Function = () => {
        //LETS CREATE AN RPG CHARACTER DATA
        class Character {
            private name: string;
            private description: string;
            private moveSpeed: number;
            private attackPower: number;
            private health: number;
            constructor(name: string, description: string, moveSpeed: number, attackPower: number, health: number) {
                this.name = name;
                this.description = description;
                this.moveSpeed = moveSpeed;
                this.attackPower = attackPower;
                this.health = health;
            }
            //NOW YOU CAN DO THIS BUT THE FLAW WITH IT IS IT'S TOO LONG!
        };
        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entity: EntityId = em.createEntity();
        em.addComponent(entity, Character, new Character(
            'Gerald', //NAME
            'Commander of a ruined kingdom', //DESCRIPTION
            5, //MOVESPEED
            10, //ATTACK POWER
            20 //HEALTH
        ));
        console.log(em.getComponent(entity, Character));

        //YOU MIGHT SEE AN ERROR, DONT WORRY IT'S NOT SERIOUS, LATER WE WILL DISCUSS WHY IT HAPPENS AND IT'S SUPER EASY TO FIX
    };

    //YOU COULD PROBABLY SEE THE DATA, BUT THEIR IS A PROBLEM.
    //1) THIS WAY IT KINDA IS A BIT MESSY/LONG
    //2) THE DATA SHOULD BE IN SPECIFIC ORDER OTHERWISE IT WOULD MESS UP

    //SO NOW WE WILL DISCUSS HOW I WOULD LIKE TO DEAL WITH THIS, AND THIS IS JUST MY OPINION
    //IF YOU DISCOVER ANOTHER METHOD THAT SUIT YOU MORE YOU ARE FREE TO USE THAT!

    const dataComponentExample2: Function = () => {
        //LETS CREATE THE COMPONENT AS USUAL
        class Character {
            private name: string;
            private description: string;
            private moveSpeed: number;
            private attackPower: number;
            private health: number;
            //NOW STOPPING HERE, GO DOWN AND CHECK THE 'CharacterOptions' Below.

            //SO HAVE YOU CHECKED IT? NOW LETS USE IT IN CONSTRUCTOR
            constructor(options: CharacterOptions) {
                this.name = options.name;
                this.description = options.description;
                this.moveSpeed = options.moveSpeed;
                this.attackPower = options.attackPower;
                this.health = options.health;
            };
        };
        //SO WE COULD PASS IN OPTIONS IN THE FORM OF AN OBJECT, BUT WE WOULD
        //NEED TO DEFINE A TYPE AND NOT JUST USE TYPE 'any' SO WE CREATE AN OPTION FOR 
        //EACH COMPONENT
        type CharacterOptions = { //THE OPTIONS WOULD CONTAIN ALL THE PASSABLE FIELDS
            name: string, //OPTION FOR STRING
            description: string, //FOR DESCRIPTION
            moveSpeed: number, //FOR SPEED
            attackPower: number, //FOR ATTACK POWER
            health: number //FOR HEALTH
        };

        //NOW LETS CREATE ENGINE AND ADD THE COMPONENT!
        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entity: EntityId = em.createEntity();
        em.addComponent(entity, Character, new Character({
            description: 'This is description',
            name: 'this is name',
            health: 10,
            attackPower: 20,
            moveSpeed: 3
        }));
        console.log(em.getComponent(entity, Character));

        // THE ENGINE ALSO USES THIS TYPE OF ARCHITECTURE, THIS WAY YOU CAN PUT PROPERTIES IN ANY ORDER
    };

    //WHAT IF YOU WANT SOME PROPERTIES OPTIONAL? THAT'S ALSO VERY SIMPLE
    const dataComponentExample3: Function = () => {
        class Character {
            private name: string;
            private description: string;
            private health: number;
            constructor(options: CharacterOptions = {}) {
                //this.name = options.name;
                //this.description = options.description;
                //this.health = options.health;
                //IF YOU JUST DO THIS YOU WOULD GET AN ERROR,
                //BECAUSE IF YOU DONT PASS IN ANY VALUE IT WOULD BE CONSIDERED 'null or 'undefined'
                //BUT YOU HAVE DEFINED THE TYPE TO BE 'string'  or 'number' SO IT HAS TO BE IN THOSE CATEGORIES

                //SOLUTION? ADD A DEFAULT VALUE

                this.name = options.name ?? 'default name';
                this.description = options.description ?? 'no description';
                this.health = options.health ?? 0;

                //IT MEANS IF THE 'options.name' PROPERTY IS UNDEFINED USE THE DEFAULT 'default name' INSTEAD!
            }
        };
        type CharacterOptions = {
            name?: string //ADD A '?' BEFORE
            description?: string,
            health?: number
        }
        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entity: EntityId = em.createEntity();
        em.addComponent(entity, Character, new Character()); //CAN LEAVE IT EMPTY AS WELL
        console.log(em.getComponent(entity, Character));
    };
    dataComponentExample2();
};

/*EXAMPLE 5: BASIC COMPONENTS EVERY ENTITY SHOULD HAVE*/
const example5: Function = () => {
    //NOW IF YOU WERE FOLLOWING THE PREVIOUS EXAMPLES YOU MIGHT REMEMBER SEEING AN ERROR
    // NOW LET'S TALK WHAT THIS ERROR WAS ABOUT

    //'engine.ts: 196 
    //Uncaught Error: ENTITY DOES NOT HAVE ENTITYACTIVE COMPONENT IN ISENTITYACTIVE() 0
    //at Engine.isEntityActive(engine.ts: 196: 47)
    //at renderingSystem(renderingSystem.ts: 17: 21)
    //at Engine.update(engine.ts: 81: 9)'

    //IT IS BASICALLY SAYING THAT THE ENTITY WE CREATE DOES NOT HAVE AN 'EntityActive' COMPONENT

    //BUT I DIDNT CREATED ANY 'EntityActive' COMPONENT? SO WHERE IS THIS COMING FROM?

    //THE ENGINE HAS SOME BUILT IN COMPONENTS WHICH HELP IN PERFORMING FUNCTIONS ENTITES

    //THERE ARE 4 BASIC COMPONENTS THAT ARE EVERY ENTITY MUST HAVE
    //1)Transform
    //2)EntityActive
    //3)Parent
    //4)Children

    //NOW AN ENTITY IS JUST AN IDEA, BUT THESE FOUR COMPONENTS ARE NEEDED FOR AN ENTITY TO OPERATE IN OUR GAME WORLD

    //SO LETS TRY ATTACHING ALL OF THEM

    const engine: Engine = new Engine();
    const em: EntityManager = engine.getEntityManager();
    const entity: EntityId = em.createEntity();
    em.addComponent(entity, Transform, new Transform());//TRANSFORM WITH DEFAULT VALUES
    em.addComponent(entity, EntityActive, new EntityActive());
    em.addComponent(entity, Parent, new Parent());
    em.addComponent(entity, Children, new Children());
    console.log(em.getAllComponents(entity));

    //AS YOU CAN SEE THIS TIME THERE IS NO ERROR
};

/*EXAMPLE 6: ENTITY TEMPLATES*/
const example6: Function = () => {
    //NOW IN EXAMPLE 5, WE DISCUSSED ATTACHING BASIC COMPONENTS TO AN ENTITY.
    //HOWEVER THAT IS TOO LONG! EVERYTIME WE CREATE A ENTITY WE WOULD HAVE TO ATTACH THOSE COMPONENTS
    //WHICH COULD EASILY BECOME TEDIOUS.
    //THAT'S WHERE TEMPLATES COMES IN,
    //TEMPLATES ATTACH THE NECCESSARY COMPONENTS FOR AN ENTITY

    //LETS SEE HOW THEY WORK!
    const engine: Engine = new Engine();
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine); //CREATING AN 'EntityTemplates' INSTANCE
    // AN ENTITY TEMPLATES INSTANCE CONTAINS THE TEMPLATES OR THE CODE

    //LETS CREATE AN ENTITY USING THE TEMPLATES THIS TIME
    const entity: EntityId = entityTemplates.createEmptyEntity();
    console.log("BEFORE MODIFICATION: ", em.getAllComponents(entity));

    //IT'S THE SAME AS DOING
    const templateExample: Function = (parentId?: EntityId): EntityId => {
        const id: EntityId = em.createEntity();
        em.addComponent(id, Transform, new Transform());
        em.addComponent(id, EntityActive, new EntityActive());
        em.addComponent(id, Parent, new Parent());
        em.addComponent(id, Children, new Children());
        if (parentId !== undefined) {
            engine.addParent(id, parentId); //ASSIGNING THE PARENT 
        };
        return id;
    };
    //AS YOU CAN SEE IT SIMPLIFIES OUR CODE BY USING BASIC TEMPLATES

    // WANT TO MODIFY PROPERTIES? YOU CAN CERTAINLY DO SO.
    //BY DEFAULT POSITION IS {x:0,y:0}, SO LET'S MODIFY IT
    const transform = em.getComponent(entity, Transform);
    if (transform) {
        transform.globalPosition.position = { x: 300, y: 300 };
    };
    console.log("AFTER MODIFICATION: ", em.getAllComponents(entity)); //CHECK THEM OUT AGAIN
};

/*EXAMPLE 7: SYSTEMS*/
const example7: Function = () => {
    //NOW WE KNOW ABOUT ENGINE,ENTITIES,COMPONENTS AND TEMPLATES
    //THE NEXT THING THAT COMES IS SYSTEMS

    //WE ALREADY KNOW THAT SYSTEM USES COMPONENTS, BUT LET'S GO A BIT DEEPER
    //AGAIN, LET'S IMAGINE YOU ARE MAKING A MILKSHAKE , YOU WOULD PROBABLY USE
    //FRUITS,MILK SOME DAILY PRODUCTS(COMPONENTS), YOU WOULDNT WANT TO PUT SOMETHING ELSE IN 
    //THE BLENDER(SYSTEMS). SO YOU CAREFULLY SELECT WHICH PRODUCTS(COMPONENTS) SHOULD GO IN BLENDER(SYSTEM).

    //THIS IS REALLY SIMILAR, THINK OF SYSTEM AS A THING THAT PERFORMS OPERATION ON THE COMPONENTS.
    //NOW WE DONT WANT ALL THE COMPONENTS TO GO IN A SYSTEM, SUCH AS A MOVEMENT SYSTEM SHOULDNT HAVE ATTACKING
    //COMPONENTS. OR A PLAYER SYSTEM SHOULDNT HAVE ENEMY COMPONENTS.

    //THAT'S WHERE WE USE A QUERY! A QUERY IS BASICALLY A FILTER WHICH ONLY LET'S SELECTIVE COMPONENTS GO IN.

    //YOU CAN LEARN MORE ABOUT HOW THIS ECS LIBARY WORKS IN DETAIL AT
    //https://github.com/yaseenrehan123/Entix-ECS
    //IT SHOULD GIVE YOU A BIT OF UNDERSTANDING ON HOW THIS WORKS.

    //SO MOVING ON, LETS CREATE OUR FIRST SYSTEM.

    const engine: Engine = new Engine();
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const entityA: EntityId = entityTemplates.createEmptyEntity();
    const entityB: EntityId = entityTemplates.createEmptyEntity();
    //TIME FOR A QUERY
    em.query('All', {
        transform/* <-- THIS NAME*/: Transform
    }, (id, { transform /* <-- AND THIS NAME SHOULD BE SAME!*/ }) => {

    });
    // IT'S BASICALLY LIKE THIS
    //1) DEFINE A FILTER TYPE 'All' | 'Any' | 'None'
    //2) DEFINE THE REQUIRED COMPONENT PLACEHOLDERS WITH THEIR TYPE
    // HERE 'transform' IS A PLACEHOLDER WE WILL LATER RECEIVE OUR VALUE AT WHILE 'Transform' IS THE COMPONENT TYPE
    //3) ADD A CALLBACK, AFTER DEFINING COMPONENT PLACEHOLDER, THIS IS WHERE WE GET OUR FILTERED DATA
    // BASICALLY HERE THE QUERY GIVES US THE FILTERED ENTITY THAT HAS THESE COMPONENTS, AND THE COMPONENTS TO MODIFY

    //SO NOW LET'S SEE WHAT A QUERY CAN DO
    em.query('All', {
        transform: Transform
    }, (id, { transform }) => {
        console.log(id, transform);
        //THIS BASICALLY RUNS ONCE, AND CONSOLES.LOG EACH ENTITY ID AND IT'S TRANSFORM COMPONENT!
    });

    em.query('All', {
        sprite: Sprite
    }, (id, { sprite }) => {
        console.log("SPRITE QUERY RAN IN EXAMPLE 7"); //A QUERY DOESNT RUN IF IT DOES NOT FIND ANY ENTITIES WITH MATCHED COMPONENTS
    });// WE HAVE NO SPRITE ENTITIES IN THIS EXAMPLE.
};

/*EXAMPLE 8: MORE COMPLEX STUFF WITH QUERIES*/
const example8: Function = () => {
    //BEFORE MOVING ON TO MORE FEATURES, LET'S FIRST DISCUSS WHAT COMPLEX STUFF WE CAN DO WITH QUERIES BY..
    //1)CREATE A LINE THAT'S GOES TOWARDS ENTITY POSITIONS
    //2)MAKE ENTITIES SPAWN AT RANDOM POSITION
    //3)MAKE THOSE ENTITIES MOVE

    //THIS MIGHT SOUND COMPLEX BUT WE WILL GO STEP BY STEP

    const lineExample1: Function = () => {
        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entityTemplates: EntityTemplates = new EntityTemplates(engine);
        const ctx: CanvasRenderingContext2D = engine.getCtx();
        engine.addStartFunction(start.bind(this));
        engine.addUpdateFunction(update.bind(this));
        function start() {
            const id: EntityId = entityTemplates.createEmptyEntity();
            const transform = em.getComponent(id, Transform);
            if (transform) {
                transform.globalPosition.position = { x: 300, y: 300 };
            };

        };
        function update() {
            //DOING A QUERY
            em.query('All', {
                transform: Transform
            }, (id, { transform }) => {
                const targetPos: Vector2 = transform.globalPosition.position;
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(0, 0);
                ctx.lineTo(targetPos.x, targetPos.y);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            });
        };
        //SEE THE LINE 
    };

    //NOW LETS GO TO SECOND EXAMPLE
    const lineExample2: Function = () => {
        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entityTemplates: EntityTemplates = new EntityTemplates(engine);
        const ctx: CanvasRenderingContext2D = engine.getCtx();
        engine.addStartFunction(start.bind(this));
        engine.addUpdateFunction(update.bind(this));
        function start() {
            spawnEntitiesRandomly(10);
        };
        function update() {
            //SAME AS 'lineExample1'
            em.query('All', {
                transform: Transform
            }, (id, { transform }) => {
                const targetPos: Vector2 = transform.globalPosition.position;
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(0, 0);
                ctx.lineTo(targetPos.x, targetPos.y);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            });
        };
        function spawnEntitiesRandomly(max: number) {
            const canvasBounds: Vector2 = engine.getCanvasBounds();//RETURNS CANVAS WIDTH AND HEIGHT, 680X600
            for (let i = 0; i < max; i++) { //DO A FOR LOOP
                const randomPos: Vector2 = {
                    x: engine.getRandomFloat(0, canvasBounds.x), //RANDOM FLOAT BETWEEN 0 AND 680
                    y: engine.getRandomFloat(0, canvasBounds.y) //RANDOM FLOAT BETWEEN 0 AND 600
                }
                const id: EntityId = entityTemplates.createEmptyEntity();
                const transform = em.getComponent(id, Transform);
                if (transform) {
                    transform.globalPosition.position = randomPos;
                }
            }
        }
        //NOW EACH TIME ENTITIES WITH SPAWN ON DIFFERENT LOCATIONS AND LINES WILL BE DRAWNED TOWARDS THEM
    };

    const lineExample3: Function = () => {
        //WE NEED A COMPONENT TO HAVE ENTITIES DATA SUCH AS MOVESPEED AND TARGET POSITION
        //SO LET'S DECIDE WHAT WE NEED,
        //1) WE PROBABLY WOULD NEED A MOVESPEED
        //2) ALSO A TARGET POSITION TO MOVE TO THE TARGET
        //3) ALSO A VARIABLE TO CHECK IF ENTITY REACHED POSITION WOULD BE HELPFUL
        class Unit {
            public moveSpeed: number = 50;
            public targetPos: Vector2 = { x: 0, y: 0 };
            public reachedTargetPos: boolean = false;
        };
        //THERE REALLY IS NOTHING WE WOULD WANT TO PUT IN THE CONSTRUCTOR AS ALL UNITS WOULD 
        //HAVE SAME SPEED, AS FOR TARGETPOS, WE WILL SET IT THROUGH CODE
        //BUT IF YOU WANT DIFFERENT SPEEDS FOR ENTITIES YOU COULD CERTAINLY USE CONSTRUCTOR OR CREATE AN OPTIONS

        const engine: Engine = new Engine();
        const em: EntityManager = engine.getEntityManager();
        const entityTemplates: EntityTemplates = new EntityTemplates(engine);
        const ctx: CanvasRenderingContext2D = engine.getCtx();
        engine.addStartFunction(start.bind(this));
        engine.addUpdateFunction(update.bind(this));
        function start() {
            spawnEntitiesRandomly(5);
        };
        function update() {
            movingEntitiesSystem();
            renderingRaysSystem();
        };
        function movingEntitiesSystem() {
            //SO WHAT DO WE NEED IN THIS QUERY?
            //WE WOULD PROBABLY NEED THE 'Unit' COMPONENT FOR SPEED AND TARGETPOS
            //ALSO 'Transform' COMPONENT TO MAKE THE ENTITIES MOVE
            const canvasBounds: Vector2 = engine.getCanvasBounds();
            const deltaTime: number = engine.getDeltaTime();
            em.query('All', {
                unit: Unit,
                transform: Transform
            }, (id, { unit, transform }) => {
                const pos: Vector2 = transform.globalPosition.position;
                //NOW HOW DO WE GET THE TARGET POS? WE WILL RANDOMIZE IT LIKE WE DID WHEN SPAWNING ENTITIES
                //BUT! WE ONLY WANT TO RANDOMIZE IT ONCE ENTITIY REACHES IT, NOT EVERYTIME!
                //SO WE WILL GET THE 'targetPos' STORED IN UNIT
                const targetPos: Vector2 = unit.targetPos;
                //GETTING THE MOVEMENT DIRECTION!
                const moveDirection: Vector2 = {
                    x: targetPos.x - pos.x, //SUBTRACT POS X  FROM TARGET POS
                    y: targetPos.y - pos.y //SUBTRACT POS Y  FROM TARGET POS
                };
                const distanceToTarget: number = Math.hypot(moveDirection.x, moveDirection.y);
                if (distanceToTarget <= 2) { //HAS REACHED TARGET YETs
                    unit.targetPos = {
                        x: engine.getRandomFloat(0, canvasBounds.x),
                        y: engine.getRandomFloat(0, canvasBounds.y)
                    }
                }
                else {
                    const normalizedMoveDirection: Vector2 = { //NORMALIZING THE DIRECTION, WE WILL USE THIS FOR MOVEMENT
                        x: moveDirection.x / distanceToTarget,
                        y: moveDirection.y / distanceToTarget
                    };
                    //NOW MOVING ENTITY
                    pos.x += normalizedMoveDirection.x * unit.moveSpeed * deltaTime;
                    pos.y += normalizedMoveDirection.y * unit.moveSpeed * deltaTime;
                }
            });
        };
        function renderingRaysSystem() { //AS A SEPARATE FUNCTION
            //SAME AS BEFORE
            em.query('All', {
                transform: Transform
            }, (id, { transform }) => {
                const targetPos: Vector2 = transform.globalPosition.position;
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.moveTo(0, 0);
                ctx.lineTo(targetPos.x, targetPos.y);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            });
        };
        function spawnEntitiesRandomly(max: number) {
            const canvasBounds: Vector2 = engine.getCanvasBounds();//RETURNS CANVAS WIDTH AND HEIGHT, 680X600
            for (let i = 0; i < max; i++) { //DO A FOR LOOP
                const randomPos: Vector2 = {
                    x: engine.getRandomFloat(0, canvasBounds.x), //RANDOM FLOAT BETWEEN 0 AND 680
                    y: engine.getRandomFloat(0, canvasBounds.y) //RANDOM FLOAT BETWEEN 0 AND 600
                }
                const id: EntityId = entityTemplates.createEmptyEntity();
                em.addComponent(id, Unit, new Unit()); //ADD UNIT COMPONENT *NEW*
                const transform = em.getComponent(id, Transform);
                const unit = em.getComponent(id, Unit);
                if (!transform) throw new Error("TRANSFORM NOT FOUND!")
                transform.globalPosition.position = randomPos;

                if (!unit) throw new Error("UNIT NOT FOUND!");
                unit.targetPos = transform?.globalPosition.position; //ASSIGN FIRST TARGET AS CURRENT POS
            }
        };
        //AND HERE WE GO! WE HAVE ENTITIES THAT ARE RANDOMLY MOVING WITH RAYS FOLLOWING THEM
        //DONT WORRY IF YOU DONT GOT ALL OF IT, YOU CAN DEFINATELY PRACTICE DOING SOMETHING SIMPLERER AND COMING BACK TO IT LATER

    };
};

/*EXAMPLE 9: COMPONENT DEFINING RULES*/
const example9:Function =()=>{
    //NOW LET'S TAKE A BIT REFRESHER AND DICUSS COMPONENTS AGAIN
    //THERE ARE SOME RULES THAT I LIKE TO FOLLOW AND SOME ASPECS OF ENGINE ARE BUILT ON THAT
    //BUT IT'S TOTALLY VALID IF YOU DISAGREE WITH THEM, YOU ARE FREE TO USE YOUR OWN METHODS
    //JUST USING THIS TO MAKE YOU FAMILIAR WITH HOW SOME ENGINE COMPONENTS USE DATA

    //SINGLE FIELDS
    const componentExample1:Function = () =>{
        class Name{
            //WHEN A COMPONENT HAS A SINGLE FIELD OR PROPERTY, IT'S BEST TO HAVE THE NAME SELF EXPLANATORY
            //AND NAME THE PROPERTY AS VALUE
            public value:string = '';

            //IT IS THAN YOUR CHOICE TO DIRECTLY PUT IT IN THE CONSTRUCTOR OR CREATE OPTIONS
            //I WENT WITH THE OPTIONS ONE, CAUSE IT MIGHT BE BIT COMFUSING WITH SOME COMPONENTS HAVING OPTIONS WHILE OTHERS NOT

            //constructor(value:string){ *BOTH VALID*
            //
            //};
            //constructor(options:NameOptions){  *BOTH VALID*
            //
            //}
        }
    };

    const componentExample2:Function = () =>{
        //YOU MIGHT OR MIGHT NOT ALREADY KNOW THIS BUT I WOULDN'T ADVISE GOING FULL GENERAL WITH COMPONENTS
        //NOW WHAT DO I MEAN BY IT? 
        //SOME PEOPLE MIGHT CREATE A 'MoveSpeed' COMPONENT FOR EVERY ENTITY THAT MOVES 
        //A 'Health' COMPONENT FOR EVERY ENTITY THAT HAS HEALTH.

        //IT COULD GET EXTREMELY CONFUSING IF YOUR GAME GET'S BIGGER AND YOU DONT CAREFULLY PLAN IT.
        
        //NOW IT ALL DEPENDS ON THE TYPE OF YOUR PROJECT, FOR SOME PROJECTS IT'S THE WAY TO GO
        //BUT FOR OTHERS IT MIGHT ADD UNNECCSSARY COMPLICATIONS.
        //THAT IS FOR YOU TO DECIDE WHICH OPTION YOU WANT TO GO WITH!
    };
};

/*
CONGRACULATIONS! YOU HAVE COMPLETED THE GETTING STARTED GUIDE. BUT THEIR IS WAY MORE TO UNCOVER
CHECK OUT THE VARIOUS DOCS DETAILING VARIOUS COMPONENTS, THEIR PROPERTIES AND COMPLEX TOPICS HOW TO USE INPUT,DRAW A SPRITE,
DRAW SHAPES ETC!
*/
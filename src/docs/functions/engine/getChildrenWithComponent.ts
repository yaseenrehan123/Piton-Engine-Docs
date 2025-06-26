import { Alignment, Button, Engine, EntityActive, EntityTemplates, Text, Transform } from "piton-engine";
import type { EntityId, EntityManager, Vector2 } from "piton-engine";
/*GET CHILDREN WITH COMPONENT*/

const example1: Function = () => {

    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));
    function start() {
        const gameSceneId: EntityId = entityTemplates.createSceneEntity('gameScene');
        createRandomButtons(15);
    };
    function update() {

    }
    function createRandomButtons(max: number) {
        const gameSceneId: EntityId | null = engine.getSceneByName('gameScene');
        if (gameSceneId === null) throw new Error("GAME SCENE ID NOT FOUND!");
        const canvasBounds: Vector2 = engine.getCanvasBounds();
        for (let i = 0; i < max; i++) {
            const randomPos: Vector2 = {
                x: engine.getRandomFloat(0, canvasBounds.x),
                y: engine.getRandomFloat(0, canvasBounds.y)
            };
            const id: EntityId = entityTemplates.createRectButtonEntity(200, 100, `BUTTON ${i}`, gameSceneId);
            const transform = em.getComponent(id, Transform);
            const button = em.getComponent(id, Button);
            if (!transform) throw new Error("TRANSFORM COMPONENT NOT FOUND!");
            if (!button) throw new Error("BUTTON COMPONENT NOT FOUND!");
            transform.globalPosition.position = randomPos;

            button.onJustPressed = () => {
                console.log("ALL BUTTONS IN THIS SCENE DISABLED!")
                const buttonsIdsInGameScene: EntityId[] = engine.getChildrenWithComponent(gameSceneId, Button);
                buttonsIdsInGameScene.forEach((buttonId: EntityId) => {
                    const entityActive = em.getComponent(buttonId, EntityActive);
                    if (entityActive) {
                        entityActive.value = false
                    }
                })
            }
        }
    }
    //THIS ONLY DISABLED BUTTONS IN THIS SCENE, A QUERY WOULD DISABLE THEM IN ALL SCENES
};
example1();
import { Engine, Input, EntityTemplates, Shape, Transform, EntityActive, } from "piton-engine";
import type { EntityId, EntityManager, Vector2 } from "piton-engine";
/*GET POSITION*/

const example1: Function = () => {
    class Dot { }//TAG
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const input: Input = engine.getInput();
    let dotsMovementEnabled: boolean = false;
    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));
    function start() {
        const id: EntityId = entityTemplates.createCircleEntity(5);
        const shape = em.getComponent(id, Shape);
        if (shape) {
            shape.color = 'red';
        }
        em.addComponent(id, Dot, new Dot());
        disableDots();
    }
    function update() {
        if (input.getJustPressed()) {
            enableDots();
            dotsMovementEnabled = true;
        }
        if (input.getJustReleased()) {
            disableDots();
            dotsMovementEnabled = false;
        }
        if (dotsMovementEnabled) {
            const inputPos: Vector2 = input.getPosition();
            moveDots(inputPos);
        }
        /*
        if (input.getJustPressed() || input.getPressed()) {
            const inputPos: Vector2 = input.getPosition();
            moveDots(inputPos);
        };
        */

    };
    function enableDots() {
        em.query('All', {
            entityActive: EntityActive,
            dot: Dot
        }, (id, { entityActive, dot }) => {
            entityActive.value = true;
        });
    }
    function disableDots() {
        em.query('All', {
            entityActive: EntityActive,
            dot: Dot
        }, (id, { entityActive, dot }) => {
            entityActive.value = false;
        });
    };
    function moveDots(inputPos: Vector2) {
        em.query('All', {
            transform: Transform,
            dot: Dot
        }, (id, { transform, dot }) => {
            let pos: Vector2 = transform.globalPosition.position;
            pos = {
                x: inputPos.x,
                y: inputPos.y
            };
            transform.globalPosition.position = pos;
        });
    }
};
example1();
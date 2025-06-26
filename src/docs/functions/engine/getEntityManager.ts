import { Engine, Transform, type EntityId, type Vector2 } from "piton-engine";
import { EntityTemplates, type EntityManager } from "piton-engine";
/*GET ENTITY MANAGER*/


const example1: Function = () => {
    type LineData = {
        entityId: EntityId;
        currentPos: Vector2;
    }
    const engine: Engine = new Engine({});
    const em: EntityManager = engine.getEntityManager();
    const entityTemplates: EntityTemplates = new EntityTemplates(engine);
    const ctx: CanvasRenderingContext2D = engine.getCtx();

    const lines: LineData[] = [];
    const speed: number = 200;

    engine.addStartFunction(start.bind(this));
    engine.addUpdateFunction(update.bind(this));
    function start() {

        createEntitiesAtRandomPos(20);

        em.query('All', { //INIT 
            transform: Transform
        }, (id, { transform }) => {
            lines.push({
                entityId: id,
                currentPos: { x: 0, y: 0 }
            });
        });
    }
    function update() {
        const deltaTime: number = engine.getDeltaTime();

        for (const line of lines) {
            const transform = em.getComponent(line.entityId, Transform);
            if (!transform) throw new Error("TRANSFORM NOT FOUND IN UPDATE!");

            const targetPos: Vector2 = transform.globalPosition.position;
            const pos: Vector2 = line.currentPos;

            const moveDir: Vector2 = {
                x: targetPos.x - pos.x,
                y: targetPos.y - pos.y
            };
            const distance: number = Math.hypot(moveDir.x, moveDir.y);
            if (distance > 1) {
                const normalizedMoveDir: Vector2 = {
                    x: moveDir.x / distance,
                    y: moveDir.y / distance
                }
                pos.x += normalizedMoveDir.x * speed * deltaTime;
                pos.y += normalizedMoveDir.y * speed * deltaTime;
            }

            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.moveTo(0, 0);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    };
    function createEntitiesAtRandomPos(maxLimit: number) {
        for (let i = 0; i < maxLimit; i++) {
            const canvasBounds: Vector2 = engine.getCanvasBounds();
            const randomPos: Vector2 = {
                x: engine.getRandomFloat(0, canvasBounds.x),
                y: engine.getRandomFloat(0, canvasBounds.y)
            };
            const id: EntityId = entityTemplates.createEmptyEntity();
            const transform = em.getComponent(id, Transform);
            if (!transform) throw new Error("TRANSFORM NOT FOUND IN createEntitiesAtRandomPos");
            transform.globalPosition.position = randomPos;
        }

    }
};


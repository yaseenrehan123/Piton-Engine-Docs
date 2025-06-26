import { Engine, type Vector2 } from "piton-engine";

/*GET CANVAS BOUNDS*/

const example1: Function = () => {
    const engine: Engine = new Engine({});
    const ctx: CanvasRenderingContext2D = engine.getCtx();
    const canvasBounds: Vector2 = engine.getCanvasBounds();//WIDTH/HEIGHT
    const randomTargetPos: Vector2 = {
        x: engine.getRandomFloat(0, canvasBounds.x),
        y: engine.getRandomFloat(0, canvasBounds.y)
    };
    const pos: Vector2 = { x: 0, y: 0 };

    const speed: number = 200;
    engine.addUpdateFunction(update.bind(this));
    function update() {
        const moveDir: Vector2 = {
            x: randomTargetPos.x - pos.x,
            y: randomTargetPos.y - pos.y
        };
        const distance: number = Math.hypot(moveDir.x, moveDir.y);
        const normalizedMoveDir: Vector2 = {
            x: moveDir.x / distance,
            y: moveDir.y / distance
        };
        if (distance > 3) {
            pos.x += normalizedMoveDir.x * speed * engine.getDeltaTime();
            pos.y += normalizedMoveDir.y * speed * engine.getDeltaTime()
        }

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(0, 0);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
};
example1();
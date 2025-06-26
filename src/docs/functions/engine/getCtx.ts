import { Engine } from "piton-engine";
import type { Vector2 } from "piton-engine";

/*GET CTX*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    const ctx:CanvasRenderingContext2D = engine.getCtx();
    const linePos:Vector2 = {x:0,y:0};
    engine.addUpdateFunction(update.bind(this));
    function update(){
        linePos.x++;
        linePos.y++;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(0,0);
        ctx.lineTo(linePos.x,linePos.y);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
};

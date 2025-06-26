import { Engine, Input, type Vector2 } from "piton-engine";

/*GET INPUT*/

const example1:Function =()=>{
    const engine:Engine = new Engine({});
    const ctx:CanvasRenderingContext2D = engine.getCtx();
    const input:Input = engine.getInput();
    engine.addUpdateFunction(update.bind(this));
    function update(){
        if(input.getJustPressed()){
            console.log("INPUT JUST PRESSED!");
        }
        if(input.getPressed()){
            console.log("INPUT PRESSED");
        }
        if(input.getJustReleased()){
            console.log("INPUT JUST RELEASED")
        }

        if(input.getJustPressed() || input.getPressed()){
            const pos:Vector2 = input.getPosition();
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.moveTo(0,0);
            ctx.lineTo(pos.x,pos.y);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    }
};
example1();
import { Engine } from "piton-engine";

/*GET JSON*/

const example1:Function =()=>{
    const engine:Engine = new Engine({
        resources:{
            jsons:{
                heroesData:'/data/heroesData.json'
            }
        }
    });
    engine.addStartFunction(start.bind(this));
    function start(){
        const heroesData = engine.getJSON('heroesData');
        if(heroesData){
            console.log(heroesData);
        }
    }
};

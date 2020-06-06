/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Model from '../model/model';
import createRect from '../model/model';

class View {
    
    constructor () {

        this.model = new Model();


        this.test = (text) => console.log(text);
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });

        document.querySelector('#gameScreen').appendChild(this.app.view);
    }

    drawShape () {
    
          this.app.stage.addChild(this.model.addShape);
         
 
    }
      
    
}

export default View
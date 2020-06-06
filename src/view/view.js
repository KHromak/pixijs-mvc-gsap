/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Model from '../model/model';
import TweenMax from '../../pixijs/TweenMax';



class View {
    
    constructor () {

        this.model = new Model();

        this.renderer = PIXI.autoDetectRenderer([])
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });
       
        document.querySelector('#gameScreen').appendChild(this.app.view);
    }


    drawShape (form) {
        let shape = this.app.stage.addChild(form);
        return shape;
    }
    
    fallingCycleShape (shape) {
        this.killShape(shape);
        this.fallDownShape()
    }

    fallDownShape () {
        let shape = this.drawShape(this.model.createRect())
        
        TweenMax.to(shape, 1, {y:40, onComplete:()=>this.fallingCycleShape(shape)})
    }

    killShape (shape) {
        this.app.stage.removeChild(shape);
    }
    
    
}

export default View
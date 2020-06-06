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


    drawShape (figure) {

        let shape = this.app.stage.addChild(figure);
        return shape;
    }  

    fallDownShape () {
        let shape = this.drawShape(this.model.createRect())
        TweenMax.to(shape, 44, {y:600})
    }
    
}

export default View
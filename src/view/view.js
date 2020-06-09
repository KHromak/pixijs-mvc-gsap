/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Model from '../model/model';
import TweenMax from '../../pixijs/TweenMax';

class View {

    constructor() {

        this.model = new Model();

        this.app = new PIXI.Application({
            width: this.model.config.width,
            height: this.model.config.height,
            backgroundColor: 0x1099bb,
            // resizeTo: window 
        });
        this.app.renderer.autoResize = true;
        document.getElementById('gameScreen').appendChild(this.app.renderer.view);

    }

    interactive() {
        this.app.stage.interactive = true;
        this.app.stage.hitArea = new PIXI.Rectangle(0, 0, this.model.config.width, this.model.config.height);
    }

    drawShape(form) {
        let shape = this.app.stage.addChild(form);
        return shape;
    }

    fallDownShape(randomShape) {

        let drawedShape = this.drawShape(randomShape);

        return TweenMax.to(
            drawedShape,
            this.model.config.gravity,
            {
                y: this.model.config.height * 2.5,
                onComplete: () => this.killShape(drawedShape),
                ease: Power2.easeIn
            })



        // t.duration(this.model.config.gravity)
    }

    // gravityControl(object, value) {
    //     object.duration(value)
    // }



    killShape(shape) {
        this.app.stage.removeChild(shape);
    }

    clickOnArea(shape) {
        if (shape) {
            this.killShape(shape)
        }
    }


}

export default View
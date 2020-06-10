/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Model from '../model/model';
import TweenMax from '../../pixijs/TweenMax';
import Controller from '../controller/controller';

class View {

    constructor() {

        this.model = new Model();

        this.app = new PIXI.Application({
            width: this.model.config.width,
            height: this.model.config.height,
            backgroundColor: 0x1099bb,
        });
        
        this.app.renderer.autoResize = true;
        document.getElementById('gameScreen').appendChild(this.app.renderer.view);

    }

    startObservers() {

        this.model.subscribe(function initShapeObserver (shape){
    console.log(shape)
            if (shape) {
                shape.interactive = true;
                // notify the controller about new shape for add handlers
                this.controller.registerNewShape(shape);
          
                this.app.stage.addChild(shape);
            }
        })


        this.model.subscribe(function gravityChangeObserver (e){
            let element = document.getElementById('gravityValue');
            if (element) {
                element.value = e.gravity;
                console.log(e.gravity, 'e.gravity')
                console.log(e, 'e')
            }
        })
    }

    interactive() {
        this.startObservers();
        this.app.stage.interactive = true;
        this.app.stage.buttonMode = true;
        this.app.stage.hitArea = new PIXI.Rectangle(0, 0, this.model.config.width, this.model.config.height/this.app.renderer.resolution);
    }

    drawShape(figure) {
        let shape = this.app.stage.addChild(figure);
        return shape;
    }



    fallDownShape(randomShape) {

        let drawedShape = this.drawShape(randomShape);
 
        TweenMax.to(
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


}

export default View
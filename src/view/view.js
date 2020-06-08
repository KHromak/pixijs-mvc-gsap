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
        this.app.stage.interactive = true;
        document.querySelector('#gameScreen').appendChild(this.app.view);

    }


    drawShape(form) {
        let shape = this.app.stage.addChild(form);
        return shape;
    }

    fallingCycleShape(shape) {
        this.killShape(shape);
        // this.fallDownShape()
    }

    //нажатие на фигуру вызывает kill

    //fallDownShape ( принимает shape ) определенной формы из модел, через рандомайзер,
    // написать рандомайзер 
    // наделать разных форм по тз
    // поменять метод падения

    fallDownShape(randomShape) {

        let drawShape = this.drawShape(randomShape)//вот этот метод перенести отсюда
        
        
        return TweenMax.to(
            drawShape,
            6,
            {
                y: this.model.config.height * 2,
                onComplete: () =>  this.killShape(drawShape),
                ease:Power1.easeIn
               
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
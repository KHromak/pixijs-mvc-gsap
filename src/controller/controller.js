/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */
import Model from '../model/model';

class Controller {

    constructor(model, view) {

        this.model = model;
        this.view = view;

        this.numberOfShapes = document.querySelector('#numberOfShapes');
        this.occupiedArea = document.querySelector('#occupiedArea');
        this.increaseShapes = document.querySelector('#increaseShapes');
        this.decreaseShapes = document.querySelector('#decreaseShapes');
        this.increaseGravity = document.querySelector('#increaseGravity');
        this.decreaseGravity = document.querySelector('#decreaseGravity');

        this.initGame();
    }

    initGame() {

        this.model.broadcast({ gravity: this.model.config.gravity });
        this.model.broadcast({ shapesPerSecond: this.model.config.shapesPerSecond });

        this.view.app.stage.on('click', (e) => {
            let position = (e.data.global);
            this.view.fallDownShape(this.model.randomShapePicker(position));
        });

        this.view.interactive();
        this.buttonListeners();
        this.startSpawingShapes();
    }

    buttonListeners() {
        this.increaseGravity.addEventListener('click', (e) => {
            this.model.increaseGravityAction();
            this.model.broadcast({ gravity: this.model.config.gravity })
        });

        this.decreaseGravity.addEventListener('click', (e) => {
            this.model.decreaseGravityAction();
            this.model.broadcast({ gravity: this.model.config.gravity })
        });

        this.increaseShapes.addEventListener('click', (e) => {
            this.model.increaseShapesAction();
            console.log(this.model.config.shapesPerSecond, 'shapes from control')
            this.model.broadcast({ shapesPerSecond: this.model.config.shapesPerSecond })
        });

        this.decreaseShapes.addEventListener('click', (e) => {
            this.model.decreaseShapesAction();
            console.log(this.model.config.shapesPerSecond, 'shapes from control')
            this.model.broadcast({ shapesPerSecond: this.model.config.shapesPerSecond })
        });

    }

    createShapes(shapesPerSecond) {
        for (let i = 0; i < shapesPerSecond; i++) {
            let randomShape = this.model.randomShapePicker();
            this.view.fallDownShape(randomShape);
        }
    }

    startSpawingShapes() {
        setInterval(() => {
            this.createShapes(this.model.config.shapesPerSecond);
        }, this.model.config.delayBetweenSpawn);
    }

    // registerNewShape(shape) {

    //     if (shape) {
    //         shape.on('click', () => {
    //             this.model.removeShape(shape);
    //         });
    //     }
    // }

    // setHitAreaOnShape() {
    //     figure.hitArea = figure.getBounds();
    // }

    // initShape () {
    //     let figure = new PIXI.Graphics();
    // }

}

export default Controller;
/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */
import Model from '../model/model';
import View from '../view/view';

class Controller {
    constructor(model, view) {
        this.model = new Model();
        this.view = new View();

        this.numberOfShapes = document.querySelector('#numberOfShapes');
        this.occupiedArea = document.querySelector('#occupiedArea');
        this.increaseShapes = document.querySelector('#increaseShapes');
        this.decreaseShapes = document.querySelector('#decreaseShapes');
        this.increaseGravity = document.querySelector('#increaseGravity');
        this.decreaseGravity = document.querySelector('#decreaseGravity');

        this.initGame ()
    }

    initGame () {
        this.view.interactive();
        this.startSpawingShapes();
        this.buttonListeners();

        this.view.app.stage.on('click', (e) => {
           console.log(e.data.global)
            // this.view.fallDownShape(this.model.randomShapePicker());
        });

        

    }

    buttonListeners () {
        this.increaseGravity.addEventListener('click', (e) => {
            e.preventDefault();
            this.model.increaseGravityAction();
            // TweenMax.to(items[2].anim, 2, {timeScale:50})
        });
    }

    // gravityControl (object, value) {
    //     object.duration(value)
    // }

    createShapes(shapesQuantity) {
        for(let i = 0; i < shapesQuantity; i++) {
          this.view.fallDownShape(this.model.randomShapePicker());
        }
    }

    startSpawingShapes() {
        setInterval(() => {
            this.createShapes(this.model.config.shapesQuantity);
        }, this.model.config.delayBetweenSpawn);
    }

    




}

export default Controller;
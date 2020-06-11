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

        this.view.onIncreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond + 1));
        this.view.onDecreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond - 1));

        this.view.onIncreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity + 0.5));
        this.view.onDecreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity - 0.5));

        this.view.onWhiteSpaceClicked.subscribe(position => {
            this.view.fallDownShape(this.model.randomShapePicker(position));
        });

        this.startSpawingShapes();
    }

    createShapes(shapesPerSecond) {
        for (let i = 0; i < shapesPerSecond; i++) {
            let randomShape = this.model.randomShapePicker();
            this.view.fallDownShape(randomShape);
        }
    }

    startSpawingShapes() {
        setInterval(() => {
            this.createShapes(this.model.shapesPerSecond);
        }, this.model.config.delayBetweenSpawn);
    }

}

export default Controller;
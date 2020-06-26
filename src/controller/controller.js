/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */

import TweenMax from '../../graphics/TweenMax';

class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.shapes = [];

        this.view.onIncreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity + 0.5));
        this.view.onDecreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity - 0.5));

        this.view.onIncreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond + 1));
        this.view.onDecreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond - 1));

        this.view.onCanvasClicked.subscribe(position => this.selectDirectionAndDrawRandomShape(position));
        this.view.onShapeClicked.subscribe(shapeInstance => this.removeShapeAndRedrawSimilar(shapeInstance));
        this.view.onShapeExit.subscribe(shapeInstance => this.removeShape(shapeInstance));

        this.startSpawningShapes();

        PIXI.Ticker.shared.add((delta) => {
            this.animate(delta);
            this.calculateCounters();
        });
    }

    startSpawningShapes() {
        this.createShapes(this.model.shapesPerSecond);

        TweenMax.delayedCall(this.model.config.delayBetweenSpawn,
            () => this.startSpawningShapes());
    }

    createShapes(shapesPerSecond) {
        for (let i = 0; i < shapesPerSecond; i++) {
            let position = this.model.getRandomSpawnPosition();
            this.drawRandomShape(position);
        }
    }

    selectDirectionAndDrawRandomShape(clickPosition) {
        let position = {};
        position.x = clickPosition.x;
        position.y = clickPosition.y;
        position.direction = this.model.calculateDirection()
        this.drawRandomShape(position);
    }

    drawRandomShape(position) {
        position[this.model.calculateDirection()]
        let shapeInstance = this.model.createRandomShape(position);
        this.drawShape(shapeInstance);
    }

    drawShape(shapeInstance) {
        this.view.drawShape(shapeInstance);
        this.shapes.push(shapeInstance);
    }

    redrawShape(shapeInstance) {
        // re-create same shape type on same position but with another random color
        let newInstance = shapeInstance.clone();
        this.removeShape(shapeInstance);
        this.drawShape(newInstance);
    }

    removeShape(shapeInstance) {
        this.view.removeShape(shapeInstance);
        this.shapes = this.shapes.filter(shape => shape !== shapeInstance);
    }

    removeShapeAndRedrawSimilar(shapeInstance) {
        this.removeShape(shapeInstance);
        this.redrawShapesOfType(shapeInstance.constructor);
    }

    redrawShapesOfType(shapeType) {
        this.shapes.forEach(shapeInstance => {
            if (shapeInstance instanceof shapeType) {
                this.redrawShape(shapeInstance);
            }
        });
    }

    calculateCounters() {
        let count = 0;
        let square = 0;

        this.shapes.forEach(shapeInstance => {
            let shape = shapeInstance.figure;
            let positionY = shape.position.y + shape.hitArea.y;
            let topPosition = positionY - shape.height;
            let bottomPosition = positionY + shape.height;
            let positionX = shape.position.y + shape.hitArea.y;
            let leftPosition = positionX - shape.width;
            let rightPosition = positionX + shape.width;

            if ((bottomPosition > 0 && topPosition < this.model.config.height && shapeInstance.position.direction === 'toBottom') ||
                ((rightPosition > 0 && leftPosition < this.model.config.width && shapeInstance.position.direction === 'toRight'))) {
                count++;
                square += shape.width * shape.height;
            }

        });

        this.model.setCount(count);
        this.model.setSquare(Math.round(square));
    }

    animate(delta) {
        this.shapes.forEach(shapeInstance => {
            let shape = shapeInstance.figure;
            if (shapeInstance.direction == 'toBottom') this.animateToBottom(delta, shapeInstance, shape);
            else if (shapeInstance.direction == 'toRight') this.animateToRight(delta, shapeInstance, shape);
        });
    }

    animateToRight(delta, shapeInstance, shape) {
        if (shape.position.y > this.model.config.height - shape.hitArea.y) {
            this.removeShape(shapeInstance);
        }
        else {
            shape.position.x += this.model.gravity * delta;
        }
    }

    animateToBottom(delta, shapeInstance, shape) {
        if (shape.position.x > this.model.config.width - shape.hitArea.x) {
            this.removeShape(shapeInstance);
        }
        else {
            shape.position.y += this.model.gravity * delta;
        }
    }
}

export default Controller;
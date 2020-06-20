/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */

import TweenMax from '../../graphics/TweenMax';
import Circle from '../shape/circle';
import Ellipse from '../shape/ellipse';
import Hexagon from '../shape/hexagon';
import Triangle from '../shape/triangle';
import Rectangle from '../shape/rectangle';
import Pentagon from '../shape/pentagon';
import Star from '../shape/star';

class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.shapes = [];

        this.view.onIncreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity + 0.5));
        this.view.onDecreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity - 0.5));

        this.view.onIncreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond + 1));
        this.view.onDecreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond - 1));

        this.view.onCanvasClicked.subscribe(position => this.drawRandomShape(position));
        // this.view.onShapeClicked.subscribe(shapeInstance => this.removeShape(shapeInstance.figure));
        this.view.onShapeClicked.subscribe(clickedShapeInstance => this.markAndRemoveShapes(clickedShapeInstance));

        this.view.onShapeExit.subscribe(shape => this.removeShape(shape));

        this.startSpawningShapes();
        this.startCalculations();
    }

    drawRandomShape(position) {
        let shapeInstance = this.model.createRandomShape(position);
        this.view.drawShape(shapeInstance);
        this.shapes.push(shapeInstance);
    }

    markAndRemoveShapes(clickedShapeInstance) {
        this.markSameShapes(clickedShapeInstance)
        this.removeShape(clickedShapeInstance.figure)
    }

    removeShape(shape) {
        this.view.removeShape(shape);

        this.shapes = this.shapes.filter(shapeInstance => shapeInstance.figure !== shape);
    }

    markSameShapes(clickedShapeInstance) {

        switch (true) {
            case clickedShapeInstance instanceof Circle:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Circle) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Ellipse:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Ellipse) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Triangle:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Triangle) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Rectangle:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Rectangle) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Pentagon:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Pentagon) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Hexagon:
                 return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Hexagon) return this.removeShape(shapeInstance.figure)
                });
            case clickedShapeInstance instanceof Star:
                return this.shapes.forEach(shapeInstance => {
                    if (shapeInstance instanceof Star) return this.removeShape(shapeInstance.figure)
                });

            default: console.log('undefined shape')
        }



    }

    createShapes(shapesPerSecond) {
        for (let i = 0; i < shapesPerSecond; i++) {
            let position = this.model.getRandomSpawnPosition();
            this.drawRandomShape(position);
        }
    }

    startSpawningShapes() {
        this.createShapes(this.model.shapesPerSecond);

        TweenMax.delayedCall(this.model.config.delayBetweenSpawn,
            () => this.startSpawningShapes());
    }

    startCalculations() {
        this.enumerateVisibleShapes();
        requestAnimationFrame(() => this.startCalculations());
    }

    enumerateVisibleShapes() {
        let count = 0;
        let square = 0;

        this.shapes.forEach(shapeInstance => {
            let shape = shapeInstance.figure;
            let position = shape.position.y + shape.hitArea.y;
            let topPosition = position - shape.height;
            let bottomPosition = position + shape.height;

            if (bottomPosition > 0 && topPosition < this.model.config.height) {
                count++;
                square += shape.width * shape.height;
            }
        });

        this.model.setCount(count);
        this.model.setSquare(Math.round(square));
    }
}

export default Controller;
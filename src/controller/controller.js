/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */

import Shape from "../shape/shape";
import Circle from "../shape/circle/circle";
import Ellipse from "../shape/ellipse/ellipse";
import Triangle from "../shape/triangle/triangle";
import Rectangle from "../shape/rectangle/rectangle";
import Pentagon from "../shape/pentagon/pentagon";
import Hexagon from "../shape/hexagon/hexagon";
import Star from "../shape/star/star";


class Controller {

    constructor(model, view) {

        this.fps = 15;







        this.model = model;
        this.view = view;
        this.shape = new Shape()
        this.circle = new Circle();
        this.ellipse = new Ellipse();
        this.triangle = new Triangle();
        this.rectangle = new Rectangle();
        this.pentagon = new Pentagon();
        this.hexagon = new Hexagon();
        this.star = new Star();

        this.shapes = [];

        this.view.onIncreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity + 0.5));
        this.view.onDecreaseGravity.subscribe(() => this.model.setGravity(
            this.model.gravity > 0.5 ?
                this.model.gravity - 0.5 :
                this.model.gravity = 0.5
        ));

        this.view.onIncreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond + 1));
        this.view.onDecreaseShapes.subscribe(() => this.model.setShapesPerSecond(
            this.model.shapesPerSecond > 1 ?
                this.model.shapesPerSecond - 1 :
                this.model.shapesPerSecond = 1
        ));

        this.view.onCanvasClicked.subscribe(position => this.drawRandomShape(position));
        this.view.onShapeClicked.subscribe(shape => this.removeShape(shape));
        this.view.onShapeExit.subscribe(shape => this.removeShape(shape));

        this.startSpawningShapes()
    }

    drawRandomShape(position) {
        let shape = this.randomShapePicker(position);
        this.view.drawShape(shape);
        this.shapes.push(shape);
        this.view.ticker.add(this.drawShape);
        this.view.ticker.start();

    }

    removeShape(shape) {
        this.view.removeShape(shape);
        this.shapes = this.shapes.filter(item => item !== shape);
    }

    createShapes(shapesPerSecond) {
        for (let i = 0; i < shapesPerSecond; i++) {
            this.drawRandomShape();
        }
    }

    startSpawningShapes() {
        setInterval(() =>
            this.createShapes(this.model.shapesPerSecond),
            this.model.config.delayBetweenSpawn);

        setInterval(() =>
            this.enumerateVisibleShapes(),
            100);
    }


 

    enumerateVisibleShapes() {
        let count = 0;
        let square = 0;

        this.shapes.forEach(shape => {
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

    randomShapePicker(position) {
        let randomShape = this.model.getRandomInRange(1, 7);

        switch (randomShape) {
            case 1:
                return this.circle.createCircle(position);

            case 2:
                return this.ellipse.createEllipse(position);

            case 3:
                return this.triangle.createTriangle(position);

            case 4:
                return this.rectangle.createRect(position);

            case 5:
                return this.pentagon.createPentagon(position);

            case 6:
                return this.hexagon.createHexagon(position);

            case 7:
                return this.star.createStar(position);

            default:
                return this.circle.createCircle(position);

        }
    }
}

export default Controller;
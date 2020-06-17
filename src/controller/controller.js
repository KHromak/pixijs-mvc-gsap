/**
 * Controller (Application Logic) - The controller is the glue between the model and the view.
 * The controller processes and responds to events set off by either the model or view.
 * It updates the model whenever the user manipulates the view, and can also be used to update the view whenever
 * the model changes.
 */

class Controller {

    constructor(model, view, shape, hexagon) {
        this.shape = shape
        this.model = model;
        this.view = view;
        this.hexagon = hexagon;

        this.shapes = [];

        this.view.onIncreaseGravity.subscribe(() => this.model.setGravity(this.model.gravity + 0.5));
        this.view.onDecreaseGravity.subscribe(() => this.model.setGravity(
            this.model.gravity > 0.5?
            this.model.gravity - 0.5:
            this.model.gravity = 0.5
            ));

        this.view.onIncreaseShapes.subscribe(() => this.model.setShapesPerSecond(this.model.shapesPerSecond + 1));
        this.view.onDecreaseShapes.subscribe(() => this.model.setShapesPerSecond(
            this.model.shapesPerSecond > 1?
            this.model.shapesPerSecond - 1:
            this.model.shapesPerSecond = 1
            ));

        this.view.onCanvasClicked.subscribe(position => this.drawRandomShape(position));
        this.view.onShapeClicked.subscribe(shape => this.removeShape(shape));
        this.view.onShapeExit.subscribe(shape => this.removeShape(shape));

        this.startSpawningShapes();
    }

    drawRandomShape(position) {
        let shape = this.randomShapePicker(position);
        this.view.drawShape(shape);
        this.shapes.push(shape);
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
        // let randomShape = this.getRandomInRange(1, 7);
    
        let randomShape = 6;
    
        switch (randomShape) {
            // case 1:
            //     return this.createCircle(position);
    
            // case 2:
            //     return this.createEllipse(position);
    
            // case 3:
            //     return this.createTriangle(position);
    
            // case 4:
            //     return this.createRect(position);
    
            // case 5:
            //     return this.createPentagon(position);
    
            case 6:
                return this.hexagon.createHexagon(position);
                 
            // case 7:
            //     return this.createStar(position);
    
            // default:
            //     return this.createCircle(position);
            default:
                return this.hexagon.createHexagon(position);
    
        }
    }
}

export default Controller;
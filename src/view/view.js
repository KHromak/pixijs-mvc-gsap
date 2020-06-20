/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Observer from '../observer/observer';
import TweenMax from '../../graphics/TweenMax';

class View {

    constructor(model) {
        this.model = model;

        this.PIXELS_PER_METER = window.innerWidth / 1000;

        this.app = new PIXI.Application({
            width: this.model.config.width,
            height: this.model.config.height,
            backgroundColor: 0x1099bb,
        });

        this.app.renderer.autoResize = true;
        document.getElementById('gameScreen').appendChild(this.app.renderer.view);

        this.initialize();
    }

    queryElements() {
        this.numberOfShapes = document.querySelector('#numberOfShapes');
        this.occupiedArea = document.querySelector('#occupiedArea');

        this.increaseShapes = document.querySelector('#increaseShapes');
        this.decreaseShapes = document.querySelector('#decreaseShapes');

        this.increaseGravity = document.querySelector('#increaseGravity');
        this.decreaseGravity = document.querySelector('#decreaseGravity');

        this.gravityInput = document.querySelector('#gravityValue');
        this.shapesInput = document.querySelector('#shapesValue');
    }

    addListeners() {
        this.onIncreaseShapes = new Observer();
        this.onDecreaseShapes = new Observer();

        this.onIncreaseGravity = new Observer();
        this.onDecreaseGravity = new Observer();

        this.onCanvasClicked = new Observer();
        this.onShapeClicked = new Observer();
        this.onShapeExit = new Observer();

        this.increaseShapes.addEventListener('click', () => this.onIncreaseShapes.notify());
        this.decreaseShapes.addEventListener('click', () => this.onDecreaseShapes.notify());

        this.increaseGravity.addEventListener('click', () => this.onIncreaseGravity.notify());
        this.decreaseGravity.addEventListener('click', () => this.onDecreaseGravity.notify());

        this.app.stage.on('click', e => {
            let position = e.data.global;
            this.onCanvasClicked.notify(position);
        });
    }

    updateInputs() {
        this.updateShapes();
        this.updateGravity();
        this.updateCount();
        this.updateSquare();
    }

    updateShapes() {
        this.shapesInput.value = this.model.shapesPerSecond;
    }

    updateGravity() {
        this.gravityInput.value = this.model.gravity;
    }

    updateCount() {
        this.numberOfShapes.value = this.model.count;
    }

    updateSquare() {
        this.occupiedArea.value = this.model.square;
    }

    subscribeModel() {
        this.model.onShapesChanged.subscribe(() => this.updateShapes());
        this.model.onGravityChanged.subscribe(() => this.updateGravity());
        this.model.onCountChanged.subscribe(() => this.updateCount());
        this.model.onSquareChanged.subscribe(() => this.updateSquare());
    }

    initialize() {
        this.queryElements();

        this.updateInputs();
        this.subscribeModel();

        this.addListeners();

        this.app.stage.interactive = true;
        this.app.stage.buttonMode = true;
        this.app.stage.hitArea = new PIXI.Rectangle(0, 0, this.model.config.width, this.model.config.height / this.app.renderer.resolution);

        this.app.ticker.add((delta) => {
            this.animate(delta);
        });
    }

    drawShape(shapeInstance) {
        let shape = shapeInstance.figure;
        this.app.stage.addChild(shape);

        shape.on('click', e => {
            e.stopPropagation();
            this.onShapeClicked.notify(shapeInstance);
        });
    }

    animate(delta) {
        this.app.stage.children.forEach((shape) => {
            if (shape.position.y - shape.height - 100 > this.app.renderer.height / this.app.renderer.resolution) {
                this.onShapeExit.notify(shape);
            }
            else {
                shape.shapeSpeed = this.model.gravity * delta * this.PIXELS_PER_METER;
                shape.position.y += shape.shapeSpeed / delta;
            }
        });
    }

    removeShape(shape) {
        this.app.stage.removeChild(shape);
        shape.destroy();
    }
}

export default View;
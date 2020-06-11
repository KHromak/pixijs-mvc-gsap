/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import Observer from '../observer/observer';
import TweenMax from '../../graphics/TweenMax';

class View {

    constructor(model) {
        this.model = model;

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
        this.updateDisplayed();
    }

    updateShapes() {
        this.shapesInput.value = this.model.shapesPerSecond;
    }

    updateGravity() {
        this.gravityInput.value = this.model.gravity;
    }

    updateDisplayed() {
        this.numberOfShapes.value = this.model.displayed;
    }

    subscribeModel() {
        this.model.onShapesChanged.subscribe(() => this.updateShapes());
        this.model.onGravityChanged.subscribe(() => this.updateGravity());
        this.model.onDisplayedChanged.subscribe(() => this.updateDisplayed());
    }

    initialize() {
        this.queryElements();

        this.updateInputs();
        this.subscribeModel();

        this.addListeners();

        this.app.stage.interactive = true;
        this.app.stage.buttonMode = true;
        this.app.stage.hitArea = new PIXI.Rectangle(0, 0, this.model.config.width, this.model.config.height / this.app.renderer.resolution);
    }

    drawShape(shape) {
        this.app.stage.addChild(shape);

        shape.on('click', e => {
            e.stopPropagation();
            this.onShapeClicked.notify(shape);
        });

        let args = {
            y: this.model.config.height - shape.hitArea.y,
            onComplete: () => this.onShapeExit.notify(shape),
            ease: Linear.easeNone
        };

        TweenMax.to(shape, this.model.gravity, args);
    }

    removeShape(shape) {
        this.app.stage.removeChild(shape);
    }
}

export default View;
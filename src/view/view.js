/**
 * View (Presentation Layer) - This part of your App has access to the DOM or Canvas.
 * Use it to draw, display or animate whatever you want
 */

import TweenMax from '../../pixijs/TweenMax';
import Observer from '../observer/observer';

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

        this.onWhiteSpaceClicked = new Observer();
        this.onNumberOfShapes = new Observer();

        this.increaseShapes.addEventListener('click', () => this.onIncreaseShapes.notify());
        this.decreaseShapes.addEventListener('click', () => this.onDecreaseShapes.notify());

        this.increaseGravity.addEventListener('click', () => this.onIncreaseGravity.notify());
        this.decreaseGravity.addEventListener('click', () => this.onDecreaseGravity.notify());

        this.app.stage.on('click', e => {
            let position = (e.data.global);
            this.onWhiteSpaceClicked.notify(position);
        });
    }

    updateInputs() {
        this.updateShapes();
        this.updateGravity();
        this.updateNumberOfShapes();
    }

    updateNumberOfShapes() {
        this.numberOfShapes.value = this.model.shapesQuantity;
    }

    updateShapes() {
        this.shapesInput.value = this.model.shapesPerSecond;
    }

    updateGravity() {
        this.gravityInput.value = this.model.gravity;
    }

    subscribeModel() {
        this.model.onShapesChanged.subscribe(() => this.updateShapes());
        this.model.onGravityChanged.subscribe(() => this.updateGravity());
        this.model.onShapesQuantity.subscribe(() => this.updateNumberOfShapes());
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

    drawShape(figure) {
        let shape = this.app.stage.addChild(figure);
        return shape;
    }

    removeShape(shape) {
        this.app.stage.removeChild(shape);
    }

    fallDownShape(randomShape) {
        let shape = this.drawShape(randomShape);

        shape.on('click', e => {
            e.stopPropagation();
            this.removeShape(shape);
        })

        let args = {
            y: this.model.config.height * 2.5,
            onComplete: () => this.removeShape(shape),
            // ease: Power2.easeIn
        };

        TweenMax.to(shape, this.model.gravity, args);
    }
}

export default View
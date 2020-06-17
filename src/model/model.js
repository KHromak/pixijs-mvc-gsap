/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */

import Observer from '../observer/observer';
import Hexagon from '../shape/hexagon/hexagon';
import Shape from '../shape/shape';

class Model {
  constructor() {
    this.onGravityChanged = new Observer();
    this.onShapesChanged = new Observer();
    this.onCountChanged = new Observer();
    this.onSquareChanged = new Observer();

    // this.hexagon = new Hexagon();
    // this.shape = new Shape(this.config.width, )


    this.gravity = 3;
    this.shapesPerSecond = 2;
    this.count = 0;
    this.square = 0;

    this.config = {
      width: 900,
      height: 500,
      delayBetweenSpawn: 1000,
    };
  }

  setGravity(value) {
    this.gravity = value;
    this.onGravityChanged.notify();
  }

  setShapesPerSecond(value) {
    this.shapesPerSecond = value;
    this.onShapesChanged.notify();
  }

  setCount(value) {
    this.count = value;
    this.onCountChanged.notify();
  }

  setSquare(value) {
    this.square = value;
    this.onSquareChanged.notify();
  }
 

  getRandomInRange(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  
}

export default Model;
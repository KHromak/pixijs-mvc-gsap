/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */

import Observer from '../observer/observer';
import Circle from '../shape/circle';
import Ellipse from '../shape/ellipse';
import Hexagon from '../shape/hexagon';
import Triangle from '../shape/triangle';
import Rectangle from '../shape/rectangle';
import Pentagon from '../shape/pentagon';
import Star from '../shape/star';

class Model {
  constructor() {
    this.onGravityChanged = new Observer();
    this.onShapesChanged = new Observer();
    this.onCountChanged = new Observer();
    this.onSquareChanged = new Observer();

    this.gravity = 3;
    this.shapesPerSecond = 2;
    this.count = 0;
    this.square = 0;

    this.config = {
      width: 900,
      height: 500,
      delayBetweenSpawn: 1,
    };
  }

  setGravity(value) {
    this.gravity = Math.max(0, value);
    this.onGravityChanged.notify();
  }

  setShapesPerSecond(value) {
    this.shapesPerSecond = Math.max(0, value);
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

  getRandomSpawnPosition() {
    return {
      x: this.getRandomInRange(0, this.config.width),
      y: this.getRandomInRange(-80, -80),
    };
  }

  createRandomShape(position) {
    let rand = this.getRandomInRange(1, 7);
    switch (rand) {
      case 1: return new Circle(position);
      case 2: return new Ellipse(position);
      case 3: return new Triangle(position);
      case 4: return new Rectangle(position);
      case 5: return new Pentagon(position);
      case 6: return new Hexagon(position);
      case 7: return new Star(position);
      default: return new Circle(position);
    }
  }
}

export default Model;
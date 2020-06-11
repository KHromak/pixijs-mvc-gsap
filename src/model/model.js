/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */

import Observer from '../observer/observer';

class Model {
  constructor() {
    this.onGravityChanged = new Observer();
    this.onShapesChanged = new Observer();
    this.onShapesQuantity = new Observer();

    this.gravity = 7;
    this.shapesPerSecond = 2;
    this.shapesQuantity;

    this.config = {
      width: 900,
      height: 500,
      delayBetweenSpawn: 1000,
      shapesPerSecond: 2,
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

  setShapesQuantity(value) {
    this.shapesQuantity = value;
    this.onShapesQuantity.notify();
  }

  xPositionCalulate(position) {
    let xPosition;
    return position ?
      xPosition = position.x :
      xPosition = this.getRandomInRange(0, this.config.width);
  }

  yPositionCalulate(position) {
    let yPosition;
    return position ?
      yPosition = position.y :
      yPosition = this.getRandomInRange(-500, -80);
  }

  createCircle(position) {
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawCircle(posX, posY, 50);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.endFill();

    return figure;
  }

  createEllipse(position) {
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawEllipse(posX, posY, 80, 30);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.endFill();

    return figure;
  }

  createTriangle(position) {
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let figure = new PIXI.Graphics();

    figure.beginFill(bodyColor, 0.5);
    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.moveTo(posX, posY);
    figure.lineTo(posX + 100, posY);
    figure.lineTo(posX + 50, posY + 70);
    figure.lineTo(posX, posY);
    figure.closePath();
    figure.endFill();
    figure.interactive = false;
    figure.hitArea = figure.getBounds();

    return figure;
  }

  createRect(position) {
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawRect(posX - 40, posY, 80, 80);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

  createPentagon(position) {
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let path = [posX + 50, posY, posX + 20, posY + 40, posX - 40, posY + 40, posX - 40, posY - 40, posX + 20, posY - 40];
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF);
    figure.beginFill(bodyColor, 0.5);
    figure.drawPolygon(path);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
  
    return figure;
  }

  createHexagon(position) {
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawPolygon(path);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

  createStar(position) {
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawStar(posX, posY, 5, 50);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

  getRandomInRange(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  randomShapePicker(position) {
    let randomShape = this.getRandomInRange(1, 7);

    switch (randomShape) {
      case 1:
        return this.createCircle(position);

      case 2:
        return this.createEllipse(position);

      case 3:
        return this.createTriangle(position);

      case 4:
        return this.createRect(position);

      case 5:
        return this.createPentagon(position);

      case 6:
        return this.createHexagon(position);

      case 7:
        return this.createStar(position);

      default:
        return this.createCircle(position);

    }
  }
}

export default Model;
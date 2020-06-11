/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */

import GameObserver from '../observer/gameObserver';

class Model extends GameObserver{
  constructor() {
    super();
    this.observer = new GameObserver();
    this.config = {
      gravity: 7,
      width: 900,
      height: 900,
      delayBetweenSpawn: 1000,
      shapesPerSecond: 2,
      interactiveWorld: true
    }
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
    let figure = new PIXI.Graphics();
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawCircle(posX, posY, 50);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    figure.endFill();
    return figure;
  }

  createEllipse(position) {
    let figure = new PIXI.Graphics();
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawEllipse(posX, posY, 80, 30);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    figure.endFill();
    return figure;
  }

  createTriangle(position) {
    let figure = new PIXI.Graphics();
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);

    figure.beginFill(bodyColor);
    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.moveTo(posX, posY);
    figure.lineTo(posX + 100, posY);
    figure.lineTo(posX + 50, posY + 70);
    figure.lineTo(posX, posY);
    figure.closePath();
    figure.endFill();
    figure.interactive = false;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }

    return figure;
  }

  createRect(position) {
    let figure = new PIXI.Graphics();
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor);
    figure.drawRect(posX, posY, 80, 80);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    return figure;
  }

  createPentagon(position) {
    let figure = new PIXI.Graphics();
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let path = [posX + 40, posY, posX + 10, posY + 30, posX - 30, posY + 30, posX - 30, posY - 30, posX + 10, posY - 30];
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0xFF);
    figure.drawPolygon(path);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    return figure;
  }

  createHexagon(position) {
    let figure = new PIXI.Graphics();
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawPolygon(path);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    return figure;
  }

  createStar(position) {
    let figure = new PIXI.Graphics();
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    figure.lineStyle(2, 0xFFFFFF, 1);
    figure.beginFill(bodyColor);
    figure.drawStar(posX, posY, 5, 50);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.click = () => {
      figure.visible = false;
    }
    return figure;
  }

  //???
  // removeShape(shape) {
  //   shape.visiblie = false;
  // }


  increaseShapesAction() {
    this.config.shapes += 1
  }

  decreaseShapesAction() {
    return this.config.shapes -= 1
  }

  increaseGravityAction() {
    if(this.config.gravity <= 0.5) return;
    return this.config.gravity -= 0.5
  }

  decreaseGravityAction() {
    return this.config.gravity -= 1
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
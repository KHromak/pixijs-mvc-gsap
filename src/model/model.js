/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */
class Model {
  constructor() {

    this.config = {

      gravity: 7,
      width: 900,
      height: 900,
      delayBetweenSpawn: 1000,
      shapesQuantity: 20
    }


  }

  createCircle() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(bodyColor, 0.5);
    graphics.drawCircle(randomX, randomY, 60);
    graphics.endFill();
    return graphics;
  }

  createEllipse() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(bodyColor, 0.5);
    graphics.drawEllipse(randomX, randomY, 80, 50);
    graphics.endFill();
    return graphics;
  }

  createTriangle() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.beginFill(bodyColor);
    graphics.lineStyle(1, 0xffd900, 1);
    graphics.moveTo(randomX, randomY);
    graphics.lineTo(randomX + 100, randomY);
    graphics.lineTo(randomX + 50, randomY + 70);
    graphics.lineTo(randomX, randomY);
    graphics.closePath();
    graphics.endFill();
    return graphics;
  }

  createRect() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(bodyColor);
    graphics.drawRect(randomX, randomY, 100, 100);
    return graphics;
  }

  createPentagon() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    let path = [randomX + 40, randomY, randomX + 10, randomY + 30, randomX - 30, randomY + 30, randomX - 30, randomY - 30, randomX + 10, randomY - 30];
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(bodyColor, 0xFF);
    graphics.drawPolygon(path);
    graphics.endFill();
    return graphics;
  }

  createHexagon() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    let path = [randomX + 50, randomY + 25, randomX, randomY + 50, randomX - 50, randomY + 25, randomX - 50, randomY - 25, randomX, randomY - 50, randomX + 50, randomY - 25];
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(bodyColor, 0.5);
    graphics.drawPolygon(path);
    graphics.endFill();
    return graphics;
  }

  createRandomShape() {
    let graphics = new PIXI.Graphics();
    let randomX = this.getRandomInRange(0, this.config.width);
    let randomY = this.getRandomInRange(-500, -80);
    const randomInt = this.getRandomInRange(10, 20);
    let path = [randomX + randomInt, randomY + randomInt, randomX, randomY + randomInt, randomX - randomInt, randomY + 10, randomX - 10, randomY - 5, randomX, randomY - 15, randomX + 20, randomY - 25];
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);

    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(bodyColor);
    graphics.drawPolygon(path);
    graphics.endFill();
    return graphics;
  }




  increaseShapesAction() {
    return this.config.shapes += 1
  }

  decreaseShapesAction() {
    return this.config.shapes -= 1
  }

  increaseGravityAction() {
    return this.config.gravity -= 0.5
  }

  decreaseGravityAction() {
    return this.config.gravity -= 1
  }

  getRandomInRange(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  randomShapePicker() {
    let randomShape = this.getRandomInRange(1, 7);
    // let randomShape = 7;

    switch (randomShape) {
      case 1:
        return this.createCircle();

      case 2:
        return this.createEllipse();

      case 3:
        return this.createTriangle();

      case 4:
        return this.createRect();

      case 5:
        return this.createPentagon();

      case 6:
        return this.createHexagon();

      case 7:
        return this.createRandomShape();

      default:
        return this.createCircle();

    }
  }






}

export default Model;
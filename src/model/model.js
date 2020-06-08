/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */
class Model {
  constructor() {

    this.config = {

      gravity: 4,
      width: 300,
      height: 300,
      delayBetweenSpawn: 1000,
      shapesQuantity: 20
    }

   

  }

  // addShape() {
  //   shapePosition = {
  //     x: 10,
  //     y: 0
  //   };
  // }



  createRect() {
    let graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(
      this.getRandomInRange(0, 200),
      this.getRandomInRange(-100, -80),
      100, 100);
    return graphics;
  }

  createCircle() {
    let graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0xFFFF0B, 0.5);
    graphics.drawCircle(
      this.getRandomInRange(0, 200),
       90, 60);
    graphics.endFill();
    return graphics;
  }

  createTriangle() {
    let graphics = new PIXI.Graphics();
    graphics.moveTo(50, 50);
    graphics.lineTo(250, 50);
    graphics.lineTo(150, 150);
    graphics.lineTo(50, 50);
    graphics.endFill();
    return graphics;
  }

  createHexagon() {
    let graphics = new PIXI.Graphics();
    graphics.drawPolygon([
      10, 300,             //First point
      64, 300,              //Second point
      0, 0
    ])

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
    console.log('gravity +', this.config.gravity)
    return this.config.gravity -= 0.5
  }

  decreaseGravityAction() {
    return this.config.gravity -= 1
  }

  getRandomInRange(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }

  randomShapePicker() {
    let randomShape = this.getRandomInRange(1, 2)
    console.log(randomShape)
    switch (randomShape) {
      case 1:
       return this.createRect();
       
      case 2:
        return this.createCircle();
     
      // case 3:
      //   return this.createTriangle();
      //   break;
      // case 4:
      //   return this.createHexagon();
      //   break;
      default:
        return this.createCircle();
      
    }
  }






}

export default Model;
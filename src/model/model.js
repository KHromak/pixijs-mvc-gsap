/**
 * Model (Data Layer) - this is where the data is stored for your app.
 * The model is decoupled from the views and controller.
 */
class Model {
    constructor() {
        
        this.config = {
          speed : 30,
          shapes : 10
        }
      }

      addShape () {
        shapePosition = {
          x: 10,
          y: 20
        };
      }

      createRect () {
        let graphics = new PIXI.Graphics();
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.drawRect(50, 250, 100, 100);
        return graphics;
      }

}

export default Model;
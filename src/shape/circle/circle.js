import Shape from '../shape'

class Circle extends Shape {

    constructor() {
        super();
       
    }

    createCircle(position) {

      let posX = super.xPositionCalulate(position);
      let posY = super.yPositionCalulate(position);
      let bodyColor = super.generateBodyColor();

      let figure = new PIXI.Graphics();
      figure.lineStyle(4, 0xFFFFFF, 1);
      figure.beginFill(bodyColor, 0.5);
      figure.drawCircle(posX, posY, 50);
      figure.interactive = true;
      figure.hitArea = figure.getBounds();
      figure.endFill();
  
      return figure;
    }

}

export default Circle;


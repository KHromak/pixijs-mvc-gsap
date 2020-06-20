import Shape from './shape';

class Ellipse extends Shape {

  constructor(position) {
    super(position);
  }

  draw() {
    this.figure.drawEllipse(this.x, this.y, 80, 30);
  }
}

export default Ellipse;
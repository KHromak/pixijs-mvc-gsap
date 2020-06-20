import Shape from './shape';

class Circle extends Shape {

  constructor(position) {
    super(position);
  }

  draw() {
    this.figure.drawCircle(this.x, this.y, 50);
  }
}

export default Circle;
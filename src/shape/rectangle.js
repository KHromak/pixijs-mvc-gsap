
import Shape from './shape'

class Rectangle extends Shape {

  constructor(position) {
    super(position);
  }

  draw() {
    this.figure.drawRect(this.x - 40, this.y, 80, 80);
  }

}

export default Rectangle;
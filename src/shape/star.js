import Shape from './shape'

class Star extends Shape {

  constructor(position) {
    super(position);
  }

  draw() {
    this.figure.drawStar(this.x, this.y, 5, 50);
  }

}

export default Star;
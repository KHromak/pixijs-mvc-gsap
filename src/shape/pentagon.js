import Shape from './shape'

class Pentagon extends Shape {

  constructor(position) {
    super(position)
  }

  draw() {
    this.figure.drawPolygon([
      this.x + 50, this.y,
      this.x + 20, this.y + 40,
      this.x - 40, this.y + 40,
      this.x - 40, this.y - 40,
      this.x + 20, this.y - 40
    ])

  }

}

export default Pentagon;
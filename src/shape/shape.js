import Model from '../model/model'

class Shape {
    constructor() {
        this.model = new Model();
    }

    xPositionCalulate(position) {
        return position ? position.x : this.model.getRandomInRange(0, this.model.config.width);
    }

    yPositionCalulate(position) {
        return position ? position.y : this.model.getRandomInRange(-500, -80);
    }

    generateBodyColor() {
        let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
        return bodyColor;
    }

}

export default Shape
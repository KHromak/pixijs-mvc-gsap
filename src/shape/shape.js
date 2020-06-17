import Hexagon from "./hexagon/hexagon";
import Model from '../model/model'

class Shape {
    constructor() {
        // this.hexagon = new Hexagon();
        this.model = new Model();
        
    }

    createBlankShape(position) {
        let shape = new PIXI.Graphics();
        let posX = this.xPositionCalulate(position);
        let posY = this.yPositionCalulate(position);

        let bodyColor = this.generateBodyColor();

        // let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];
        // let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
        // let figure = new PIXI.Graphics();

        shape.lineStyle(4, 0xFFFFFF, 1);
        shape.beginFill(bodyColor, 0.5);
        shape.endFill();
        shape.interactive = true;
        shape.hitArea = shape.getBounds();

        return { shape, posX, posY }
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
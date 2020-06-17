createTriangle(position) {
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let figure = new PIXI.Graphics();

    figure.beginFill(bodyColor, 0.5);
    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.moveTo(posX, posY);
    figure.lineTo(posX + 50, posY);
    figure.lineTo(posX, posY + 70);
    figure.lineTo(posX - 50, posY);
    figure.closePath();
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }
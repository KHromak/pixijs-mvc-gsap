createCircle(position) {
    const bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawCircle(posX, posY, 50);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();
    figure.endFill();

    return figure;
  }
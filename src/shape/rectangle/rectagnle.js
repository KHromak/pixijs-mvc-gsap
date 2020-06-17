createRect(position) {
    let posX = this.xPositionCalulate(position);
    let posY = this.yPositionCalulate(position);
    let bodyColor = Math.floor(Math.random() * 0xFFFFFF);
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawRect(posX - 40, posY, 80, 80);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }
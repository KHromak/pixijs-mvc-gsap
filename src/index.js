import Model from './model/model';
import View from './view/view';
import Controller from './controller/controller';
import Shape from './shape/shape';

const main = () => {
    let model = new Model();
    let view = new View(model);
    // let shapeClass = new Shape();
    const controller = new Controller(model, view);
};

window.onload = main;
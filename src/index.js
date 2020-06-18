import Model from './model/model';
import View from './view/view';
import Controller from './controller/controller';

const main = () => {
    let model = new Model();
    let view = new View(model);
    const controller = new Controller(model, view);
};

window.onload = main;
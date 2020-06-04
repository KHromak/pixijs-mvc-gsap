import Model from './model/model';
import Controller from './controller/controller';
import View from './view/view';

const main = () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.showMessage();
};

window.onload = main;
import Model from './model/model';
import Controller from './controller/controller';

const main = () => {
    const model = new Model();
    const controller = new Controller(model);
};

window.onload = main;
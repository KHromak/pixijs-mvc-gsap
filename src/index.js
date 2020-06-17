import Model from './model/model';
import View from './view/view';
import Controller from './controller/controller';
import Shape from './shape/shape';
import Hexagon from './shape/hexagon/hexagon';

const main = () => {
    let model = new Model();
    let view = new View(model);
    let hexagon = new Hexagon();
    let shape = new Shape();
    const controller = new Controller(model, view, shape, hexagon);
    
};

window.onload = main;
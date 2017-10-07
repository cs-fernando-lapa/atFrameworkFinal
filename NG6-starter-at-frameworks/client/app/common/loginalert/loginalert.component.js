import template from './loginalert.html';// !text é um artifício do systemjs no plunker para carregar html
import controller from './loginalert.controller';
import './loginalert.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let loginalertComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default loginalertComponent;

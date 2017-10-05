import template from './categoria.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './categoria.controller';
import './categoria.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let categoriaComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default categoriaComponent;

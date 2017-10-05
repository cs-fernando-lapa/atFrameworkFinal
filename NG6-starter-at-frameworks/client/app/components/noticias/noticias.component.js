import template from './noticias.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './noticias.controller';
import './noticias.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let noticiasComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default noticiasComponent;

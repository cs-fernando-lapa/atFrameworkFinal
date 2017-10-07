import template from './logoff.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './logoff.controller';
import './logoff.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let logoffComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default logoffComponent;

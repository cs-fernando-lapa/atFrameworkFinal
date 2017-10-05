import template from './tarefa.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './tarefa.controller';
import './tarefa.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let tarefaComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default tarefaComponent;

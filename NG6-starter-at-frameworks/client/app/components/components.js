import angular from 'angular';
import categoriaModule from './categoria/categoria';
import tarefaModule from './tarefa/tarefa';
import noticiasModule from './noticias/noticias';
import homeModule from './home/home';
import lancamentoModule from './lancamento/lancamento';
import loginModule from './login/login';



let componentModule = angular.module('app.components', [
  categoriaModule,
  tarefaModule,
  noticiasModule,
  homeModule,
  lancamentoModule,
  loginModule,
])

.name;

export default componentModule;

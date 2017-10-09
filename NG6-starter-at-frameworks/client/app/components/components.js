import angular from 'angular';
import categoriaModule from './categoria/categoria';
import noticiasModule from './noticias/noticias';
import homeModule from './home/home';
import lancamentoModule from './lancamento/lancamento';
import loginModule from './login/login';
import logoffModule from './logoff/logoff';
import contaModule from './conta/conta';



let componentModule = angular.module('app.components', [
  categoriaModule,
  noticiasModule,
  homeModule,
  lancamentoModule,
  loginModule,
  logoffModule,
  contaModule
])

.name;

export default componentModule;

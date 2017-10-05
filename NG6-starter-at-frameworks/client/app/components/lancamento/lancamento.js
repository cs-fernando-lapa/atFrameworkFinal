import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lancamentoComponent from './lancamento.component';
import controller from './lancamento.controller.js'
import lancamentosService from './lancamento.service.js'
import lancamentosDirective from './lancamento.directive.js'


let lancamentoModule = angular.module('lancamento', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('lancamento', {
      url: '/lancamento',
      component: 'lancamento',
    });
})

.component('lancamento', lancamentoComponent)

.service('lancamentosService', lancamentosService)

.directive('lancamentodiv', lancamentosDirective)

.name;

export default lancamentoModule;

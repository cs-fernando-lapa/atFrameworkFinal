import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contaComponent from './conta.component';
import controller from './conta.controller.js'
import contasService from './conta.service.js'
import contasDirective from './conta.directive.js'


let contaModule = angular.module('conta', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('conta', {
      url: '/conta',
      component: 'conta',
    });
})

.component('conta', contaComponent)

.service('contasService', contasService)

.directive('contadiv', contasDirective)

.name;

export default contaModule;

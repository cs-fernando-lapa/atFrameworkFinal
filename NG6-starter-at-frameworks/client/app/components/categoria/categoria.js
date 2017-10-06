import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriaComponent from './categoria.component';
import controller from './categoria.controller.js'
import categoriasService from './categoria.service.js'
import categoriasDirective from './categoria.directive.js'


let categoriaModule = angular.module('categoria', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('categoria', {
      url: '/categoria',
      component: 'categoria',
    });
})

.component('categoria', categoriaComponent)

.service('categoriasService', categoriasService)

.directive('categoriadiv', categoriasDirective)

.name;

export default categoriaModule;

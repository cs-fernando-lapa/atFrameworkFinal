import angular from 'angular';
import uiRouter from 'angular-ui-router';
import noticiasComponent from './noticias.component';
import controller from './noticias.controller.js'
import noticiasDirective from './noticias.directive.js'
import noticiasService from './noticias.service.js'

let noticiasModule = angular.module('noticia', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('noticia', {
      url: '/',
      component: 'noticias',
    });
})

.component('noticias', noticiasComponent)

.directive('notice', noticiasDirective)

.service('noticiasService', noticiasService)


.name;


export default noticiasModule;

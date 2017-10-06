import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './login.controller.js'
import loginDirective from './login.directive.js'
import loginComponent from './login.component.js'
import loginService from './login.service.js'

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    });
})
.component('login', loginComponent)
.service('loginService', loginService)

.name;


export default loginModule;

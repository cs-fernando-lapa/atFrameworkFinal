import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './login.controller.js'
import loginDirective from './login.directive.js'
import loginComponent from './login.component.js'

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

.name;


export default loginModule;

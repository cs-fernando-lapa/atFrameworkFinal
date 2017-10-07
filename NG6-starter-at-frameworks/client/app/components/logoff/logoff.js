import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './logoff.controller.js'
import logoffDirective from './logoff.directive.js'
import logoffComponent from './logoff.component.js'

let logoffModule = angular.module('logoff', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('logoff', {
      url: '/logoff',
      component: 'logoff'
    });
})
.component('logoff', logoffComponent)

.name;


export default logoffModule;

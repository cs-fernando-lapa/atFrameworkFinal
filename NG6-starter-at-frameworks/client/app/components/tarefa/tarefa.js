import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tarefaComponent from './tarefa.component';
import controller from './tarefa.controller.js'


let tarefaModule = angular.module('tarefa', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('tarefa', {
      url: '/tarefa',
      component: 'tarefa',
    });
})

.component('tarefa', tarefaComponent)

.name;

export default tarefaModule;

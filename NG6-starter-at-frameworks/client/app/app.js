import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMessages from 'angular-messages';

let appModule = angular.module('app', [
    ngAnimate,
    ngAria,
    uiBootstrap,
    uiRouter,
    Common,
    Components,
    ngMessages,
  ])
  .config([
    '$httpProvider',
    function($httpProvider) {
      var interceptor = [
        '$q',
        function($q) {
          var service = {
            // run this function before making requests
            'request': function(config) {
              var logado = localStorage.getItem('logado')
              if (logado == null && (
                  config.url == '/api/noticiasmock' ||
                  config.url == '/api/categoriamock' ||
                  config.url == '/api/lancamentomock'
                )) {
                // the request looks good, so return the config
                return $q.reject(config);
              }
              // bad request, so reject
              return config;
            }
          };
          return service;
        }
      ];
      $httpProvider.interceptors.push(interceptor);
    }
  ])
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(function($rootScope, $state, $transitions){
    $rootScope.$on('unauthorized', () => {
        $state.go('login');
    });

    $rootScope.$on('logoff', () => {
        $state.go('login');
    });

    $transitions.onStart({}, function(event) {
      if(localStorage.getItem('logado') == null){ // we don't need validation for the very first step.
        console.log("ENTROU");
        $rootScope.$emit("unauthorized");
      }
    })
  })
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://**',
      'https://**'
    ]);
  }])

  .component('app', AppComponent)

  .name;

export default appModule;

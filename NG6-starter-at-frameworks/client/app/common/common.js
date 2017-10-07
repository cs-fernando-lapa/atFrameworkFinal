import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import loginalertModule from './loginalert/loginalert';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  loginalertModule
])

.name;

export default commonModule;

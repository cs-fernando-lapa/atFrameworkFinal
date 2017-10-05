import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import storageService from './storage.service';
import noticiasMock from './noticiasmock/noticiasmock';
import lancamentoMock from './lancamentomock/lancamentomock';


let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.service('StorageService', storageService)

.run(noticiasMock)
.run(lancamentoMock)

.name;

export default appMockModule;

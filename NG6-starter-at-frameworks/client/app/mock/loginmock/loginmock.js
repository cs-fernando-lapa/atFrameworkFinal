import angular from 'angular';
import _loginmock from './loginmock-data';

function loginMock($httpBackend, $log, storage) {
  let loginmock = storage.load('loginmock', _loginmock);
  let _id = storage.load('loginmock-index', _loginmock.length+1);


  $httpBackend.whenPOST('/api/loginmock').respond( (method, url, data, headers) => {
    $log.log('POST:', data);
    data = JSON.parse(data)

    for(var i=0; i < _loginmock.length; i++){
      if(_loginmock[i].login == data.login && _loginmock[i].senha == data.senha) {
        return [200, _loginmock[i], {}];
        break
      }
    }
    return [401, {}, {}];
  });
}

loginMock.$inject = ['$httpBackend','$log','StorageService'];

export default loginMock;

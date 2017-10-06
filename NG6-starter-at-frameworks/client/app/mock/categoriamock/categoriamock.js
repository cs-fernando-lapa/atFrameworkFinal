import angular from 'angular';
import _categoriamock from './categoriamock-data';

function categoriaMock($httpBackend, $log, storage) {
  let categoriamock = storage.load('categoriamock', _categoriamock);
  let _id = storage.load('categoriamock-index', _categoriamock.length+1);

  $httpBackend.whenGET('/api/categoriamock').respond( (method, url, data, headers) => {
    $log.log('GET:', data);
    return [200, categoriamock, {}];
  });

  $httpBackend.whenPOST('/api/categoriamock').respond( (method, url, data, headers) => {
    $log.log('POST:', data);
    let _data = JSON.parse(data);
    _data.id = _id++;
    categoriamock.push(_data);
    storage.save('categoriamock', categoriamock);
    storage.save('categoriamock-index', _id);
    return [200, categoriamock, {}];
  });

  $httpBackend.whenDELETE('/api/categoriamock').respond( (method, url, data, headers) => {
    $log.log('DELETE:', data);
    let _data = JSON.parse(data);

    for(let i=0; i < categoriamock.length; i++)
      if(categoriamock[i].id == _data.id)
      {
        console.log('vamo deletar');
        categoriamock.splice(i, 1);
        break;
      }

    storage.save('categoriamock', categoriamock);
    return [200, null, {}];
  });

  $httpBackend.whenPUT('/api/categoriamock').respond( (method, url, data, headers) => {
    $log.log('PUT:', data);

    let _data = JSON.parse(data);
    for(let i=0; i<categoriamock.length; i++){
      if(categoriamock[i].id == _data.id)
      {
        categoriamock[i].nome = _data.nome;
        categoriamock[i].categoria = _data.categoria;

        break;
      }
    }

    storage.save('categoriamock', categoriamock);
    return [200, categoriamock, {}];
  });
}

categoriaMock.$inject = ['$httpBackend','$log','StorageService'];

export default categoriaMock;

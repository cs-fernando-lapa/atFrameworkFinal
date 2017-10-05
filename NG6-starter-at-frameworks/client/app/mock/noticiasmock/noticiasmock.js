import angular from 'angular';
import _noticiasmock from './noticiasmock-data';

function noticiasMock($httpBackend, $log, storage) {
  let noticiasmock = storage.load('noticiasmock', _noticiasmock);
  let _id = storage.load('noticiasmock-index', _noticiasmock.length+1);

  $httpBackend.whenGET('/api/noticiasmock').respond( (method, url, data, headers) => {
    $log.log('GET:', data);
    return [200, noticiasmock, {}];
  });

  $httpBackend.whenPOST('/api/noticiasmock').respond( (method, url, data, headers) => {
    $log.log('POST:', data);
    let _data = JSON.parse(data);
    _data.id = _id++;
    noticiasmock.push(_data);
    storage.save('noticiasmock', noticiasmock);
    storage.save('noticiasmock-index', _id);
    return [200, noticiasmock, {}];
  });

  $httpBackend.whenDELETE('/api/noticiasmock').respond( (method, url, data, headers) => {
    $log.log('DELETE:', data);
    let _data = JSON.parse(data);

    for(let i=0; i < noticiasmock.length; i++)
      if(noticiasmock[i].id == _data.id)
      {
        console.log('vamo deletar');
        noticiasmock.splice(i, 1);
        break;
      }

    storage.save('noticiasmock', noticiasmock);
    return [200, null, {}];
  });

  $httpBackend.whenPUT('/api/noticiasmock').respond( (method, url, data, headers) => {
    $log.log('PUT:', data);

    let _data = JSON.parse(data);
    for(let i=0; i<noticiasmock.length; i++){
      if(noticiasmock[i].id == _data.id)
      {
        noticiasmock[i].titulo = _data.titulo;
        noticiasmock[i].mensagem = _data.mensagem;
        noticiasmock[i].autor = _data.autor;
        noticiasmock[i].data = _data.data;
        noticiasmock[i].imagem = _data.imagem;
        break;
      }
    }

    storage.save('noticiasmock', noticiasmock);
    return [200, noticiasmock, {}];
  });
}

noticiasMock.$inject = ['$httpBackend','$log','StorageService'];

export default noticiasMock;

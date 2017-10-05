import angular from 'angular';
import _lancamentomock from './lancamentomock-data';

function lancamentoMock($httpBackend, $log, storage) {
  let lancamentomock = storage.load('lancamentomock', _lancamentomock);
  let _id = storage.load('lancamentomock-index', _lancamentomock.length+1);

  $httpBackend.whenGET('/api/lancamentomock').respond( (method, url, data, headers) => {
    $log.log('GET:', data);
    return [200, lancamentomock, {}];
  });

  $httpBackend.whenPOST('/api/lancamentomock').respond( (method, url, data, headers) => {
    $log.log('POST:', data);
    let _data = JSON.parse(data);
    _data.id = _id++;
    lancamentomock.push(_data);
    storage.save('lancamentomock', lancamentomock);
    storage.save('lancamentomock-index', _id);
    return [200, lancamentomock, {}];
  });

  $httpBackend.whenDELETE('/api/lancamentomock').respond( (method, url, data, headers) => {
    $log.log('DELETE:', data);
    let _data = JSON.parse(data);

    for(let i=0; i < lancamentomock.length; i++)
      if(lancamentomock[i].id == _data.id)
      {
        console.log('vamo deletar');
        lancamentomock.splice(i, 1);
        break;
      }

    storage.save('lancamentomock', lancamentomock);
    return [200, null, {}];
  });

  $httpBackend.whenPUT('/api/lancamentomock').respond( (method, url, data, headers) => {
    $log.log('PUT:', data);

    let _data = JSON.parse(data);
    for(let i=0; i<lancamentomock.length; i++){
      if(lancamentomock[i].id == _data.id)
      {
        lancamentosmock[i].nome = _data.nome;
        lancamentosmock[i].descricao = _data.descricao;
        lancamentosmock[i].valor = _data.valor;
        lancamentosmock[i].receita = _data.receita;
        lancamentosmock[i].categoria = _data.categoria;
        lancamentosmock[i].repeticoes = _data.repeticoes;
        lancamentosmock[i].data = _data.data;
        lancamentosmock[i].repetividade = _data.repetividade;
        break;
      }
    }

    storage.save('lancamentomock', lancamentomock);
    return [200, lancamentomock, {}];
  });
}

lancamentoMock.$inject = ['$httpBackend','$log','StorageService'];

export default lancamentoMock;

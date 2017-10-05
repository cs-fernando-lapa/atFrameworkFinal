class lancamentosService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getLancamentos() {
    return this.$q( (resolve, reject) => {
      if (this.lancamentos)
        resolve(this.lancamentos);
      else {
        this.$http.get('/api/lancamentomock')
          .then((response) => resolve(response.data));
      }
    });
  }

  postLancamento(nome, descricao, valor, receita, categoria, data, repeticoes, repetitividade){
    var data = Date.now();
      return  this.$http.post('/api/lancamentomock', {
        nome,
        descricao,
        valor,
        receita,
        categoria,
        data,
        repeticoes,
        repetitividade
      })
    }

  delLancamento(id){
    return this.$http.delete('/api/lancamentomock', { data: {id} })
  }

  putLancamento(id, nome, descricao, valor, receita, categoria, data, repeticoes, repetitividade){
    var data = Date.now();
    return this.$http.put('/api/lancamentomock', {id, nome, descricao, valor, receita, categoria, data, repeticoes, repetitividade} )
  }
}
lancamentosService.$inject = ['$http','$q'];
export default lancamentosService;

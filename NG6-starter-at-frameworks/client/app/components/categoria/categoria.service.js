class categoriasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getCategorias() {
    return this.$q( (resolve, reject) => {
      if (this.categorias)
        resolve(this.categorias);
      else {
        this.$http.get('/api/categoriamock')
          .then((response) => resolve(response.data));
      }
    });
  }

  postCategoria(nome, descricao){
      return  this.$http.post('/api/categoriamock', {
        nome,
        descricao,
      })
    }

  delCategoria(id){
    return this.$http.delete('/api/categoriamock', { data: {id} })
  }

  putCategoria(id, nome, descricao){
    return this.$http.put('/api/categoriamock', {id, nome, descricao} )
  }
}
categoriasService.$inject = ['$http','$q'];
export default categoriasService;

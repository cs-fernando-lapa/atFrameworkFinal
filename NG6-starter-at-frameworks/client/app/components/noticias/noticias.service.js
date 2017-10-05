class noticiasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getNoticias() {
    return this.$q( (resolve, reject) => {
      if (this.noticias)
        resolve(this.noticias);
      else {
        this.$http.get('/api/noticiasmock')
          .then((response) => resolve(response.data));
      }
    });
  }

  postNoticia(titulo, autor, mensagem, imagem, data){
      return  this.$http.post('/api/noticiasmock', {
        titulo,
        autor,
        mensagem,
        imagem,
        data
      })
    }

  delNoticia(id){
    return this.$http.delete('/api/noticiasmock', { data: {id} })
  }

  putNoticia(id, titulo, autor, mensagem, imagem, data){
    return this.$http.put('/api/noticiasmock', {id, titulo, autor, mensagem, imagem, data} )
  }
}
noticiasService.$inject = ['$http','$q'];
export default noticiasService;

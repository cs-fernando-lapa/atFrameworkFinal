class noticiasController {
  constructor(noticiasService, $q) {
    this.q = $q
    this.noticiasService = noticiasService
    noticiasService.getNoticias()
      .then( noticias => this.noticias = noticias );
  }
    postNoticia(){
      var data = Date.now();
      this.noticiasService.postNoticia(this.titulo, this.autor, this.mensagem, this.imagem, data)
      .then (noticia => this.noticias = noticia.data)
    }

    delNoticia(id){
      this.noticiasService.delNoticia(id)
      .then(data => this.noticiasService.getNoticias())
      .then((noticias) => this.noticias = noticias)
    }

    updateNoticia(id){
      // carregar dados na noticiae em this.
      this.titulo = this.noticias.titulo
      var noticia = {};
      for(var i=0; i< this.noticias.length; i++){
        if(this.noticias[i].id == id){
          noticia = this.noticias[i]
          break
        }
      }
      this.up_id = noticia.id
      this.up_titulo = noticia.titulo
      this.up_autor = noticia.autor
      this.up_mensagem = noticia.mensagem
      this.up_imagem = noticia.imagem
    }

    putNoticia(){
      var data = Date.now();
      this.noticiasService.putNoticia(this.up_id, this.up_titulo, this.up_autor, this.up_mensagem, this.up_imagem, data)
      .then(() => {
        this.up_id = ''
        this.up_titulo = ''
        this.up_autor = ''
        this.up_mensagem = ''
        this.up_imagem = ''
        return this.q.resolve('')
      })
      .then(data => this.noticiasService.getNoticias())
      .then(noticias => this.noticias = noticias)

    }
}

noticiasController.$inject = ['noticiasService', '$q'];
export default noticiasController;

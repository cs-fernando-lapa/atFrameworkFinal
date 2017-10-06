class categoriasController {
  constructor(categoriasService, $q) {
    this.q = $q
    this.categoriasService = categoriasService
    categoriasService.getCategorias()
      .then( categorias => this.categorias = categorias );
  }
    postCategoria(){
      var data = Date.now();
      this.categoriasService.postCategoria(this.nome, this.descricao, data)
      .then (categoria => this.categorias = categoria.data)
    }

    delCategoria(id){
      this.categoriasService.delCategoria(id)
      .then(data => this.categoriasService.getCategorias())
      .then((categorias) => this.categorias = categorias)
    }

    updateCategoria(id){
      // carregar dados na categoriae em this.
      this.nome = this.categorias.nome
      var categoria = {};
      for(var i=0; i< this.categorias.length; i++){
        if(this.categorias[i].id == id){
          categoria = this.categorias[i]
          break
        }
      }
      this.up_id = categoria.id
      this.up_nome = categoria.nome
      this.up_categoria = categoria.descricao
    }

    putCategoria(){
      var data = Date.now();
      this.categoriasService.putCategoria(this.nome, this.descricao, data)
      .then(() => {
        this.up_id = ''
        this.up_nome = ''
        this.up_descricao = ''
        return this.q.resolve('')
      })
      .then(data => this.categoriasService.getCategorias())
      .then(categorias => this.categorias = categorias)

    }
}

categoriasController.$inject = ['categoriasService', '$q'];


export default categoriasController;

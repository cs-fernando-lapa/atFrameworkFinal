class lancamentosController {
  constructor(lancamentosService, $q) {
    this.q = $q
    this.lancamentosService = lancamentosService
    lancamentosService.getLancamentos()
      .then( lancamentos => this.lancamentos = lancamentos );
  }
    postLancamento(){
      var data = Date.now();
      this.lancamentosService.postLancamento(this.descricao, this.valor, this.receita, this.categoria, this.categoria, data, this.repeticoes, this.repetitividade)
      .then (lancamento => this.lancamentos = lancamento.data)
    }

    delLancamento(id){
      this.lancamentosService.delLancamento(id)
      .then(data => this.lancamentosService.getLancamentos())
      .then((lancamentos) => this.lancamentos = lancamento)
    }

    updateLancamento(id){
      // carregar dados na lancamentoe em this.
      this.titulo = this.lancamentos.titulo
      var lancamento = {};
      for(var i=0; i< this.lancamentos.length; i++){
        if(this.lancamentos[i].id == id){
          lancamento = this.lancamentos[i]
          break
        }
      }
      this.up_id = lancamento.id
      this.up_descricao = lancamento.descricao
      this.up_valor = lancamento.valor
      this.up_receita = lancamento.receita
      this.up_categoria = lancamento.categoria
      this.up_data = lancamento.data
      this.up_repeticoes = lancamento.repeticoes
      this.up_repetitividade = lancamento.repetitividade
    }

    putLancamento(){
      var data = Date.now();
      this.lancamentosService.putLancamento(this.up_id, this.up_descricao, this.up_valor, this.up_receita, this.up_categoria, data, this.up_repeticoes, this.up_repetitividade)
      .then(() => {
        this.up_id = lancamento.id
        this.up_descricao = lancamento.descricao
        this.up_valor = lancamento.valor
        this.up_receita = lancamento.receita
        this.up_categoria = lancamento.categoria
        this.up_data = lancamento.data
        this.up_repeticoes = lancamento.repeticoes
        this.up_repetitividade = lancamento.repetitividade
        return this.q.resolve('')
      })
      .then(data => this.lancamentosService.getLancamentos())
      .then(lancamentos => this.lancamentos = lancamento)

    }
}

lancamentosController.$inject = ['lancamentosService', '$q'];


export default lancamentosController;

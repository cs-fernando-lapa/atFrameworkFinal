class contasController {
  constructor(contasService, $q) {
    this.q = $q
    this.contasService = contasService
    contasService.getContas()
      .then( contas => this.contas = contas );
  }
}

contasController.$inject = ['contasService', '$q'];


export default contasController;

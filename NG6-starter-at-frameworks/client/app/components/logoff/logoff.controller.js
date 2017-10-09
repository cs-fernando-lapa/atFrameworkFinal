class logoffController {
  constructor($rootScope) {
    this.rootScope = $rootScope
  }
  logoff(){
        localStorage.removeItem('logado')
        console.log('logoff')
        this.rootScope.$emit("logoff");
        // go to pagina noticia
  }
}

logoffController.$inject = ['$rootScope'];

export default logoffController;

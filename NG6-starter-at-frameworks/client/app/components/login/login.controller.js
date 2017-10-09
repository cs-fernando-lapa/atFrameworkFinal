class loginController {
  constructor(loginService, $q, $rootScope) {
    this.q = $q;
    this.rootScope = $rootScope;
    this.loginService = loginService;
    this.login = '';
    this.senha = '';
  }

  postLogin(){
      this.loginService.postLogin(this.login, this.senha)
      .then(() => {
        localStorage.setItem('logado', true)
        this.rootScope.$emit("logged");
        // go to pagina noticia
      })
      .catch((err) => {
        console.log("ERROR, 401");
        console.log(err);
        alert('Login inválido, ERROR 401')
        // NG USADO NAO ENCONTRADO
      })
  }
}
loginController.$inject = ['loginService', '$q', '$rootScope'];

export default loginController;

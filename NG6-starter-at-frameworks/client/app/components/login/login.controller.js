class loginController {
  constructor(loginService, $q) {
    this.q = $q;
    this.loginService = loginService;
    this.login = ''
    this.senha = ''
  }

  postLogin(){
      this.loginService.postLogin(this.login, this.senha)
      .then(() => {
        localStorage.setItem('logado', true)
        // go to pagina noticia
      })
      .catch(() => {
        console.log("ERROR");
        // NG USADO NAO ENCONTRADO
      })
  }

}
loginController.$inject = ['loginService', '$q'];

export default loginController;

class loginService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  postLogin(login, senha){
      return  this.$http.post('/api/loginmock', {
        login,
        senha
      })
    }
}
loginService.$inject = ['$http','$q'];

export default loginService;

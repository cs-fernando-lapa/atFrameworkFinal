class contasService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getContas() {
    return this.$q( (resolve, reject) => {
      if (this.contas)
        resolve(this.contas);
      else {
        this.$http.get('/api/lancamentomock')
          .then((response) => resolve(response.data));
      }
    });
  }
}
contasService.$inject = ['$http','$q'];
export default contasService;

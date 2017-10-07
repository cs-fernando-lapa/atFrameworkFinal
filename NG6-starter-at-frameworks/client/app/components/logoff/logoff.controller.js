class logoffController {
  constructor() {
  }
  logoff(){
        localStorage.removeItem('logado')
        console.log('logoff')
        // go to pagina noticia
  }
}


export default logoffController;

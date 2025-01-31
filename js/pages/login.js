

function PaginaDeLogin (){
    return`
      <div class="row">
    <div class="col-md-5 offset-md-1 ">
      <img src="undraw_login_re_4vu2.svg" alt="" width="100%"">
        </div>
        <div class=" col-md-5">
      <form action="paginaPrincipal.html" class="w-100">
        <input placeholder="Digite seu Email" type="text" class="form-control form-control-lg mb-2">
        <input placeholder="Digite sua senha" type="text" class="form-control form-control-lg mb-2">
        <button class="btn btn-wine w-100">Entrar</button>
        <p class="text-center mt-3">
          <a href="#">Esqueci minha senha</a>
          <br>
          <a href="#">Ainda não tenho conta</a>
        </p>
      </form>


    </div>
  </div>`
}
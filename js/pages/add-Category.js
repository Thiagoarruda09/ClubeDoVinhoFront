function addCategory(){
  return `
  <div class="">
      <div class="d-flex justify-content-between">
        <h1>Nova categoria</h1>
        <a class="btn btn-dark " onClick="alterarConteudo('categorias')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg> Voltar</a>
      </div>
<hr>
    <section class="card card-body bg-white animate__animated animate__fadeInLeft">
      <div id="erro_nome" style="display: none;" class="alert alert-danger ">
        Nome invalido
      </div>
      <div id="erro_descricao" style="display: none;" class="alert alert-danger">
        Descrição invalida
      </div>
      <form onsubmit="enviarCategory()" action="">
        <label for="nome">Nome:</label>
        <input id="nome" type="text" class="form-control mb-3">
        <label for="descrição">Descrição:</label>
        <textarea placeholder="digite aqui" name="" id="descricao" class="form-control mb-3"></textarea>
        <div class="container">
          <div class="row">
            <div class="col">
              <select name="" id="select-dia" class="form-select">
                <option value="">--dia--</option>
              </select>
            </div>
            <div class="col">
              <select name="" id="select-mes" class="form-select">
                <option value="">--mês--</option>
              </select>
            </div>
            <div class="col">
              <select name="" id="select-ano" class="form-select">
                <option value="">--ano--</option>
              </select>
            </div>
          </div>
        </div>
        <button class="btn btn-primary w-100 mt-2">PRONTO</button>
      </form>
    </section>
  </div>`
}

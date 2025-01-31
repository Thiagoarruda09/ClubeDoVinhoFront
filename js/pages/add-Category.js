function addCategory(){
  return `  <h2>Nova categoria</h2>
  <div class="text-end mb-2">
    <a class="btn btn-dark" href="categorias.html">Voltar</a>
  </div>
  <section class="card card-body bg-white">
    <div id="erro_nome" style="display: none;" class="alert alert-danger ">
      Nome invalido
    </div>
    <div id="erro_descricao" style="display: none;" class="alert alert-danger">
      Descrição invalida
    </div>
    <form onsubmit="enviar()" action="">
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

  </section>`
}
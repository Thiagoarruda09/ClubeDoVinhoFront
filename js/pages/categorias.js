function categorias (){
  return `
  <h2>categorias</h2>
  <div class="text-end mb-2">

    <a class="btn btn-dark" onclick="alterarConteudo('adicionarCategoria')">Nova categoria</a>

 

  </div>
  <section class="card card-body bg-white">
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>#ID</th>
          <th>nome</th>
          <th>descrição</th>
          <th>ações</th>
        </tr>
      </thead>
      <tbody id="table-category">
       
      </tbody>
    </table>

  </section>`
}
function produtos() {
  return `
    <h2>Produtos</h2>
    <section class="card card-body bg-white">
      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>#ID</th>
            <th>Nome</th>
            <th>Imagem</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-produtos">
          <!-- Os produtos serão inseridos aqui -->
        </tbody>
      </table>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title text-light" id="modal-product-name">Detalhes do Produto</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img src="" class="img-fluid rounded" id="modal-imagem" alt="Imagem do produto">
            </div>
            <div class="modal-footer bg-dark ">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


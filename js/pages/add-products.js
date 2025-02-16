function cadastrarProduto() {
  return `
      <div class="">
        <div class="d-flex justify-content-between mb-2">
            <h1>Cadastrar produto</h1>
              <a class="btn btn-dark" onClick="alterarConteudo('produtos')">Voltar</a>
        </div>
        <hr>

        <section class="card card-body bg-white animate__animated animate__fadeInLeft">
              <div id="erro_product_name" style="display: none;" class="alert alert-danger ">
        O nome do produto precisa ser preenchido
      </div>
      <div id="erro_product_desc" style="display: none;" class="alert alert-danger">
        Descrição invalida
      </div>
        <div id="erro_product_price" style="display: none;" class="alert alert-danger">
        O valor do produto precisa ser descrito
      </div>
              <div id="erro_product_stock" style="display: none;" class="alert alert-danger">
        o estoque do produto precisa ser descrito
      </div>
            <form onsubmit="enviarProduct()" action="" class="col-10 offset-1">
                <div class="row">
                    <label for="product_name">Nome</label>
                    <input class="form-control" type="text" id="product_name">
                    <label for="product_img">Imagem do produto</label>
                    <input class="form-control" type="file" name="" id="">
                </div>
                <div class="row d-flex">
                    <label for="product_desc">Descrição do produto</label>
                    <textarea  class="form-control"  id="product_desc"></textarea>
            
                </div>
                <div class="row d-flex">
                    <div class="col">
                        <label for="product_price">valor</label>
                        <input class="form-control" type="number" id="product_price">
                    </div>
                    <div class="col">
                        <label for="product_stock">Estoque</label>
                        <input class="form-control" type="number" id="product_stock">
                    </div>
                    <button class="btn btn-primary mt-2" type="submit">Cadastrar</button>
                </div>
            
            </form>
        </section>
        


    </div>`;
}

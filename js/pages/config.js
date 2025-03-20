function config(){
    return `
     <section class="card card-body col-3 fs-4 animate__animated animate__fadeInRight">
        <div class="alert alert-info">
            <strong>Dica:</strong>
            Selecione apenas os modulos que você quer nesse sistema
        </div>
        <div class="row">
            <div class="col"><div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_categoria">
                <label class="form-check-label" for="modulo_categoria">Categorias</label>
              </div>
              <div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_clientes">
                <label class="form-check-label" for="modulo_clientes">Clientes</label>
              </div>
              <div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_paises">
                <label class="form-check-label" for="modulo_paises">paises</label>
              </div>
              <div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_produtos">
                <label class="form-check-label" for="modulo_produtos">produtos</label>
              </div>
              <div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_pedidos">
                <label class="form-check-label" for="modulo_pedidos">pedidos</label>
              </div></div>
            <div class="col">
                <div class="alert alert-secondary">
                    <span class="fs-1" id="contador_de_modulo"> 0 </span>modulos
                </div>
            </div>
        </div>
        <hr>
        <h3>Mudar de tema</h3>
        <a >
            
             <div class="form-check form-switch">
             <input onChange="mudarTema(this)" class="form-check-input" type="checkbox" role="switch" id="darkmode">
            
           </div>
    
        </a>

        

    </section>
    `
}
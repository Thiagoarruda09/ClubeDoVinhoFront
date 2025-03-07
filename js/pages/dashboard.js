function dashboard (){
    return`
    
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
        

    </section>
      <div class="d-flex">
    
        
        
        <!-- Conteúdo Principal -->
        <main class="flex-grow-1 animate__animated animate__fadeInRight">
            <header class="d-flex justify-content-between align-items-center bg-white p-3 shadow rounded mb-4">
                <h2 class="h5">Painel de Controle</h2>
                <button class="btn btn-danger">Sair</button>
            </header>
            
            <!-- Cards de Informações -->
            <section class="row g-4">
                <div class="col-md-4">
                    <div class="card shadow p-4 d-flex flex-row align-items-center">
                        <i data-lucide="activity" class="text-primary me-3" style="width: 40px; height: 40px;"></i>
                        <div>
                            <h5 class="card-title">Atividade</h5>
                            <p class="card-text text-muted">120 novas interações</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow p-4 d-flex flex-row align-items-center">
                        <i data-lucide="shopping-cart" class="text-success me-3" style="width: 40px; height: 40px;"></i>
                        <div>
                            <h5 class="card-title">Vendas</h5>
                            <p class="card-text text-muted">R$ 15.430,00 este mês</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow p-4 d-flex flex-row align-items-center">
                        <i data-lucide="user-check" class="text-warning me-3" style="width: 40px; height: 40px;"></i>
                        <div>
                            <h5 class="card-title">Novos Usuários</h5>
                            <p class="card-text text-muted">35 cadastrados hoje</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>`
}
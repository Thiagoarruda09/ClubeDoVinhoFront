function dashboard (){
    return`
    

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
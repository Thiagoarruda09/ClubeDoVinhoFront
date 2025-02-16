function navbar(){
    return `
     <ul class="nav nav-pills nav-fill gap-1 p-1 small bg-dark rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-); --bs-nav-pills-link-active-bg: var(--bs-white);">
        <li class="nav-item" role="presentation" >
          <button onClick="alterarConteudo('dashboard')"  class="nav-link    rounded-5" id="nav_link_1" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Dashboard</button>
        </li>
        <li class="nav-item" role="presentation">
          <button onClick="alterarConteudo('categorias')" class="nav-link  rounded-5" id="nav_link_2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Categorias</button>
        </li>
        <li class="nav-item" role="presentation">
          <button onClick="alterarConteudo('clientes')" class="nav-link rounded-5" id="nav_link_3" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Clientes</button>
        </li>
        <li class="nav-item" role="presentation">
            <button onClick="alterarConteudo('paises')"  class="nav-link rounded-5" id="nav_link_4" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Paises</button>
          </li>
          <li class="nav-item" role="presentation">
            <button onClick="alterarConteudo('produtos')"  class="nav-link rounded-5" id="nav_link_5" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Produtos</button>
          </li>
          <li class="nav-item" role="presentation">
            <button onClick="alterarConteudo('pedidos')"  class="nav-link rounded-5" id="nav_link_6" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Pedidos</button>
          </li>
           <a href="index.html">
               <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5 bg-danger "  data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Sair</button>
                         </li>
           </a>
      </ul>`
}
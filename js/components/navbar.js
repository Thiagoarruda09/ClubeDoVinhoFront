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
           <a >
               <li class="nav-item" role="presentation">
                <button  onClick="mudarTema()" class="nav-link rounded-4 "  data-bs-toggle="tab" type="button" role="tab" aria-selected="false" style="margin-top: 2px;"><svg id="svg_sun" style="display: block; " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg><svg id="svg_moon" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg></button>
                         </li>
           </a>
           

      </ul>`
}
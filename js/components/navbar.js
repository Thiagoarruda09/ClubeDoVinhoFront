function navbar() {
  return `
    
     <ul class=" d-flex flex-column nav nav-pills nav-fill gap-1 p-1 small bg-dark rounded shadow-lg" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-); --bs-nav-pills-link-active-bg: var(--bs-white); height:"100vh"> 
     <svg width="55px" class="offset-3" viewBox="-12.8 -12.8 153.60 153.60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="animate__animated animate__backInDown iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M43.34 11.83l11.98 6.53l17.92.49l11.11-6.5l1.58 4.22s6.99 18.86 6.46 29.41c-.49 9.88-1.7 18.62-10.81 26.51c-6.86 5.93-13.71 6.46-13.71 6.46L68 99.13s8.97.4 14.24 3.82c4.76 3.09 5.54 6.07 5.54 8.04c0 1.98-1.85 12.13-24.26 11.87s-23.74-11.21-23.74-13.19c0-1.98 2.12-5.79 8.44-8.18c5.93-2.24 11.08-1.98 11.08-1.98V78.56s-8.31-2.11-14.64-8.18c-3.91-3.75-10.42-12.26-9.49-26.11c.8-12.14 8.17-32.44 8.17-32.44z" opacity=".5" fill="#ffffff"></path><path d="M43.34 11.83l4.75-4.35l7.38-2.37l17.01.13l7.78 3.3l4.09 3.82l1.58 4.22s6.99 18.86 6.46 29.41c-.49 9.88-1.7 18.62-10.81 26.51c-6.86 5.93-13.71 6.46-13.71 6.46l.06 20.14s9.02 1.03 14.3 4.46c4.76 3.09 5.55 5.47 5.55 7.45c0 1.98-1.85 12.13-24.26 11.87s-23.74-11.21-23.74-13.19c0-1.98 2.12-5.79 8.44-8.18c5.93-2.24 11.01-2.4 11.01-2.4l.07-20.54s-8.31-2.11-14.64-8.18c-3.91-3.75-10.42-12.26-9.49-26.11c.8-12.15 8.17-32.45 8.17-32.45z" opacity=".7" fill="#e0e0e0"></path><path d="M58.59 79.03c-.29-.09-6.77-1.66-11.17-5.1c-8.56-6.7-12.62-14.09-13.14-23.95c-.31-5.82 2.08-15.71 3.78-22.64c1.74-7.06 3.84-12.34 3.86-12.4c0 0 .28-.8.58-.65c.63.32 0 3.1 0 3.1c-.48 1.78-.94 3.46-2.64 10.42c-1.67 6.81-3.86 16.5-3.57 22.05c.49 9.23 4.3 16.17 12.37 22.48c4.1 3.21 9.31 4.47 10.02 4.81s1.63.5 1.5 1.41c-.14.94-1.59.47-1.59.47z" fill="#d4d4d4"></path><path d="M68.62 79.28c-.75.07-1.48-.06-1.54-.79c-.08-.9 1.04-.96 1.04-.96c.74-.27 4.53-.58 8.28-2.83c10.57-6.34 15.69-16.29 15.03-29.19c-.92-17.79-7.9-31.34-7.97-31.47l1.32-1.94c.07.14 7.7 15.08 8.65 33.31c.71 13.69-4.4 24.3-15.65 31.04c-4.1 2.46-8.77 2.79-9.16 2.83z" fill="#9e9e9e"></path><path d="M65.13 21.92c-.25 0-.5 0-.75-.01c-8.8-.13-16.32-2.61-19.96-6.13c-1.3-1.25-1.48-2.12-1.55-3.5c-.13-2.37 2.69-8.29 21.06-8.19c12.11.06 21.1 3.81 21.15 8.51c.02 1.42-.23 2.58-1.58 3.92c-3.45 3.39-10.29 5.4-18.37 5.4zm-2.1-15.34c-12.04.1-17.2 3.42-17.15 5.57c.01.55.05.86.71 1.54c2.4 2.5 8.85 5.08 17.84 5.21c8.96.15 14.65-2.25 16.97-4.54c.75-.73 1.13-.97 1.13-1.55c0-2.27-4.87-5.94-17.75-6.22c-.59 0-1.18-.01-1.75-.01z" fill="#c8c8c8"></path><path d="M65.32 19.74c-.81 0-1.66-.02-2.54-.07c-14-.74-16.72-6.35-16.85-6.61c-.24-.5-.35-1.47.03-1.58c.51-.15.78.3 1.3.78c.84.78 3.87 4.83 16.52 5.12c12.4.29 16.39-3.49 17.12-4.15c.55-.5 1.13-1.54 1.59-1.24c.46.3.22 1.5-.05 1.97c-.42.72-3.55 5.78-17.12 5.78z" fill="#ffffff"></path><path d="M63.79 79.74c-2.15 0-1.71 1.65-1.82 12.62c-.08 8.75.83 10.31 1.73 10.4c.91.08 1.73-.58 1.73-9.82c.01-10.72.34-13.2-1.64-13.2z" fill="#9e9e9e"></path><path d="M67.11 100.05c-.82.07.07 1.86-1.04 3.28c-.88 1.12-2.53 1.79-2.46 3.05c.07 1.27 6.55.45 6.55-1.94c0-.93-.68-1.58-1.34-2.46s-1.3-1.97-1.71-1.93z" fill="#ffffff"></path><path d="M52.14 109.06s2.85 3.82 11.63 3.9c8.86.08 11.05-2.6 11.38-3.66c.24-.8-2.76-4.99-3.13-4.92c-.37.07-1.34 3.96-8.19 3.71s-7.03-2.94-7.58-3.45c-.44-.41-4.11 4.42-4.11 4.42z" fill="#9e9e9e"></path><path d="M43.95 107.2c-2.22.29-2.32 2.87-.89 5.21c2.9 4.77 12.53 8.03 13.03 5.44c.45-2.31-4.61-2.9-4.1-6.78c.37-2.83 5.44-5.44 4.02-6.93c-1.41-1.49-3.57 2.01-6.48 2.68c-2.54.59-3.87.16-5.58.38z" fill="#ffffff"></path><path d="M76.12 103.4c-1.24.99 2.46 2.01 2.31 5.06c-.15 3.05-3.2 4.37-2.61 5.21c.89 1.27 6.14-1.42 5.96-5.59c-.15-3.41-4.54-5.57-5.66-4.68z" fill="#cacaca"></path><path d="M74.78 117.48c.45 1.41 6.37.8 9.16-3.2c2.9-4.17.89-7.67-.22-7.3c-1.12.37.45 2.98-2.38 5.73c-2.84 2.75-7.06 3.19-6.56 4.77z" fill="#ffffff"></path><path d="M39.79 109.54c-.26-.24-.73 2.12.06 4.06c.67 1.64 4.1 10.2 24.65 10.35c22.86.17 24.03-9.63 23.74-12.37c-.19-1.81-.54-2.43-.72-2.43c-.17-.01-.35 1.6-.5 2.47c-.48 2.72-3.16 9.58-22.15 9.73c-17.28.14-22.34-6.93-23.23-8.19c-.63-.9-1.7-3.48-1.85-3.62z" fill="#9e9e9e"></path><path d="M38.26 47.89l3.07 8.36l11.26 6.06L67 65.03l14.33-12.45l5.03-7.42s-4.94-2.1-10.52-2.92c-8.7-1.28-16.09-1.6-24.79.02c-10.69 1.99-12.79 5.63-12.79 5.63z" fill="#cc1935"></path><radialGradient id="IconifyId17ecdb2904d178eab21458" cx="63.951" cy="49.576" r="25.281" gradientTransform="matrix(-.00271 1 -1.0419 -.00283 115.778 -14.234)" gradientUnits="userSpaceOnUse"><stop offset=".404" stop-color="#af0d1a"></stop><stop offset=".535" stop-color="#ab0c19"></stop><stop offset=".667" stop-color="#9f0b17"></stop><stop offset=".801" stop-color="#8a0813"></stop><stop offset=".935" stop-color="#6e050d"></stop><stop offset=".96" stop-color="#68040c"></stop></radialGradient><path d="M57.96 60.51c10.06.34 11.43-5.54 19.62-11.34s11.51-4.09 11.51-4.09s2.75 12.47-6.74 22.34c-8.27 8.61-23.42 11.2-35.38 1.07c-8.87-7.51-8.71-20.6-8.71-20.6s6.99 12.19 19.7 12.62z" fill="url(#IconifyId17ecdb2904d178eab21458)"></path><path d="M45.09 20.08s-1.41 3.97-3.19 11.93c-1.53 6.84-2.16 11.19-2.16 11.19s3.22-1.6 6.81-2.54c3.25-.85 6.06-.68 6.06-.68s-.09-5.21.34-8.97c.35-3.1 1.11-7.09 1.11-7.09s-2.82-.68-4.53-1.45c-1.71-.77-4.44-2.39-4.44-2.39z" fill="#ffffff"></path></g></svg>
        <li class="nav-item mt-2" role="presentation" >
          <button onClick="alterarConteudo('dashboard')"  class="nav-link    rounded " id="nav_link_1" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Dashboard</button>
        </li>
        <li class="nav-item mt-2 " role="presentation">
          <button onClick="alterarConteudo('categorias')" class="nav-link  rounded      " id="nav_link_2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Categorias</button>
        </li>
        <li class="nav-item mt-2" role="presentation">
          <button onClick="alterarConteudo('clientes')" class="nav-link rounded" id="nav_link_3" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Clientes</button>
        </li>
        <li class="nav-item mt-2" role="presentation">
            <button onClick="alterarConteudo('paises')"  class="nav-link rounded" id="nav_link_4" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Paises</button>
          </li>
          <li class="nav-item mt-2" role="presentation">
            <button onClick="alterarConteudo('produtos')"  class=" nav-link rounded" id="nav_link_5" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Produtos</button>
          </li>
          <li class="nav-item mt-2" role="presentation">
            <button onClick="alterarConteudo('pedidos')"  class="nav-link rounded" id="nav_link_6" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Pedidos</button>
          </li>
      
                  <li class="nav-item mt-2 " role="presentation">
          
           <a href="vitrine.html" class="nav-link  rounded      ">Vitrine</a>
        </li>
                    <li class="nav-item mt-2" role="presentation">
                  <button class="nav-link rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_start" aria-controls="offcanvas_start">
       Configurações
      </button>
          </li>
          
           <a href="index.html">
               <li class="nav-item mt-2" role="presentation">
                <button class="nav-link rounded-5 gradient "  data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Sair</button>
                         </li>
           </a>
 
           

      </ul>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas_start" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <section class="card card-body  fs-4">
        <div class="alert alert-info">
            <strong>Dica:</strong>
            Este sistema possui modulos extras que podem ser ativados ou desativados, selecione qual você quer <strong>desativar</strong>
        </div>
        <div class="row d-flex flex-column">
            <div class="col">
              
              <div class="form-check form-switch">
                <input onchange="MudarDeModulo (this)" class="form-check-input" type="checkbox" role="switch" id="modulo_paises">
                <label class="form-check-label" for="modulo_paises">paises</label>
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
        

        

    </section>
    
  </div>
</div>



            `;
}

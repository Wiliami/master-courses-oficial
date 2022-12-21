class Menu extends HTMLElement {
    constructor() {
        super();

        this.build();
    }
    
    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.createMenu());
    }

    createMenu() {
        const menu = document.createElement('header');
        menu.innerHTML = `
        <header class="py-3 mb-3 border-bottom">
        <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            </a>
          
          </div>
    
          <div class="d-flex align-items-center">
            <form class="w-100 me-3" role="search">
              <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
            </form>
    
            <div class="flex-shrink-0 dropdown">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
              <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="../painel/profile/minha-conta.html">Minha conta</a></li>
                <li><a class="dropdown-item" href="../painel/profile/reset-password.html">Mudar senha</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
        `;

    return menu;
    }


}

customElements.define('main-menu', Menu);
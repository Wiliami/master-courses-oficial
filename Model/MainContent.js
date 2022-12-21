class MainContent extends HTMLElement {
    constructor() {
        super();

        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.createMainContent());
    }

    createMainContent() {
        const mainContent = document.createElement('main');
        mainContent.innerHTML = `
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Seja bem-vindo, admin</h1>
                    </div>      
                </main>
            </div>
        </div>
        `;

        return mainContent;
    }
}


customElements.define('main-content', MainContent);
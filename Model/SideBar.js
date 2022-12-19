class SibeBar extends HTMLElement {
   constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });


    const head = document.createElement('head');
    head.textContent = `
        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/">
        <link href="../../assets/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    `;

    const style = document.createElement('style');
    style.textContent = `
        .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        }

        @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
        }

        .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }

        .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
        }

        .bi {
        vertical-align: -.125em;
        fill: currentColor;
        }

        .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
        }

        .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        } 

        <!-- Custom styles for this template -->
        <link href="../../assets/css/dashboard/index.css" rel="stylesheet">
    `;

    const nav = document.createElement('nav');
    nav.textContent = `
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3 sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <span data-feather="home" class="align-text-bottom"></span>
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./admin/users/list.html">
                        <span data-feather="user" class="align-text-bottom"></span>
                        Usuários
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./admin/courses/list.html">
                        <span data-feather="book" class="align-text-bottom"></span>
                        Cursos
                    </a>
                </li>      
            </ul>
            </div>
        </nav>
    `;
    
    shadow.appendChild('head');
    shadow.appendChild('style');
    shadow.appendChild('nav');

    }

}



customElements.define('side-bar', SibeBar);
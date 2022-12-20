class SibeBar extends HTMLElement {
   constructor() {
    super();

    this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' }); 
        // shadow.appendChild(this.getLinkHead());
        shadow.appendChild(this.styles());
        shadow.appendChild(this.createSideBar());
        // shadow.appendChild(this.getScripts());
    } 
   
    // getLinkHead() {
    //     const links = document.createElement('link');
    //     links.innerHTML = `
    //     <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/">
    //     <link rel="stylesheet" href="../assets/css/bootstrap/bootstrap.min.css">
    //     <link href="../assets/css/dashboard/index.css" rel="stylesheet">
    //     `;
    //     return links;
    // }


    styles() {
        const style = document.createElement('style');
        style.innerHTML = `
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
        `;

        return style;
    }

    createSideBar() {
        const sidebar = document.createElement('nav');
        sidebar.innerHTML = `
        <div class="container-fluid">
            <div class="row">
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
                                <a class="nav-link" href="./dashboard/admin/users/list.html">
                                    <span data-feather="user" class="align-text-bottom"></span>
                                    Usuários
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./dashboard/admin/courses/list.html">
                                    <span data-feather="book" class="align-text-bottom"></span>
                                    Cursos
                                </a>
                            </li>      
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        `;

        return sidebar;
    }

    // getScripts() {
    //     const script = document.createElement('script');
    //     script.innerHTML = `
    //     <script src="../assets/css/bootstrap/bootstrap.bundle.min.js"></script>
    //     <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="../assets/js/dashboard.js"></script>
    //     `;

    //     return script;
    // }
 }



customElements.define('side-bar', SibeBar);
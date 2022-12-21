class SibeBar extends HTMLElement {
   constructor() {
    super();

    this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' }); 
        // shadow.appendChild(this.getLinkHead());
        // shadow.appendChild(this.styles());
        shadow.appendChild(this.createSideBar());
        // shadow.appendChild(this.getScripts());
    } 
   
    // getLinkHead() {
    //     const links = document.createElement('link');
    //     links.innerHTML = `
      
        
    //     `;
    //     return links;
    // }


    // styles() {
    //     const style = document.createElement('style');
    //     style.innerHTML = `
       
    //     `;

    //     return style;
    // }

    createSideBar() {
        const sidebar = document.createElement('div');
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

            <!-- Container Main -->

          
        `;

        return sidebar;
    }

    // getScripts() {
    //     const script = document.createElement('script');
    //     script.innerHTML = `
       
    //     `;

    //     return script;
    // }
 }



customElements.define('side-bar', SibeBar);
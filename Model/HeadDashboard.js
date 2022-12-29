class HeadDashboard extends HTMLElement {
    constructor() {
        super();

        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.addLink());
        shadow.appendChild(this.addStyle());
    }

    addLink() {
        const link = document.createElement('link');
        link.textContent = `     
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/">
            <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/footers/">
            <link href="./assets/css/bootstrap/bootstrap.min.css" rel="stylesheet">
        `;


        return link;
    }

    addStyle() {
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
    

            <link href="./assets/css/dashboard/index.css" rel="stylesheet">

        ` 

        return style;
    }
}



customElements.define('tag-link', HeadDashboard);
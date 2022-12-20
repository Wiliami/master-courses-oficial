class SidebarLinksHead extends HTMLElement {
    constructor() {
        super();

    this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.getLinkHead());
    }


    getLinkHead() {
        const link = document.createElement('link');
        link.innerHTML = `
        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/">
        <link rel="stylesheet" href="../assets/css/bootstrap/bootstrap.min.css">
        <link href="../assets/css/dashboard/index.css" rel="stylesheet">
        `;

        return link;
    }
}

customElements.define('link-sidebar', SidebarLinksHead);
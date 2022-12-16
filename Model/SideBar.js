class SibeBar extends HTMLElement {
   constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const nav = document.create('nav');
    nav.setAttribute('class', 'sidebarMenu');


    const style = document.createElement('style');
    style.textContent = `
        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/dashboard/">
        <link href="../../assets/css/bootstrap/bootstrap.min.css" rel="stylesheet">

        
    `;


    // adicionando conteúdo aqui nesse component

   } 
}


customElements.define('side-bar', SibeBar);
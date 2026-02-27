export default function compTexto(): void {
    class Texto extends HTMLElement {
        constructor() {
            super();
            this.obtenerCss;
            this.obtenerHtml;
            this.render() };

        obtenerCss(): HTMLElement {
            let css: HTMLElement = document.createElement('style');
            css.innerHTML = `
                .texto { 
                margin: 0px;
                font-family: "Courgette", cursive;
                font-weight: 400;
                font-style: normal;
                font-size: 80px;
                color: white } `;
            return css };

        obtenerHtml(): HTMLElement {
            let titulo: HTMLElement = document.createElement('h1');
            titulo.setAttribute('class', 'texto');
            titulo.textContent = 'Agregar Videos';
            return titulo };

        render(): void {
            let html: HTMLElement = this.obtenerHtml();
            let css: HTMLElement = this.obtenerCss();
            let shadow: ShadowRoot = this.attachShadow({mode: 'open'});
            shadow.appendChild(html);
            shadow.appendChild(css)
        }
    };
    customElements.define('mi-texto', Texto)
}
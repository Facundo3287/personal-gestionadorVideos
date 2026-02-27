import portapapeles from '../portapapeles.png';

export default function compForm(): void {
    class Form extends HTMLElement {
        constructor() {
            super();
            this.obtenerCss;
            this.obtenerHtml;
            this.render() };

        obtenerCss(): HTMLElement {
            let css: HTMLElement = document.createElement('style');
            css.innerHTML = `
                * { box-sizing: border-box }

                .form {
                padding-top: 30px;
                padding-bottom: 30px;
                padding-right: 7vw;
                padding-left: 7vw;
                border-radius: 10px;
                width: 45vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgb(25, 25, 25) }

                .label { 
                margin-bottom: 5px;
                width: 100%;
                align-self: flex-start;
                font-family: "Poppins", sans-serif;
                font-weight: 300;
                font-style: normal;
                color: white  } 

                .cont { 
                width: 100%;
                display: flex;
                flex-direction: row }
                
                .input {
                margin-bottom: 10px;
                padding: 10px;
                border: none;
                width: 100%;
                height: 30px;
                font-family: "Cascadia Code", sans-serif;
                font-optical-sizing: auto;
                font-weight: 200;
                font-style: normal;
                background-color: rgb(40, 40, 40);
                color: white }

                .portapapelesCont {  
                margin-bottom: 10px;
                width: 35px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(80, 80, 80); }

                .portapapelesCont:hover {
                background-color: rgb(70, 70, 70)  }

                .portapapelesCont:active {
                background-color: rgb(90,90,90) }

                .portapapelesIcono {
                width: 60%;
                height: 60% }

                .input:focus {
                border: none;
                outline: none }
                
                .output {
                margin-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
                border: none;
                width: 100%;
                height: 30px;
                line-height: 2.3;
                font-family: "Poppins", sans-serif;
                font-weight: 300;
                font-style: normal;
                font-size: 13px;
                background-color: rgb(50, 50, 50);
                color: white }
                
                .boton {
                border: none;
                width: 30%;
                height: 30px;
                font-family: "Poppins", sans-serif;
                font-weight: 300;
                font-style: normal }

                .boton:hover {
                border: none;
                outline: none;
                background-color: rgb(210, 210, 210)  }

                .boton:active {
                border: none;
                width: 30%;
                height: 30px;
                background-color: white }`;

            return css };

        obtenerHtml(): HTMLElement {
            let form: HTMLFormElement = document.createElement('form');
            let label: HTMLElement = document.createElement('label');
            let cont: HTMLElement = document.createElement('div');
            let portapapelesCont: HTMLElement = document.createElement('div');
            let portapapelesIcono: HTMLElement = document.createElement('img');
            let input: HTMLElement = document.createElement("input");
            let output: HTMLElement = document.createElement('div');
            let boton: HTMLButtonElement = document.createElement('button');
            form.setAttribute('class', 'form');
            label.setAttribute('class', 'label');
            cont.setAttribute('class', 'cont');
            input.setAttribute('class', 'input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'link');
            portapapelesCont.setAttribute('class', 'portapapelesCont');
            portapapelesIcono.setAttribute('src', `${portapapeles}`);
            portapapelesIcono.setAttribute('class', `portapapelesIcono`);
            output.setAttribute('class', 'output');
            boton.setAttribute('class', 'boton');
            label.textContent = 'Link';
            boton.textContent = 'Agregar';
            form.appendChild(label);
            form.appendChild(cont);
            cont.appendChild(input);
            portapapelesCont.appendChild(portapapelesIcono);
            cont.appendChild(portapapelesCont);
            form.appendChild(output);
            form.appendChild(boton);
            form.addEventListener('submit', (e: SubmitEvent) => {
                e.preventDefault();
                let link = form.link.value;
                console.log('datos obtenidos => ', link);
            });
            return form };

        render(): void {
            let html: HTMLElement = this.obtenerHtml();
            let css: HTMLElement = this.obtenerCss();
            let shadow: ShadowRoot = this.attachShadow({mode: 'open'});
            shadow.appendChild(html);
            shadow.appendChild(css)
        }
    };
    customElements.define('mi-form', Form)
}
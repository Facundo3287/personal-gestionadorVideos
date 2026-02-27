export default function pagAgregar(goTo: (url: string) => void): void {
    let app: HTMLElement = document.getElementById('app')!;
    let contenedor: HTMLElement = document.createElement('div');
    contenedor.setAttribute('class', 'app__cont--pagAgregar');
    contenedor.innerHTML = `
    <mi-texto class = 'cont--pagAgregar__titulo'></mi-texto>
    <mi-form class = 'cont--pagAgregar__form'></mi-form>`;
    app.innerHTML = '';
    app.appendChild(contenedor)
}
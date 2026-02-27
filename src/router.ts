import type { Ruta } from './tipos';
import pagAgregar from './paginas/pagAgregar/pagAgregar.js';
import pagOtro from './paginas/pagOtro.js';

export default function initRouter(): void {
    let url: string = convertirUrl(location.pathname);
    goTo(url)
};

function convertirUrl(url: string): string {
    if (url == '/') return '/agregar'
    else return url
};

function goTo(url: string): void {
    history.pushState({}, '', url);
    hanlderRouter(url)
};

function hanlderRouter(url: string): void {
    for (let aux of rutas) if (aux.url == url) aux.metodo(goTo)
};

let rutas: Ruta[] = [
    { url: '/agregar', metodo: pagAgregar },
    { url: '/otro', metodo: pagOtro }
]


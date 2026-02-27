import './style.css';
import './paginas/pagAgregar/pagAgregar.css';
import initRouter from './router.js';
import compTexto from './componentes/compTexto.js';
import compForm from './componentes/compForm.js';

function main (): void {
    compTexto();
    compForm();
    initRouter()
};

main()


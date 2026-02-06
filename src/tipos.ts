export interface Ruta {
    url: string,
    metodo: ( goTo: (url: string) => void ) => void
}
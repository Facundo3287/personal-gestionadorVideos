import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

let app = express();
let port: number = 8000;
let url: string = import.meta.url;
let __dirname: string = fileURLToPath(url);
let ruta: string = path.join(__dirname, '..', '..', 'dist');
app.use(express.static(ruta));

app.get(/.*/, (req, res) => {
    let url: string = import.meta.url;
    let __dirname: string = fileURLToPath(url);
    let ruta: string = path.join(__dirname, '..', '..', 'dist', 'index.html');
    res.send(ruta)
});

app.listen(port, () => { console.log(`server prendido en el puerto ${port}...`) } )
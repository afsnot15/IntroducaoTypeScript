import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
    objetos.forEach(object => {
            console.log(object.paraTexto());
    });
}
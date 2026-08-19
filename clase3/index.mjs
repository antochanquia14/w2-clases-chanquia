console.log ('Hola')
/*Uso de modulos built- in
con el sistema de modulos modero
*/
import os from 'node:os'; /*siempre que trabajemos sobre modulos internos*/
//import { readFile } from 'node:fs/promises';
import fsp from 'node:fs/promises';

const contenido = await fsp.readFile('./texto.txt','utf-8')
console.log(contenido)
//console.log(os.totalmem()/ 1024/ 1024/ 1024)
//console.log((os.totalmem()- os.freemem())/ 1024/ 1024/ 1024)
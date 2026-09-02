import http from 'node:http'

//Intanciamos un servidor
const servidor = http.createServer((peticion, respuesta) => {
    //console.log(peticion)
    //console.log('entra peticion')
    //console.log(peticion.url, peticion.method)
    //respuesta.end('Hola desde el servidor')
//--------------------------------------------------
//     if (peticion.url === '/') {
//         return respuesta.end('estamos en la raiz')
//     } else if (peticion.url === '/iii') {
//        return respuesta.end('hola que tal')
//     } else {
//         respuesta.statusCode = 404
//        return respuesta.end('No encontrado')
//     }
//------------------------------------------------
     if (peticion.url === '/' && peticion.method === 'GET') {
         return respuesta.end('hola que tal')
     }
     if (peticion.url === '/iii' && peticion.method === 'GET') {
         return respuesta.end('hola que tal')
     }
     if (peticion.url === '/iii' && peticion.method === 'POST') {
         return respuesta.end('hola que tal en el POST')
     }
})
//abrimos un puerto y lo ponemos a escuchar
servidor.listen(3000, () => {
    console.log('servidor arrancado')

}) 
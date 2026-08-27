const numeros= [1,2,3,4,5,6]
// map

// callbacks, 2 maneras
// flecha, declarando funcion afuera (flecha es siempre anonima)
//const recorrer= () => {
//
//}
 //nombro la funcion recorrer y la llamo dentro de otra funcion
//numeros.map(recorrer) y lo va a recorrer la cantidad de veces del arreglo, osea 6


// //esto es otro callback
// const nuevoArreglo = numeros.map((numero)=>{
//     console.log(numero)
//     return numero + 2
// })
// console.log(nuevoArreglo)

//trabajar con un objeto
const productos = [
    {
        nombre: 'pantalon',
        precio: 100
    },   
    {
        nombre: 'remera',
        precio: 50
    },   
]

const productosConInteres = productos.map ((producto)=> {
    const productoCambiado = {
        nombre: producto.nombre,
        precio: producto.precio * 1.1
    }
    return productoCambiado

})
console.log (productosConInteres)

//Callback
function x(cb){

    const n= 1
    //Pasamos un valor a la funcion de callback
    cb(n)
}
// //const saludo = ()=> {
// console.log ('se ejecuto el CB')   
// }
// x(saludo())

x((n)=>{
    //Obtenemos ese valor pasado en el cuerpo de x()
    console.log ('se ejecuto el CB con el valor pasado por x:' + n)
    })
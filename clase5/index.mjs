// COMIENZO DE ACTIVIDAD 2
//Declarar funcion obtenerUsuarios
/*
- Obtener via fetch () los usuarios desde la API REST
-constante usuarios con su arreglo de usuarios */

async function obtenerUsuarios(){
    const respuesta = await fetch ('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() // usuarios va a ser un arreglo de objetos
}

//debemos construir un elemento con solo las 3 propiedades desginadas

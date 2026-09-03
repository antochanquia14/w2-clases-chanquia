import express from 'express'

const PUERTO = 3000 //constante con mayuscula por conveniencia

const app = express()
//----Configurar las rutas con su verbo
app.get('/', (req, res) => {
 //   res.end('Hola express')
 res.send('diosito jebus')
 //res.send({ mensaje: 'hola' });
})









//app tiene una instancia de express
app.listen(PUERTO, () => {

    console.log(`servidor express corriendo con el puerto ${PUERTO}`)
})
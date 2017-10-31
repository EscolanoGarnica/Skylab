//Este proyecto crea una api para crear, listar, modificar y eliminar usuarios

require('dotenv').config()  //dotenv para utilizar variables de entorno, es necesario instalar dotenv; npm install dotenv

const express = require('express')//importamos express
const app = express()   //creamos nuestra app de express
const bodyParser = require('body-parser')   //importamos body-parser para parsear el body



app.use(require('./cors'))//importamos y usamos esta clase para los permisos cors, está en la carpeta cors

app.use(bodyParser.json())//añadimos bodyparser a express

const router = express.Router() // creamos un enrutador de express

const usersApi = require('./users/usersApi')//impostamor userApi, archivo que contiene todas las llamadas de la Api

app.use('/api', usersApi(router))//Llamamos a usersApi pasandole el enrutador, esta nos devuelve el enrutador relleno de gets, posts etc



console.log(`starting Users API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Users API is up'))//ponemos a express a escuchar en el puerto indicado por el archivo: .env

process.on('SIGINT', () => {//esto se ejecuta cuando se quiere parar el server
    console.log('\nstopping Users API...')

    process.exit()//esto para totalmente el server cuando hay definido un process.on('SIGINT') si no se quedaría activo
})
const usersService = new(require('./UsersService'))//importamos la clase que se encarga de mantener la api

const { FileLogger } = require('../logger')  //importamos una clase propia para hacer logs
const log = new FileLogger('Users API', `users-api-${new Date().getTime()}.log`)

module.exports = (router) => {
    router.route('/users')
        .post((req, res) => {//cuando llega una llamada POST a la ruta "/users se ejecuta esta funcion"
            const { username, password } = req.body //cogemos username y password del body (gracias a bodyparser)

            try {
                const user = usersService.createUser(username, password)//llamamos a usersServise para crear el usuario y le pasamos el usernam y el password

                log.info(`request from IP ${req.ip} to create a user ${username} succeeded`)//metemos un log en nuestro logger

                res.json({//si todo ha ido bien devolvemos este json
                    status: 'OK',
                    message: 'user created successfully',
                    data: {
                        id: user.id,
                        username: user.username
                    }
                })
            } catch (err) {//si ha habido un error devolvemos este json
                log.warn(`Request from IP ${req.ip} to create a user ${username}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })

        .get((req, res) => {//si llega una llamada GET a '/users' hay que listar los usuarios
            let list = []//creamos un array donde meteremos los datos que nos devuelva la api
            const query = req.query.query//recogemos la query

            if(query){//si hay query filtraremos la lista de usuarios
                list = usersService.listUsersFiltered(query).map(user => ({ id: user.id, username: user.username }))
            }else{//si no hay query mostramos la lista entera de usuarios
                list = usersService.listUsers().map(user => ({ id: user.id, username: user.username }))
            }

            log.info(`request from IP ${req.ip} to list users succeeded`)

            res.json({//devolvemos los datos obtenidos
                status: 'OK',
                message: 'users listed successfully',
                data: list
            })
        })

    router.route('/users/:id')
        .get((req, res) => {//si llega una llamada GET con el formato "/users/unIdAqui" se devuelve un usario en concreto en caso de que exista
            const id = req.params.id //obtenemos el id mediante params

            try {
                const user = usersService.retrieveUser(id)//se ejecuta la función que devuelve un user por id

                log.info(`request from IP ${req.ip} to retrieve user with id ${id} succeeded`)

                res.json({
                    status: 'OK',
                    message: 'user retrieved successfully',
                    data: { id: user.id, username: user.username }
                })
            } catch(err) {
                log.warn(`Request from IP ${req.ip} to retrieve user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })

        .put((req, res) => {//cuando llega una llamada PUT con ruta '/users/unIdAqui' se llama a la función de la api que actualiza un usuario
            const id = req.params.id

            const { username, password } = req.body

            try {
                usersService.updateUser(id, username, password)

                res.json({
                    status: 'OK',
                    message: 'user updated successfully',
                    data: { id, username }
                })
            } catch(err) {
                log.warn(`Request from IP ${req.ip} to update user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })

        .delete((req, res) => {//cuando llega una llamada DELETE a la ruta '/users/unIdAqui' se llama a la función que elimina un user dado un id
            const id = req.params.id

            try {
                const user = usersService.deleteUser(id)

                log.info(`request from IP ${req.ip} to delete user with id ${id} succeeded`)

                res.json({
                    status: 'OK',
                    message: 'user deleted successfully',
                    data: { id: user.id, username: user.username }
                })
            } catch(err) {
                log.warn(`Request from IP ${req.ip} to delete user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })
    return router
}
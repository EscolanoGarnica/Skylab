const fs = require('fs')//importamos file system de node para guardar y leer nuestro fichero

class UsersService {//creamos la clase UsersService
	constructor() {
		this.file = require('path').join(__dirname, 'users.json')//le damos la ruta y nombre al fichero

		this.users = JSON.parse(fs.readFileSync(this.file))//cargamos el fichero en memoria
	}

	save() {//función para guardar el fichero
		fs.writeFileSync(this.file, JSON.stringify(this.users, null, 4))
	}

	acceptUsername(username) {//regex para que no nos inyecten codigo, esta regex solo permite letras, numero y _
	    return /^[\w]+$/.test(username)
	}

	createUser(username, password) {//función para crear el usuario 
		if (!username || !this.acceptUsername(username) || !password)//comprobamos que el user y el pass no están vacios y que además pasa la regex
			throw new Error(`username and/or password wrong, ${JSON.stringify({username, password})}`)
		
		let [user] = this.users.filter(user => user.username === username)//filtramos a ver si el usuario ya existiera

		if (user)
			throw new Error(`username "${username}" already exists`)//si existe lanzamos un error

		user = { id: new Date().getTime(), username, password }// si no existe lo metemos en un objeto que contenga un nuevo id, el user y el pass

		this.users.push(user)//metemos el nuevo user en nuestra array en memoria

		this.save()// guardamos los cambios en el fichero

		return user
	}

	listUsers() {//función para listar todos los usuarios, se cargan de la array que hay en memoria
		return this.users
	}

	listUsersFiltered(query){//función para filtrar la lista de usuarios dada una query
		return this.users.filter(user =>user.username.includes(query))
	}

	retrieveUser(id) {//función para devolver un usuario dada una id
		if (!id)
			throw new Error('no user id provided')

		const [user] = this.users.filter(user => user.id == id)//filtramos la array comparando los id's para encontrar el usuario pedido

		if (!user)
			throw new Error(`no user found with id ${id}`)

		return user
	}

	updateUser(id, username, password) {//función para actualizar un usuario
		if (!id)//comprobamos que el id no está vacio
			throw new Error('no user id provided')

		if (!username || !this.acceptUsername(username) || !password) //comprobamos que el user y el pass no están vacios y que además pasa la regex
			throw new Error(`username and/or password wrong, ${JSON.stringify({username, password})}`)

		let [user] = this.users.filter(user => user.username === username)//filtramos a ver si el usuario ya existiera

		if (user && user.id != id)// si ya existe y no es suyo ese nombre de user(para ello comprobamos el id), si fuera suyo quiere decir que quiere cambiar el pass
			throw new Error(`username "${username}" already exists`); // EYE! what happens if removing this semicolon?

		[user] = this.users.filter(user => user.id == id)//buscamos el user a modificar por id

		if (!user)//si no existiera el id, lanzamos un error
			throw new Error(`no user found with id ${id}`)

		user.username = username//sobreescribimos el username
		user.password = password//sobreescribimos el pass

		this.save()//guardamos la array en el fichero

		return user
	}

	deleteUser(id) {//función para eliminar un user dado un id
		if (!id)
			throw new Error('no user id provided')

		let user

		for(let i = 0; i < this.users.length; i++) {//recorremos toda la array
			if ((user = this.users[i]).id == id) {//aquí hacemos dos cosas, asignar la variable usuario en cada iteración al user con el indice actual y comparar sus id's, cuando el id coincida:
				this.users.splice(i, 1)//eliminamos al usuario de esa posición mediante la función "splice"

				break
			} else if (i === this.users.length - 1)//si se llega al último elemento del for y no ha habido concidencia:
				user = undefined// se pone el user a undefined para que no coja el último usuario en caso de no haber coincidencia
		}

		if (!user)//si no hemos encontrado un usuario con la id dada, lanzamos error:
			throw new Error(`no user found with id ${id}`)

		this.save()// si todo ha ido bien y por tanto se ha eliminado el usuario de la array, guardamos los cambios en el fichero

		return user
	}
}

module.exports = UsersService//exportamos la clase
const http = require('http')
const axios = require('axios')



function showUsers(){
	http.get('http://192.168.0.13:3000/list-users',function(response){
		response.setEncoding('utf-8')
		response.on('data',console.log)
	})
}

function createUser(callback){
	
	const data = {
		username:'Micheloncio!!!!!!!!!!!',
		password:'1234232'
	}

	axios.post('http://192.168.0.13:3000/create-user', data)
	.then(function(response){
		let idUser = response.data.data.id
		return callback(idUser)
	})
	.catch(console.error)

}


function updateUser(idUser){
	const data = {
		id: idUser,
		username:'Micheloncio!'
	}
	axios.put('http://192.168.0.13:3000/update-user',data)
	.then(console.log)
	.catch(console.error)
}
showUsers()
createUser(updateUser)


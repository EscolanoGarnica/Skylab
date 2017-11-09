const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

const name = process.argv[2]

mongo.connect(url+name, (err, db) => {
	db.collection('users')
		.update({'username': 'tinatime'}, {
			$set: {'age': 40}
		}, (err, res) => {
			console.log(res)

			db.close()
		})
})
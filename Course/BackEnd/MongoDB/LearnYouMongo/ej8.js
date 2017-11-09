const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

const age = parseInt(process.argv[2])

mongo.connect(url, (err, db) => {
	db.collection('parrots')
		.count({'age': {$gt: age}}, (err, res) => {
			console.log(res)

			db.close()
		})
})
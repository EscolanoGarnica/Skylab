const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

const campo = parseInt(process.argv[2])

mongo.connect(url, (err, db) => {
	db.collection('parrots')
		.find({'age': {$gt: campo}}).toArray((err, doc) => {
			console.log(doc)

			db.close()
		})

})
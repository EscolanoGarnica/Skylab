const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'

const name = process.argv[2]
const col = process.argv[3]
const id = process.argv[4]

mongo.connect(url+name, (err, db) => {
	db.collection(col)
		.remove({'_id': id}, (err, res) => {
			console.log(res)

			db.close()
		})
})
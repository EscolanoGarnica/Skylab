const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

const name = process.argv[2]
const lastname = process.argv[3]

mongo.connect(url, (err, db) => {
	const obj = {firstName: name, lastName: lastname}
	db.collection('docs')
		.insert(obj, (err, doc) => {
			console.log(JSON.stringify(obj))

			db.close()
		})
})
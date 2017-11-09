// const mongo = require('mongodb').MongoClient

// const url = 'mongodb://localhost:27017/learnyoumongo'

// const campo = parseInt(process.argv[2])

// mongo.connect(url, (err, db) => {
// 	const cursor = db.collection('parrots')
// 		.find({'age': {$gt: campo}}).toArray()

// 	cursor.each((err, item) => {
// 		if (err) throw err

// 		if (item != null){
// 			console.dir("name: '" + item.name + "', age: '"+ item.age + "'")
// 		} else {
// 			db.close()
// 		}
// 	})

// })


const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

const campo = parseInt(process.argv[2])

mongo.connect(url, (err, db) => {
	db.collection('parrots')
		.find({'age': {$gt: campo}}, {
			name: true,
			age: true,
			_id: false
		}).toArray((err, doc) => {
			console.log(doc)

			db.close()
		})

})


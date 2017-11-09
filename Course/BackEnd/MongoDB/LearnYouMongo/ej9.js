const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

const size = process.argv[2]

mongo.connect(url, (err, db) => {
	db.collection('prices')
		.aggregate([{$match: {size: size}}, {$group: {
			_id: 'media', total: {
				$avg: '$price'
			}
		}}
		]).toArray((err, res) => {
			console.log(parseFloat(res[0].total).toFixed(2))

			db.close()
		})
})

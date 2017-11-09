const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db)=>{
	if(err) throw err

	// db.collection('restaurants').count((err,count)=>{
	//	if(err) throw err
	//
	// 	console.log(count)
	//
	// 	db.close()
	// })

	// db.collection('restaurants')
	// 	.find({borough: 'Manhattan'}).toArray((err,data)=>{
	// 		console.log(data)

	// 		db.close()
	// 	})

	const cursor = db.collection('restaurants')
		.find({"grades.score":{$gt:99}})

	cursor.each((err,item)=>{
		if(err) throw err 

		if(item==null)
			db.close()
		else{
			console.log(item.name)
			console.log(item.address.zipcode)
		}
	})

	console.log('Procesando...')

})
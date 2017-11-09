const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })

const Car = require('./models/Car')

const car = new Car({brand: 'Ferrari', model: 'Enzo', year: 2010})

car.save()
	.then(()=>console.log('car created!'))
	.catch(console.error)
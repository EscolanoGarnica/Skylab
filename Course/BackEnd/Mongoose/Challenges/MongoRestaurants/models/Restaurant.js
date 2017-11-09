const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema({

	restaurant_id : String,
	name : String,  
	borough : String, 
	cuisine : String, 
	address : { building : String, 
				coord : [ Number ], 
				street : String, 
				zipcode : String }, 
	grades : [ { date : Date, 
				grade : String, 
				score : Number }]
})

module.exports = mongoose.model('Restaurant', Restaurant)
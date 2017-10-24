//Write a node.JS program that read and shows in the console the html code of one external page. The link of the 
//external page should be read from a file link.txt



const fs = require('fs')

fs.readFile('link.txt', 'utf-8', (err, link) => {
	if (err) throw err

	var request = require('request')

	request(link, (error, response, body) => {
		console.log(body)
	})

})
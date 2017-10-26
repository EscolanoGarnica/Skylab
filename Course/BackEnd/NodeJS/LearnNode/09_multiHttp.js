const http = require('http')

if(process.argv.length !== 5){
	throw new Error('incorrect number of arguments')
}

const [url1,url2,url3] = process.argv.slice(process.argv.length-3)

countDatas = 0

let data1 = data2 = data3 = ''

http.get(url1, function(response){
	response.setEncoding('utf8')

	response.on('data',function(data){
		data1 += data
	})

	response.on('end',function(){
		countDatas += 1
		showResults()
	})
})

http.get(url2, function(response){
	response.setEncoding('utf8')

	response.on('data',function(data){
		data2 += data
	})

	response.on('end',function(){
		countDatas += 1
		showResults()
	})
})

http.get(url3, function(response){
	response.setEncoding('utf8')

	response.on('data',function(data){
		data3 += data
	})

	response.on('end',function(){
		countDatas += 1
		showResults()
	})
})

function showResults(){
	if(countDatas === 3){
		console.log(data1)
		console.log(data2)
		console.log(data3)
	}
}

/* OTRA FORMA DE HACERLO (HAY QUE INSTALAR EL PAQUETE "BL"(npm install -g bl)):

const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
 for (let i = 0; i < 3; i++) {
   console.log(results[i])
 }
}

function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
   
   response.pipe(bl(function (err, data) {

     if (err) {
       return console.error(err)
     }

     results[index] = data.toString()
     count++

     if (count === 3) {
       printResults()
     }
   }))
 })
}

for (let i = 0; i < 3; i++) {
 httpGet(i)
}
*/

const values = process.argv.slice(2)

const res = values.reduce(function(acumm, value){
	return acumm + parseInt(value)
},0)

console.log(res)
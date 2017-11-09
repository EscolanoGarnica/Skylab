//Crear un array con los nombres de los compañeros de clase, y agregar al prototype de Array
//una funció shuffle que mezcle los nombres

const compis = ['Pablo','Sergi','Victor','Joan Albert','Enric','Ricardo','Manu','Marc','Pau','Gemma','Sol','Kevin','Michel']



Array.prototype.shuffle = function(){
    let j, x, i;
    for (i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this[i];
        this[i] = this[j];
        this[j] = x;
    }
}



console.log(compis.shuffle())
function text(str){
	return {
		wrap: function(ch){
			str = ch + str + ch;
			return this;
		},
		toString: function(){
			return str;
		}
	}	
}
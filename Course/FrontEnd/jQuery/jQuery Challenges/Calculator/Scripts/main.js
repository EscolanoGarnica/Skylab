var f1Wrong = $('#helpBlock1');
f1Wrong.hide();

$('#f1').submit(function(event){
	event.preventDefault();

	var percentage = +$('#f1-a').val(); 		// el +$ es lo mismo que hacer
	var target = parseFloat($('#f1-b').val());	//parseInt() o parseFloat()

	if(!isNaN(percentage) && !isNaN(target)){
		var result = (percentage / 100) * target;
		$('#f1-result').val(result);
	}else{
		f1Wrong.show();
	}

});

var f2Wrong = $('#helpBlock2');
f2Wrong.hide();

$('#f2').submit(function(){
	var a = parseFloat($('#f2-a').val());
	var b = +$('#f2-b').val();

	if(!isNaN(a) && !isNaN(b)){
		var result = a / b * 100;
		$('#f2-result').val(result);
	}else{
		f2Wrong.show();
	}

});

var f3Wrong = $('#helpBlock3');
f3Wrong.hide();

$('#f3').submit(function(){
	var a  = parseFloat($('#f3-a').val());
	var b  = parseFloat($('#f3-b').val());
	
	if(!isNaN(a) && !isNaN(b)){
		var result = (b - a) / a  * 100;
		$('#f3-result').val(result);
	}else{
		f3Wrong.show();
	}
	
});
$('form').submit(search);

function search(event) {
    event.preventDefault();

    var query = $('.query').val();

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, processResponse);
}

function processResponse(response) {
    response.forEach(function(element){
    	$('ul').append('<li><a href="#" data-id="' + element.id + '">' + element.name + '.</a></li>');
    });
}

$(document).on('click','a',function(){
	var id = $(this).data('id');

	var url = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id;

	$.getJSON(url, showDetails);
});

function showDetails(result){

	var description = '<p id="description">'+result.style.description+'</p>';
 
	if($('#description').text()!=='')
	{
		$('#description').remove();	
	}
	$('ul').parent().append(description);
}

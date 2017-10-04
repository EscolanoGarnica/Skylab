var token = 'BQAcnT7CkRXB64Ocl4-Hodc3MdR7NFjc4K00GYYWyDLeVo2p0XSNKeeJ1-lMmFniCnggsIjp9_hHumyC77opAsvYkvEPrN8mAKfUMJrCoS3eorR2Gsu-4oiQiiGrD6sNI705ivh_E9e_QO4no3MPKlyDwuB7Pqc';

$('form').submit(search);

function search(event){
	event.preventDefault();

	var artist = $('.query').val();

	var url = 'https://api.spotify.com/v1/search?type=artist&query=' + artist;


    $.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(getArtist);


	$('.query').val('');
}

function getArtist(result){

	$('#selectArtists').empty(); //borro los artistas que ya hubiera
	$('#selectArtists').append('<option>Select Artist</option>');

	$('#selectArtists').css('display','block');
	$('#selectAlbums').css('display','none');
	$('#selectTracks').css('display','none');

	for(artist of result.artists.items){
		$('#selectArtists').append('<option data-id="'+ artist.id +'">' + artist.name + '</option>');
	}
}

$('#selectArtists').change(function(){	
	var id = $('#selectArtists option:selected').data('id');

	if (!id){
		$('#selectAlbums').css('display','none');	
		$('#selectTracks').css('display','none');	
		return;	
	}
	

	var url = 'https://api.spotify.com/v1/artists/' + id + '/albums';
	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(getAlbums);
});

function getAlbums(result){
	$('#selectAlbums').empty();
	$('#selectAlbums').append('<option>Select Album</option>');

	$('#selectAlbums').css('display','block');
	$('#selectTracks').css('display','none');

	for(album of result.items){
		$('#selectAlbums').append('<option data-id="' + album.id + '">'+album.name+'</option>');
	}	
}

$('#selectAlbums').change(function(){
	var id = $('#selectAlbums option:selected').data('id');
	
	if (!id){
		$('#selectTracks').css('display','none');		
		return;	
	}

	var url = '    https://api.spotify.com/v1/albums/'+ id +'/tracks';
	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(getTracks);
});

function getTracks(result){
	$('#selectTracks').empty(); //borro las canciones que ya hubiera
	$('#selectTracks').append('<option>Select Track</option>');

	$('#selectTracks').css('display','block');

	for(track of result.items){
		$('#selectTracks').append('<option data-id="' + track.id + '">'+track.name+'</option>');
	}	
}

$('#selectTracks').change(function(){
	var id = $('#selectTracks option:selected').data('id');
	
	if (!id){	
		return;	
	}

	var url = 'https://api.spotify.com/v1/tracks/' + id;

	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(playTrack);
});

function playTrack(track){
	window.open(track.external_urls.spotify,'_blank');
}

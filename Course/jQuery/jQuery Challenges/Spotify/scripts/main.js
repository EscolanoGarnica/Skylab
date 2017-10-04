var token = 'BQCWvfrg_JsT8ny4NuEC-ALdSjYUXqLUI2YV4W-2ilFfMD1fRtIjiPcU9kFWqytpm10icGPgtPz_XFQkGpe0pbvp0tozPcRt8qVaKrCcdBEqbFdCzHn4Of3WAjUIkxmL2XBL_olynqWb-85NCTZ9AKhOoXzpKiA';


var htmlSelectArtists = $('#selectArtists');
var htmlSelectAlbums = $('#selectAlbums');
var htmlSelectTracks = $('#selectTracks');



$('form').submit(search);

/**
*The Code begins when the user searchs an Artist, i'm use the 'function search'
*for call ajax and to bring an object with artists profiles, then i call to 'function 
*pushArtistToSelect' and i pass the object to it.
*/
function search(event){
	event.preventDefault();

	var artist = $('.query').val();

	var url = 'https://api.spotify.com/v1/search?type=artist&query=' + artist;


    $.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(pushArtistToSelect);


	$('.query').val('');
}

/**
*In 'function pushArtistToSelect' i take the artists and i put them in 
*select element from html.
*/
function pushArtistToSelect(result){

	htmlSelectArtists.empty();
	htmlSelectArtists.append('<option>Select Artist</option>');

	htmlSelectArtists.css('display','block');
	htmlSelectAlbums.css('display','none');
	htmlSelectTracks.css('display','none');

	for(artist of result.artists.items){
		htmlSelectArtists.append('<option data-id-artist="'+ artist.id +'">' + artist.name + '</option>');
	}
}

/**
*When the 'select' that contains the artists change, then i take his id and with this one 
*i use an ajax function to bring the albums from this artist. Next, i call to 'function 
*pushAlbumsToSelect' and i pass the object to it.
*/
htmlSelectArtists.change(function(){	
	var idArtist = $('#selectArtists option:selected').data('id-artist');

	if (!idArtist){
		htmlSelectAlbums.css('display','none');	
		htmlSelectTracks.css('display','none');	
		return;	
	}
	

	var url = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums';
	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(pushAlbumsToSelect);
});

/**
*I put albums in select element from html.
*/
function pushAlbumsToSelect(result){
	htmlSelectAlbums.empty();
	htmlSelectAlbums.append('<option>Select Album</option>');

	htmlSelectAlbums.css('display','block');
	htmlSelectTracks.css('display','none');

	for(album of result.items){
		htmlSelectAlbums.append('<option data-id-album="' + album.id + '">'+album.name+'</option>');
	}	
}

/**
*When change option, i bring the albums tracks
*/
htmlSelectAlbums.change(function(){
	var idAlbum = $('#selectAlbums option:selected').data('id-album');
	
	if (!idAlbum){
		htmlSelectTracks.css('display','none');		
		return;	
	}

	var url = 'https://api.spotify.com/v1/albums/'+ idAlbum +'/tracks';
	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(pushTracksToSelect);
});

/**
*I put songs in select element from html.
*/
function pushTracksToSelect(result){
	htmlSelectTracks.empty(); //borro las canciones que ya hubiera
	htmlSelectTracks.append('<option>Select Track</option>');

	htmlSelectTracks.css('display','block');

	for(track of result.items){
		htmlSelectTracks.append('<option data-id-track="' + track.id + '">'+track.name+'</option>');
	}	
}

/**
*When change option, i open a new tab for play the song
*/
htmlSelectTracks.change(function(){
	var idTrack = $('#selectTracks option:selected').data('id-track');
	
	if (!idTrack){	
		return;	
	}

	var url = 'https://api.spotify.com/v1/tracks/' + idTrack;

	$.ajax({
      url: url,
      headers: {Authorization: 'Bearer ' + token}
    }).then(playTrack);
});

function playTrack(track){
	window.open(track.external_urls.spotify,'_blank');
}

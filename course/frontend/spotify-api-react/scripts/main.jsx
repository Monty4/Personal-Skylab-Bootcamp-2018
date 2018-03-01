'use strict'


class SpotifyApp extends React.Component {

    constructor() {
        super()

        this.state = {
            input: ''
        }
        
    }

    toSearch = e => this.setState( {input: e.target.value} )

    SearchArtist(e) {
        e.preventDefault()
       console.log('hola')

    }

    render(){
        return <form onSubmit={this.SearchArtist}>
        <input className="btn  my-2 my-sm-0" type="text" placeholder="Input artist" aria-label="Search" onChange={this.toSearch} value={this.state.input} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    }


}


ReactDOM.render(<SpotifyApp />,
document.getElementById('root')
)















(function(){
    'use strict';
    $('form').submit(function(e){
        e.preventDefault();

        var queryArtists = $('input').val();

        $.ajax({

            url: "https://api.spotify.com/v1/search?q=" + queryArtists + "&type=artist",
                              
            type: 'GET',
          
            headers: {"Authorization": "Bearer BQAdMeyJUvTYYYQ1X17qlcPTvMqnXPNvLzzSLlsWeZHG-UZrAOoJPNVf1k98zzDm9hUwt-Q_M41U9U95X_KTXrbr-ZMKhWSEEej4xlC2tXqREos53j83S39m7bKhIgraVbB8-T8VMw"},
            success: function(result){
                //$('.class').empty();
                $('#artist').show();
                $('#albums').hide();
                $('#tracks').hide();
                $('#track').hide();
                $('#SelectArtist').empty();
                $('#tracks > .col-md-6 > li').remove();
                
                result.artists.items.forEach(function(artist) {
                    
                    //$('#artist').append('<div class="col-md-3">' + artist.name + '</div>');
                    $('#SelectArtist').append('<option value="' + artist.name + '">' + artist.name + '</option>');
                });
            }
          });
    });

    $('#SelectArtist').change(function(e){
        e.preventDefault();

        var queryAlbums = $(this).val();
        
        $.ajax({

            url: "https://api.spotify.com/v1/search?query=" + queryAlbums + "&type=album",

            type: 'GET',

            headers: {"Authorization": "Bearer BQAdMeyJUvTYYYQ1X17qlcPTvMqnXPNvLzzSLlsWeZHG-UZrAOoJPNVf1k98zzDm9hUwt-Q_M41U9U95X_KTXrbr-ZMKhWSEEej4xlC2tXqREos53j83S39m7bKhIgraVbB8-T8VMw"},
            success: function(result){
                $('#albums').empty();
                $('#albums').show();
                $('#albums > .col-md-3').empty();

                result.albums.items.forEach(function(albums){
                    console.log(albums.id);
                    var src = albums.images[1].url;
                    // var wid = albums.images[1].width;
                    // var heig = albums.images[1].width;
                    //$('#SelectAlbum').append('<option value="' + albums.id + '">' + albums.name + '</option>');
                    $('#albums').append('<div class="col-sm-3"><div class="card"><img class="card-img-top" src="' + src + '" alt=""><div class="card-body"><p class="card-text"><a href="#" id="' + albums.id + '">' + albums.name + '</a></p></div></div></div></div>')
                });

            }
        });
        
    });

    $('#albums').on('click', 'a', function(e){
        //e.preventDefault();

        var queryTracks = $(this).attr('id');
        
        $.ajax({

            url: "https://api.spotify.com/v1/albums/" + queryTracks + "/tracks",

            type: 'GET',

            headers: {"Authorization": "Bearer BQAdMeyJUvTYYYQ1X17qlcPTvMqnXPNvLzzSLlsWeZHG-UZrAOoJPNVf1k98zzDm9hUwt-Q_M41U9U95X_KTXrbr-ZMKhWSEEej4xlC2tXqREos53j83S39m7bKhIgraVbB8-T8VMw"},

            success: function(result){
                
                $('#albums').hide();
                $('#tracks').show();
                $('#SelectTracks').empty();
                $('#SelectTrack').empty();

                result.items.forEach(function(tracks){
                    
                    $('#tracks > .col-sm-12').append('<li class="list-group-item list-group-item-success" id="' + tracks.id + '">' + tracks.name + '</li>');
                    // $('.list-gropup').append('<a href="#!" class="list-group-item list-group-item-action list-group-item-success"></a>');
                });

            }
        });
    });

    $('#tracks').on('click', 'li' , function(e){
        
        var queryTrack = $(this).attr('id');
        
        $.ajax({
            url: "https://api.spotify.com/v1/tracks/" + queryTrack,

            type: 'GET',

            headers: {"Authorization": "Bearer BQAdMeyJUvTYYYQ1X17qlcPTvMqnXPNvLzzSLlsWeZHG-UZrAOoJPNVf1k98zzDm9hUwt-Q_M41U9U95X_KTXrbr-ZMKhWSEEej4xlC2tXqREos53j83S39m7bKhIgraVbB8-T8VMw"},

            success: function(result){
                //console.log(result);
                $('#tracks').hide();
                $('#track').show();
                $('#SelectTrack').empty();

                var song = result.preview_url;

                console.log(song);
                
                $('#track > .col-md-6').append('<p><h2>' + result.name + '</h2></p><audio controls id="playing"><source src="' + song + '" type="audio/mpeg"></audio>');
            }
        })
    })

})();
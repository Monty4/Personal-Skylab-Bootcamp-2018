(function(){
    'use strict';
    $('form').submit(function(e){
        e.preventDefault();

        var query = $('input').val();
    })

     $.ajax({

        //url: "http://localhost:8080/login",
        url: "https://api.spotify.com/v1/search?q=" + query,
              
        type: 'GET',
      
        // Fetch the stored token from localStorage and set in the header
      
        headers: {"Authorization": "Bearer BQAtB0MMPw8VcIUshdEpjRvp6Jg5dEcI0MzNR-OG4BlN4VtP8MCOlSgCRDS8gV9dXXnM_5IYoAgWBuM6IrAPj7SVL6zHtMi9EqYyQMvrFBAqXoOZtp8ZQoe0RKiRIzXOl4yFvEYKR2tzmRLJmwAttK8"},
        success: function(result){
            //$('.class').empty();
            console.log(result);
        }
      
      });

})();
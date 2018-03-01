(function(){
    "use estrict"
    $('form').submit(function (e) {
        e.preventDefault();
        
        var query = $('input').val();
    
        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
            //timeout: 2000,
            success: function (result) {
                $('.row').empty();
                result.forEach(function(v) {
                    var description = v.style ? v.style.description : "No description"; 
                    $('.row').append('<div class="col-sm-4"><div class="card"><div class="card-block"><h3 class="card-title">' + v.name + '</h3><p class="card-text">' + description + '</p><button type="button" class="btn btn-primary d-block mx-auto" data-toggle="modal" data-target="#myModal" id="'+v.id+'">View</button></div></div></div>');
                    
                });
            }
        });
    });


    $(document).on('click','button',function(){
        'use strict'
        var beer = $(this).attr('id');
        
        $('.contenttable').empty();

        $.ajax({
            url: "https://quiet-inlet-67115.herokuapp.com/api/beer/" + beer,
            timeout: 2000,
            success: function (result) {
                var nonimage = result.labels ? result.labels.icon : 'images/default.png'; 
                $('.modal-title').html(result.name);
                $('.contenttable').append("<td>"+result.id+"</td> <td>"+result.name+"</td> <td><img src="+nonimage+" class='logo'></td>");
            }
        });
    })
})();





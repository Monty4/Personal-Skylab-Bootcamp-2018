$.ajax(
    {
        url: 'post.php',
        data : { id : 123 },
        type : 'GET',
        success : function(json) {
            $('<h1/>').text(json.title).appendTo('body');
            $('<div class="content"/>')
                .html(json.html).appendTo('body');
        },
        complete : function(xhr, status) {
            alert('Petición realizada');
        }
    }
)
typeof $ !== 'undefined'; // Miramos si jQuery está funcionando

$('form').submit( function(event){
    event.preventDefault(); // Para que no linke

    var input = $('[name="title"]'); // Type array
    $('ul').append('<li>' + input.val() + '<a href="#">✓</a>');
     
    input.val('');

    console.log($('[name="title"'));

    $('a').click(function(element){
        element.target.parentNode.remove();
    })
})


// CÓDIGO A REVISAR

/*
$(document).ready(function(){

})

$(document) // Documento
$('form') // Elemento form
$('#id') // Elemento con id id
$('.class') //

$(document).on('click', 'a', function(){
    $(this).parent().remove(); // this es el elemento nativo
})
*/

//$(a).off('click'); // Desreistramos el evento click de <a>
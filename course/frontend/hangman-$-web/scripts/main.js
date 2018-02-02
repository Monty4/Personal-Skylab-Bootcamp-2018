var word = '';
var attempts = 0;

"use strict";

var hangman;
$('#play').click(function(e){
    e.preventDefault();
    
    $('#playSection').addClass('hidden');
    $('#valueSection').removeClass('hidden');
    $('#valueSection').addClass('show');
    
});

$('#go').click(function(e){
    e.preventDefault();

    $('#valueSection').removeClass('show');
    $('#valueSection').addClass('hidden');
    $('#trySection').addClass('show');

    word = $('#word').val();
    attempts = $('#maxAttempts').val();

    hangman = new Hangman(word, attempts);

    var palabra = '';
    $.each(word.split(''), function(index,value){
    
    palabra = palabra + ' _';
    
    })
    $('#palabra').html(attempts + ' ' + palabra);
})

$('#try').click(function(e){
    e.preventDefault;
    var letter = $('#letter').val();
    var juega = hangman.try(letter);
    $('#palabra').html(juega.attempts + ' ' + juega.cadena);
    $('#letter').val('');

    if (juega.attempts === 0){
        $('#trySection').removeClass('show');
        $('#trySection').addClass('hidden');
        $('#faliled').addClass('show');
        $('.message').html('You loose');
    }else if(juega.chars === word.length){
        $('#trySection').removeClass('show');
        $('#trySection').addClass('hidden');
        $('#faliled').addClass('show');
        $('.message').html('You win');
    }
})
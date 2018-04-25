$(function() {
    "use strict";
    
   var $('a.#dogs')
    $dogs
        .find('a')
        .colorbox({
        rel : 'gallery',
        'maxWidth' : '80%'
    });
    
    $dogs
    .find('li:nth-child(2)')
    .colorbox({
        'html' : '<h1>Troy</h1>'
    });
});
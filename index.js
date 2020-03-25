//To complete this challenge requires:

//Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
//Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
//Linking to your application JavaScript file from the index.html page.
//Using this and event delegation
//Requirements
//In terms of user experience, your shopping list app must allow users to:

// -enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// -check and uncheck items on the list by clicking the "Check" button
// -permanently remove items from the list

//Additionally:
//You must use a CDN-hosted version of jQuery
//Put your application code in a file called index.js and link to it in index.html
//Be sure to put both script elements at the bottom of the <body> element.
//Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
//Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().



$(function() {
  $('form button').click(function(event) {
    //console.log(event.currentTarget);
    event.preventDefault();
    let userInput = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li> <span class="shopping-item">' + userInput + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>');
    //console.log(userInput);
  });

  $('.shopping-item-delete').click(function(event) {
    event.preventDefault();
    $(this).parents('li').remove();
  });

  $('.shopping-item-toggle').click(function(event) {
    event.preventDefault();
    //console.log($(event.currentTarget));
    //console.log($(event.target));
    //console.log($(this));
  //$('.shopping-item').removeClass('.shopping-item__checked');
  //$('.shopping-item-controls').prev().toggleClass('shopping-item shopping-item shopping-item__checked');

$(this).closest('li').find('.shopping-item').toggleClass('shopping-item shopping-item shopping-item__checked');

});
});









//change class for shopping item to checked or not toggleClass?
//delete/remove shopping item li on click of delete button

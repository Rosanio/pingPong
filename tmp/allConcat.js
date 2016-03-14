var pingPong = require('./../js/ping-pong.js').pingPong;

$(function() {
  $('form#pingpong').submit(function(event) {
    var userInput = parseInt($('input#numInput').val());
    var pingPongArray = pingPong(userInput);

    $('#result').empty();
    for(var i = 0; i < pingPongArray.length; i++) {
      $('#result').append('<li>' + pingPongArray[i] + '</li>');
    }

    event.preventDefault();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#result').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

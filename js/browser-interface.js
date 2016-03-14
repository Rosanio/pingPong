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

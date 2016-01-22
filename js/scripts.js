var strikes = 0;

function pingPong(countTo) {
  var numberArray = [];
  if(isNaN(countTo)) {
    alert('Please enter a number');
    strikes += 1;
    return false
  }
  for(var i = 1; i <= countTo; i++) {
    var output = "";
    if (i%3 === 0) {
      output += 'ping';
    }
    if (i%5 === 0) {
      output += 'pong';
    }
    if (output.length > 0) {
      numberArray.push(output);
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

$(function() {
  $('form#pingpong').submit(function(event) {
    var userInput = $('input#numInput').val();
    var pingPongArray = pingPong(userInput);

    $('#result').empty();
    for(var i = 0; i < pingPongArray.length; i++) {
      $('#result').append('<li>' + pingPongArray[i] + '</li>');
    }

    event.preventDefault();
  });
});

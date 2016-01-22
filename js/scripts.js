function pingPong(countTo) {
  var numberArray = [];
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

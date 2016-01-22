function pingPong(countTo) {
  var numberArray = createNumberArray(countTo);
  for (var i = 0; i < numberArray.length; i++) {
    if(numberArray[i]%3===0 && numberArray[i]%5===0) {
      var firstPart = numberArray.slice(0, i);
      var secondPart = numberArray.slice((i+1), numberArray.length);
      firstPart.push('pingpong');
      numberArray = firstPart.concat(secondPart);
    } else if(numberArray[i]%3 === 0) {
      var firstPart = numberArray.slice(0, i);
      var secondPart = numberArray.slice((i+1), numberArray.length);
      firstPart.push('ping');
      numberArray = firstPart.concat(secondPart);
    } else if (numberArray[i]%5 === 0) {
      var firstPart = numberArray.slice(0, i);
      var secondPart = numberArray.slice((i+1), numberArray.length);
      firstPart.push('pong');
      numberArray = firstPart.concat(secondPart);
    }
  }
  return numberArray;
}

function createNumberArray(countTo) {
  var numberArray = [];
  for(var i = 1; i <= countTo; i++) {
    numberArray.push(i);
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

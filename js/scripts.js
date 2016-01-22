var strikes = 0;

function pingPong(countTo) {
  var numberArray = [];
  if(isNaN(countTo)) {
    if(strikes === 0) {
      alert('Please enter a number');
      strikes += 1;
      return false;
    }
    if(strikes === 1) {
      alert('I said please enter a number');
      strikes += 1;
      return false;
    }
    if(strikes === 2) {
      alert("Didn't you hear me?");
      strikes += 1;
      return false;
    }
    if(strikes === 3) {
      alert('...');
      strikes += 1;
      return false;
    }
    if(strikes === 4) {
      alert("You aren't even listening, are you?");
      strikes += 1;
      return false;
    }
    if(strikes === 5) {
      alert("Just enter a number already...");
      strikes += 1;
      return false;
    }
    if(strikes === 6) {
      alert("It'll make my job a whole lot easier");
      strikes += 1;
      return false;
    }
    if(strikes === 7) {
      alert("OK, I see what's going on");
      strikes += 1;
      return false;
    }
    if(strikes === 8) {
      alert("You're messing with me");
      strikes += 1;
      return false;
    }
    if(strikes === 9) {
      alert("Alright then, do it one more time, I dare you");
      strikes += 1;
      return false;
    }
    if(strikes === 10) {
      alert("you asked for it...");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hi");
      alert("hey");
      alert("hello");
      alert("howdy");
      alert("hey there");
      alert("hola");
      alert("Is this annoying yet?");
      alert("I hope so");
      alert("See how annoying");
      alert("It can be");
      alert("When someone");
      alert("Spams you");
      alert("With something");
      alert("You don't want.");
      alert("You should");
      alert("Have just entered");
      alert("A number");
      alert("Like I asked.");
      alert("Now");
      alert("You're just sitting here");
      alert("Reading all these");
      alert("Annoying popups.");
      alert("Maybe next time");
      alert("Someone asks you");
      alert("To do something");
      alert("You'll do it");
      alert("Instead of just");
      alert("Trying to be");
      alert("Such a joker!");
      alert("Anyways");
      alert("I'll ask one more time");
      alert("Please");
      alert("Please enter a number.");
      strikes += 1;
      return false;
    }
    if(strikes >= 11) {
      alert('You win, I give up');
      strikes += 1;
      return false;
    }
  }
  strikes = 0;
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
    var userInput = parseInt($('input#numInput').val());
    var pingPongArray = pingPong(userInput);

    $('#result').empty();
    for(var i = 0; i < pingPongArray.length; i++) {
      $('#result').append('<li>' + pingPongArray[i] + '</li>');
    }

    event.preventDefault();
  });
});

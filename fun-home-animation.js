var phrases = [['living', 'without', 'filters'],
['a', 'global', '_moevment', 'movement', 'that', 'shares', 'professional', 'fuckups'],
['in', '+300', 'cities', 'in', '+80', 'countries'],
['an', '_evemt', 'event', 'series', 'that', 'tells', 'stories', 'of', 'failure'],
['sharing' ,'the', 'failure']];
var currentIndex = 0;
$(document).ready(function() {
  $('#animatedTextSpan').html(phrases[currentIndex].join(' '));

  function displayCurrentPhrase() {
    $('#animatedTextSpan').fadeOut(250, function() {
      $('#animatedTextSpan').html('');
      $('#animatedTextSpan').fadeIn(250);
      var words = phrases[currentIndex];
      fadeIn(words);
    });
  }

  function fadeIn(words) {
    var currentWord = words[0].split('');
    var willStrike = false;
    if (currentWord[0] === '_') {
      willStrike = true;
      currentWord = currentWord.slice(1, currentWord.length);
    }

    var text = $("<span></span>");
    $('#animatedTextSpan').append(text);
    var i = 0;
    (function animateWord(i) {
      setTimeout(function () {
        text.append(currentWord[i]);
        i++;
        if (i < currentWord.length) {
          animateWord(i);
        } else {
          if (willStrike) {
            text.css('text-decoration', 'line-through');
          }
          $('#animatedTextSpan').append(' ');
          if (words.length > 1) {
            fadeIn(words.slice(1, words.length))
          } else {
            setTimeout(function() {
              shiftIndex();
              displayCurrentPhrase();
            }, 1000);
          }
        }
      }, 75);
    })(i);
  }

  function shiftIndex() {
    currentIndex++;
    currentIndex = (currentIndex >= phrases.length) ? 0 : currentIndex;
  }

  setTimeout(function() {
    shiftIndex();
    displayCurrentPhrase();
  }, 2000);
});
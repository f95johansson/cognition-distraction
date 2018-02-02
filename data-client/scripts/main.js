
document.querySelector('#start').onclick = function(e) {
  fetch("http://localhost:1337/start", {
    method: "POST",
  }).catch(function(err) {});

  document.querySelector('.test').classList.remove('gone');
  document.querySelector('.before').classList.add('gone');
  var ads = document.getElementsByClassName('ad');
  for (var i = 0; i < ads.length; i++) {
    ads[i].classList.add('gone');
  }
};

document.querySelector('#startWithDistraction').onclick = function(e) {
  fetch("http://localhost:1337/startdistraction", {
    method: "POST",
  }).catch(function(err) {});

  document.querySelector('.test').classList.remove('gone');
  document.querySelector('.before').classList.add('gone');
  var ads = document.getElementsByClassName('ad');
  for (var i = 0; i < ads.length; i++) {
    ads[i].classList.remove('gone');
  }
};


document.querySelector('#stop').onclick = function(e) {
  fetch("http://localhost:1337/stop", {
    method: "GET",
  });

  document.querySelector('.test').classList.add('gone');
  document.querySelector('.before').classList.remove('gone');
};


/* Animation Section */

var blocket = document.getElementById('blocket');
var hygglo = document.getElementById('hygglo');
var samsung = document.getElementById('samsung');
var prisjakt = document.getElementById('prisjakt');

var leftFirst = blocket;
var leftTemp = blocket;
var leftSecond = samsung;

var rightFirst = hygglo;
var rightTemp = hygglo;
var rightSecond = prisjakt;

setInterval(function() {
  leftFirst.style.opacity = 0;
  leftTemp = leftFirst;
  leftFirst = leftSecond;

  setTimeout(function() {
    leftSecond.style.opacity = 1;
    leftSecond = leftTemp;
  }, 1000);
}, 8000);


setTimeout(function() {
  setInterval(function() {
    rightFirst.style.opacity = 0;
    rightTemp = rightFirst;
    rightFirst = rightSecond;

    setTimeout(function() {
      rightSecond.style.opacity = 1;
      rightSecond = rightTemp;
    }, 1000);
  }, 8000);
}, 4000);


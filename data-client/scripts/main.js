
document.querySelector('#start').onclick = function(e) {
  fetch("http://localhost:1337/startdistraction", {
    method: "POST",
  });

  document.querySelector('.test').classList.remove('gone');
  document.querySelector('.before').classList.add('gone');
};

document.querySelector('#stop').onclick = function(e) {
  fetch("http://localhost:1337/stop", {
    method: "GET",
  });

  document.querySelector('.test').classList.add('gone');
  document.querySelector('.before').classList.remove('gone');
};
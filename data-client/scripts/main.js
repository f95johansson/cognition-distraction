function downloadData(id, data, time, withDistraction) {
  var toDownload = {id: id, 
                    data: data, 
                    elapsed_time: time, 
                    with_distraction: withDistraction};

  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(toDownload)));
  element.setAttribute('download', "experiment_"+id+".json");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


document.querySelector('#start').onclick = function(e) {
  fetch("http://localhost:4567/starttimer", {
    method: "POST",
  });

  document.querySelector('.test').classList.remove('gone');
  document.querySelector('.before').classList.add('gone');
};

document.querySelector('#stop').onclick = function(e) {
  fetch("http://localhost:4567/stoptimer", {
    method: "GET",
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data.id);
    downloadData(data.id, data.data, data.elapsed_time, false);
  });

  document.querySelector('.test').classList.add('gone');
  document.querySelector('.before').classList.remove('gone');
};
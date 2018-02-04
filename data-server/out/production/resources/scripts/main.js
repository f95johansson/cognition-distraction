function loadHeatMap(data) {
  clearHeatMap();
  for (var i = data.length - 1; i >= 0; i--) {
    var position = data[i];
    heatmapInstance.addData({
      x: position.x,
      y: position.y,
      value: 2
    });
  }
}

function clearHeatMap() {
  heatmapInstance.setData({
    max: 1000,
    min: 0,
    data: []
  });
}


var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 50  
});

var heatmap = document.querySelector('.heatmap');
var userSelection = document.getElementById("user-selection");
var selected = 0;
var allData = []; //JSON.parse(d);


for (var i = 0; i < allData.length; i++) {
    var userData = allData[i];
    var option = document.createElement("option");
    option.text = userData.id;
    option.value = i;
    userSelection.add(option);
  }
  userSelection.addEventListener("change", function(e) {
    selected = e.target.value;
    loadHeatMap(allData[selected].data);
  });


fetch('http://localhost:4567/eyetracker')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    allData = data;
    for (var i = 0; i < allData.length; i++) {
      var userData = allData[i];
      var option = document.createElement("option");
      option.text = userData.id;
      option.value = i;
      userSelection.add(option);
    }
    userSelection.addEventListener("change", function(e) {
      selected = e.target.value;
      loadHeatMap(allData[selected].data);
    });
  }).catch(function(err) {console.log(err);});



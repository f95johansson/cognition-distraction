function loadHeatMap(data) {
  clearHeatMap();
  for (var i = 0; i < data.length; i++) {
    var position = data[i];
    if (position != undefined) {
      heatmapInstance.addData({
        x: position.x,
        y: position.y,
        value: 1
      });
    }
  }
}

function clearHeatMap() {
  heatmapInstance.setData({
    max: 1,
    min: 0,
    data: [{x: -50, y: -50, value: 1}]
  });
}


var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 30  
});

var heatmap = document.querySelector('.heatmap');
var userSelection = document.getElementById("user-selection");
var selected = 0;
var allData = [];


for (var i = 0; i < allData.length; i++) {
  var userData = allData[i];
  var option = document.createElement("option");
  option.text = userData.id;
  option.value = i;
  userSelection.add(option);
}


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
    loadHeatMap(allData[selected].data);

    userSelection.addEventListener("change", function(e) {
      selected = e.target.value;
      console.log(selected);
      loadHeatMap(allData[selected].data);
    });
  }).catch(function(err) {console.log(err);});



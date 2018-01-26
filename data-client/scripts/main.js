var heatmapInstance = h337.create({
  container: document.querySelector('.heatmap'),
  radius: 90
});
document.querySelector('.heatmap').onmousemove = function(ev) {
  console.log("Yepp");
  heatmapInstance.addData({
    x: ev.layerX,
    y: ev.layerY,
    value: 1
  });
};




document.querySelector('#start').onclick = function(e) {
  document.querySelector('.test').classList.remove('gone');
  document.querySelector('.before').classList.add('gone');
}
var globalGravity = 0.2 //0.2 pixels/second/second
var player = new Player
window.onload= function(){
  mapToArray();
  setInterval(function(){
    checkInputs();
    pUpdate(player);
    camera.update();
    draw();
  }, 10);
}

var globalGravity = 0.2 // 0.2 pixels/second/second
var movespeed = 3 // 3 pixels/second
var player = new Player
window.onload= function(){
  mapToArray();
  c.width=500;
  c.height=500;
  setInterval(function(){
    checkInputs();
    pUpdate(player);
    camera.update();
    draw();
    document.getElementById('x').innerHTML = 'X: ' + player.x;
    document.getElementById('y').innerHTML = 'Y: ' + player.y;
  }, 10);
}

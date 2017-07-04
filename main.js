var fps = 100;
var globalGravity = 0.2 // 0.2 pixels/second/second
var movespeed = 3 // 3 pixels/second
var player = new Player;
window.onload= function(){
  mapToArray();
  c.width= 1280; //rendering resolution
  c.height= 720;
  setInterval(function(){
    checkInputs();
    pUpdate(player);
    camera.update();
    draw();
    document.getElementById('x').innerHTML = "X: " + Math.floor(player.x);
    document.getElementById('y').innerHTML = "Y: " + Math.floor(-player.y);
  }, 1000/fps);
}

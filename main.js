var resx = 1280; //rendering resolution
var resy = 720;
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.position = 'absolute';
stats.dom.style.float = 'right';
document.getElementById('game').appendChild( stats.dom );


var fps = 100;
var globalGravity = 0.2 // 0.2 pixels/second/second
var movespeed = 3 // 3 pixels/second
var player = new Player;
window.onload= function(){
  mapToArray();
  c.width= resx;
  c.height= resy;
  setInterval(function(){
    stats.begin();

    checkInputs();
    pUpdate(player);
    camera.update();
    draw();
    document.getElementById('x').innerHTML = "X: " + Math.floor(player.x);
    document.getElementById('y').innerHTML = "Y: " + Math.floor(-player.y);

  	stats.end();
  }, 1000/fps);
}

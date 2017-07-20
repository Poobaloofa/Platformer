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
    if (Math.floor(mapsrc.height+4-player.y/scale)<-4) {
      player.x = spawnPoint.x;
      player.y = spawnPoint.y;
      player.xspeed = 0;
      player.yspeed = 0;
    }


    for (var i = 0; i < enemies.length; i++) {
      enemies[i].update();
      pUpdate(enemies[i]);
    }

    camera.update();
    draw();
    document.getElementById('x').innerHTML = "X: " + Math.floor(player.x/scale);
    document.getElementById('y').innerHTML = "Y: " + Math.floor(mapsrc.height+4-player.y/scale);

  	stats.end();
  }, 1000/fps);
}

//DEBUG COMMAND LIST
function tp(x,y){
  player.xspeed = 0;
  player.yspeed = 0;
  player.x = x*scale;
  player.y = (mapsrc.height+4-y)*scale;
}

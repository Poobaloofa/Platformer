var jumpable = true;
var keys = [];
document.addEventListener('keydown', function(e) {
  keys[e.keyCode] = true
  if (e.keyCode == 38 && player.onGround() && jumpable == true) {
    player.jump();
    jumpable = false;
  };
}, false);
document.addEventListener('keyup', function(e) {
  keys[e.keyCode] = false;
  if (e.keyCode == 38 && jumpable == false) {
    jumpable = true;
  };
}, false);

function checkInputs(){
if (keys[38] == true && player.yspeed < 0) {
  player.g = globalGravity / 2;
}
if (keys[38] == false || player.yspeed > 0) {
  player.g = globalGravity;
}

if (keys[37] == true) {
  player.xspeed = -movespeed;
  for (var i = 0; i < platforms.length; i++) {
    if (player.y < platforms[i].botSide && player.y + player.size > platforms[i].topSide) {
      if (player.x - movespeed < platforms[i].rSide && player.x + movespeed > platforms[i].rSide ) {
        player.xspeed = 0;
      }
    }
  }
}

if (keys[39] == true) {
  player.xspeed = movespeed;
  for (var i = 0; i < platforms.length; i++) {
    if (player.y < platforms[i].botSide && player.y + player.size > platforms[i].topSide) {
      if (player.x + player.size < platforms[i].lSide + movespeed && player.x + player.size > platforms[i].lSide - movespeed) {
        player.xspeed = 0;
      }
    }
  }
}
}

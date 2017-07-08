
function draw(){
  ctx.beginPath();
  //ctx.fillStyle = '#A4F8F8';
  ctx.fillRect(0,0,c.width,c.height);
  ctx.closePath();

  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide-camera.x > 0 && platforms[i].lSide-camera.x < c.width &&
        platforms[i].botSide-camera.y > 0 && platforms[i].topSide-camera.y < c.height){
    ctx.clearRect(platforms[i].lSide - camera.x, platforms[i].topSide - camera.y, platforms[i].width, platforms[i].height);
    ctx.drawImage(platforms[i].sprite,platforms[i].lSide - camera.x, platforms[i].topSide - camera.y);
    }
  }

  ctx.drawImage(playersprite, player.x - camera.x, player.y - camera.y);
  ctx.drawImage(sassage,950 - camera.x,420-camera.y);
  if (lit) {
    //addLight(player.x-camera.x, player.y-camera.y,300);
    for (var i = 0; i < lights.length; i++) {
      addLight(lights[i].x-camera.x,lights[i].y-camera.y,300);
    }
    light();
  }
}

/*function resizeCanvas() {
	c.width = window.innerWidth-100;
	c.height = window.innerHeight-100;
}*/

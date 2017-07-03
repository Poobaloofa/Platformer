function draw(){
  ctx.drawImage(background, 0, 0)
  for (var i = 0; i < platforms.length; i++) {
    ctx.clearRect(platforms[i].lSide - camera.x, platforms[i].topSide - camera.y, platforms[i].width, platforms[i].height);
    ctx.drawImage(platforms[i].sprite,platforms[i].lSide - camera.x, platforms[i].topSide - camera.y)
  }
  ctx.clearRect(player.x - camera.x, player.y - camera.y, player.size, player.size)
  ctx.drawImage(sassage,23530 - camera.x,330-camera.y)
  light(player.x-camera.x,player.y-camera.y,200);
}

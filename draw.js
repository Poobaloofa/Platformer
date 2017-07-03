function draw(){
  ctx.drawImage(background, 0, 0)
  for (var i = 0; i < platforms.length; i++) {
    ctx.drawImage(platforms[i].sprite,platforms[i].x - camera.x, platforms[i].y - camera.y)
  }
  ctx.clearRect(player.x - camera.x, player.y - camera.y, player.size, player.size)
}

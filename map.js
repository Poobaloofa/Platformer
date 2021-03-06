
var platforms = [];

function platform(startx, starty, width, height) {
  this.topSide = starty
  this.lSide = startx
  this.botSide = starty + height
  this.rSide = startx + width
  this.width = width
  this.height = height
  this.sprite = new Image();
  this.sprite.src = sprites.cobblestone;
//  this.sprite.style.width = this.width;
//  this.sprite.style.height = this.height; TODO resize texture
}

var spawnPoint = {
  x: 0,
  y: 0,
}


function mapToArray(){
  c.width = mapsrc.width
  c.height = mapsrc.height
  ctx.drawImage(mapsrc,0,0);
  var imgData = ctx.getImageData(0, 0, mapsrc.width, mapsrc.height);
  var scale = 25;

  var map =[];

  for (var y = 0; y < mapsrc.height; y++) {
    map.push([]);
    for (var x = 0; x < mapsrc.width; x++) {
      map[y].push(toHex(imgData.data[(y * mapsrc.width + x) * 4 + 0])+
                  toHex(imgData.data[(y * mapsrc.width + x) * 4 + 1])+
                  toHex(imgData.data[(y * mapsrc.width + x) * 4 + 2]));
    }
  }
  for(var y = 0; y<map.length; y++){
  	for(var x = 0; x<map[y].length; x++){
      switch (map[y][x]) {
        case '000000': //black: platform
          platforms.push(new platform(x*scale,y*scale,scale,scale));
          break;

        case '0000ff': //blue: spawnpoint
          spawnPoint.x = x*scale;
          player.x = x*scale;

          spawnPoint.y = y*scale;
          player.y = y*scale;
          break;

        case 'ff0000': //red: enemy
          enemies.push(new enemy(x*scale, y*scale, 20, .5, .2));
          break;

        case 'ffff00': //yellow: light source
          lights.push(new lightsrc(x*scale,y*scale));
          break;

        case 'ffa500': //orange: coins
          pickUps.push(new pickUp(x*scale,y*scale,25,25,coinAnimFrames))
          break;

        default:break;
      }
    }
  }
}

function toHex(n){
  if(n.toString(16).length<2)
    return '0'+ n.toString(16);
  return n.toString(16);
}

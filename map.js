function pixel(){
this.r=undefined
this.g=undefined
this.b=undefined
this.a=undefined
}

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

function mapToArray(){
  c.width = mapsrc.width
  c.height = mapsrc.height
  ctx.drawImage(mapsrc,0,0);
  var imgData = ctx.getImageData(0, 0, mapsrc.width, mapsrc.height);
  var scale = 25;

  var map =[];
  map.x = 0
  map.y = 0

  for (var y = 0; y < mapsrc.height; y++) {
    map.push([]);
    for (var x = 0; x < mapsrc.width; x++) {
      map[y].push(new pixel);
      map[y][x].r = imgData.data[(y * mapsrc.width + x) * 4 + 0];
      map[y][x].g = imgData.data[(y * mapsrc.width + x) * 4 + 1];
      map[y][x].b = imgData.data[(y * mapsrc.width + x) * 4 + 2];
      map[y][x].a = imgData.data[(y * mapsrc.width + x) * 4 + 3];
    }
  }

  for(var y = 0; y<map.length; y++){
  	for(var x = 0; x<map[y].length; x++){
       if(map[y][x].r == 0 && map[y][x].g == 0 && map[y][x].b == 0 && map[y][x].a == 255){
     	platforms.push(new platform(map.x+x*scale,map.y+y*scale,scale,scale));
     }
    }
  }
}

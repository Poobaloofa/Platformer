var scale = 20;
var lightmap = []; //0 is clear, 1 is opaque
for (var y = 0; y < 720; y+=scale) {
  lightmap.push([]);
  for(var x = 0; x< 1280; x+=scale){    // TODO: make the lightmap resolution dependent on the actual freaking resolution
    lightmap[y/scale].push(1);
  }
}

function addLight(x2,y2,r){
  for(var y = Math.floor((y2-r)/scale); y < (y2+r)/scale; y++){
    for (var x = Math.floor((x2-r)/scale); x < (x2+r)/scale; x++) {
      var y1 = y*scale;
      var x1 = x*scale;
      if(y>0 && y<lightmap.length && x>0 && x<lightmap[0].length && (Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))/(r)<1){
      lightmap[y][x] += (Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)))/(r)-1;
    }
    }
  }
}

function light(){
  for (var y = 0; y < lightmap.length; y++) {
    for (var x = 0; x < lightmap[0].length; x++) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(0,0,0,"+lightmap[y][x]+")";
      ctx.fillRect(x*scale,y*scale,scale,scale);
      ctx.closePath();
    }
  }
  for(var i = 0; i<lightmap.length; i++){
    for(var j = 0; j<lightmap[0].length; j++){
      lightmap[i][j] = 1
    }
  }
}


/*
var opacity = (Math.sqrt((x-x2)*(x-x2) + (y-y2)*(y-y2)))/(r);
ctx.beginPath();
ctx.fillStyle = "rgba(0,0,0,"+opacity+")";
ctx.fillRect(x,y,scale,scale);
ctx.closePath();
*/

var lit = true;
document.getElementById('button').addEventListener('click',toggleLighting);
function toggleLighting(){
  lit = !lit;
}

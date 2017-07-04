function light(x3,y3,r){
  var scale = 20;
  var x2 = Math.floor(x3);
  var y2 = Math.floor(y3);
	for(var x = x2-r; x<=x2+r; x+=scale){
  	for(var y = y2-r; y<=y2+r; y+=scale){
      var opacity = (Math.sqrt((x-x2)*(x-x2) + (y-y2)*(y-y2)))/(r);
      ctx.beginPath();
    	ctx.fillStyle = "rgba(0,0,0,"+opacity+")";
      ctx.fillRect(x,y,scale,scale);
      ctx.closePath();
    }
  }
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0,0,x2-r,c.height);
  ctx.fillRect(x2+r,0,c.width-(x2+r),c.height);
  ctx.fillRect(0,0,c.width,y2-r);
  ctx.fillRect(0,y2+r,c.width,c.height-(y2+r));
}

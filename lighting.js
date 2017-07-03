function light(x2,y2,r){
  var scale = 10;
	for(var x = x2-r; x<=x2+r; x+=scale){
  	for(var y = y2-r; y<=y2+r; y+=scale){
    	var opacity = (Math.sqrt((x-x2)*(x-x2) + (y-y2)*(y-y2)))/(r);
      ctx.beginPath();
    	ctx.fillStyle = "rgba(0,0,0,"+opacity+")";
      ctx.fillRect(x,y,scale,scale);
      ctx.closePath();
    }
  }
}

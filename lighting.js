function light(x2,y2,radius){
  var scale = 10;
	for(var x = 0; x<c.width; x+=scale){
  	for(var y = 0; y<c.height; y+=scale){
    	var opacity = (Math.sqrt((x-x2)*(x-x2) + (y-y2)*(y-y2)))/(radius);
      ctx.beginPath();
    	ctx.fillStyle = "rgba(0,0,0,"+opacity+")";
      ctx.fillRect(x,y,scale,scale);
      ctx.closePath();
    }
  }
}

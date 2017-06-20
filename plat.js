var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var movespeed = 3
var globalGravity = .2
var player = {
	x: c.width/2,
  y: c.height/2,
  xspeed: 0,
  yspeed : 0,
  size: 10,
  xfriction: .1,
  g: globalGravity,
  jump: function(){
  this.yspeed=-6;
  },
  update: function(){
  	if(this.y+this.size>c.height){
    	this.yspeed=0;
      this.y = c.height-this.size;
    }
    
  if(this.xspeed > 0 && this.y+this.size == c.height){
  this.xspeed-=this.xfriction
  this.xspeed = this.xspeed*10
  this.xspeed = Math.round(this.xspeed)
  this.xspeed = this.xspeed/10
  };
  if(this.xspeed < 0 && this.y+this.size == c.height){
  this.xspeed+=this.xfriction
  this.xspeed = this.xspeed*10
  this.xspeed = Math.round(this.xspeed)
  this.xspeed = this.xspeed/10
  }
  
    if(this.x <= 0){
    this.x = 0
    this.xspeed = -this.xspeed
    }
    if(this.x+this.size >= c.width){
    this.x = c.width-this.size
    this.xspeed = -this.xspeed
    }
    
    if(keys[38]==true && this.yspeed<0){
    this.g =globalGravity/2;
    }
    if(keys[38]==false || this.yspeed>0){
    this.g=globalGravity
    }
    
    
    if(keys[37]==true){
    this.xspeed=-movespeed
    }
    
    if(keys[39]==true){
    this.xspeed=movespeed
    }
    
    if(this.y+this.size<c.height){
    	this.yspeed+=this.g; 
    }
    this.y+=this.yspeed;
    this.x+=this.xspeed;
    document.getElementById('x').innerHTML = 'X: '+ this.x;
    document.getElementById('y').innerHTML = 'Y: '+ this.y;
    ctx.fillRect(this.x,this.y,this.size,this.size);
    console.log(this.xspeed);
  }
}

var obstacle = {

}

setInterval(function(){
	ctx.clearRect(0,0,c.width,c.height);
  player.update();
},10);

var jumpable = true
var keys = [];
document.addEventListener('keydown',function(e){keys[e.keyCode] =true
if (e.keyCode == 38 && player.y+player.size == c.height && jumpable == true){player.jump(); jumpable = false}
;},false);
document.addEventListener('keyup',function(e){keys[e.keyCode] = false; 
if (e.keyCode == 38 && jumpable == false){jumpable = true};},false);

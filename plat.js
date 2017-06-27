var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var movespeed = 3
var globalGravity = .2
var scroll = 0
var player = {
  x: c.width / 2,
  y: c.height / 2,
  xspeed: 0,
  yspeed: 0,
  size: 20,
  xfriction: .1,
  g: globalGravity,
  jump: function() {
    this.yspeed = -6;
  },
  onGround: function(){
  for(var i = 0; i < platforms.length; i++){
  if(this.y+this.size == platforms[i].topSide){
  return true
  }
  }
  },
  update: function() {
    //movement

    if (this.xspeed > 0 && this.onGround()) {
      this.xspeed -= this.xfriction
      this.xspeed = this.xspeed * 10
      this.xspeed = Math.round(this.xspeed)
      this.xspeed = this.xspeed / 10
    };
    if (this.xspeed < 0 && this.onGround()) {
      this.xspeed += this.xfriction
      this.xspeed = this.xspeed * 10
      this.xspeed = Math.round(this.xspeed)
      this.xspeed = this.xspeed / 10
    }

    if (this.x <= 0) {
      this.x = 0
      this.xspeed = -this.xspeed
    }
    if (this.x + this.size >= c.width) {
      this.x = c.width - this.size
      this.xspeed = -this.xspeed
    }

    if (keys[38] == true && this.yspeed < 0) {
      this.g = globalGravity / 2;
    }
    if (keys[38] == false || this.yspeed > 0) {
      this.g = globalGravity
    }


    if (keys[37] == true) {
      this.xspeed = -movespeed
    for (var i = 0; i < platforms.length; i++){
    if(this.y<platforms[i].botSide&&this.y+this.size>platforms[i].topSide){
    if(this.x-movespeed<platforms[i].rSide && this.x+movespeed>platforms[i].rSide){
    this.xspeed = 0
    }}}}

    if (keys[39] == true) {
    this.xspeed = movespeed
    for (var i = 0; i < platforms.length; i++){
    if(this.y<platforms[i].botSide&&this.y+this.size>platforms[i].topSide){
    if(this.x+this.size<platforms[i].lSide+movespeed && this.x+this.size>platforms[i].lSide-movespeed){
    this.xspeed = 0
    }}}}

    this.yspeed += this.g;
		this.y += this.yspeed;
    this.x += this.xspeed;
    document.getElementById('x').innerHTML = 'X: ' + this.x;
    document.getElementById('y').innerHTML = 'Y: ' + this.y;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    //collision/platforms
    for (var i = 0; i < platforms.length; i++) {
      if /* x is within x of plat */ (this.x < platforms[i].rSide && this.x + this.size > platforms[i].lSide) {
        if /* y is inside plat */ (this.y +this.yspeed < platforms[i].botSide && this.y + this.size +this.yspeed> platforms[i].topSide) {
        console.log("what the actual frick")
          if (this.yspeed > 0) {
            this.y = platforms[i].topSide - this.size
            this.yspeed = 0
          }
          if (this.yspeed < 0) {
            this.y = platforms[i].botSide
            this.yspeed = 0
          }
        }
      }
      if /* y is inside plat y */ (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
      console.log("heck this dude")
      	if /* x will be within x of plat */ (this.x + this.xspeed < platforms[i].rSide && this.x + this.size + this.xspeed> platforms[i].lSide) {
        console.log("y in y and x in x")
					if (this.xspeed > 0) {
            this.x = platforms[i].lSide - this.size 
            this.xspeed = 0
          }
          if (this.xspeed < 0) {
            this.x = platforms[i].rSide
            this.xspeed = 0
          }
          //problem: pressing left/right keys clips into block and triggers vertical collision
      	}
      }
    }
  }
}



var platforms = []

function platform(startx, starty, width, height) {
  this.topSide = starty
  this.lSide = startx
  this.botSide = starty + height
  this.rSide = startx + width
  this.width = width
  this.height = height
  this.update = function() {
    ctx.fillRect(this.lSide, this.topSide, this.width, this.height)
  }
}

function addPlat(startx, starty, width, height) {
  platforms.push(new platform(startx, starty, width, height))
}
addPlat(0, 450, 450, 50)
addPlat(300,250, 200, 50)
addPlat(300,250,50,150)
addPlat(100,350,200,50)
addPlat(50,150,150,50)
addPlat(0,-1,c.width,1)

//drawing death sign
var deathSign = new Image
deathSign.src = "https://i.imgur.com/pogZi87.jpg"
deathSign.x = 425
deathSign.y = 425

setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(deathSign,375,375)
  player.update();
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide > 0 && platforms[i].lSide < c.width)
      platforms[i].update()
  }
}, 10);

var jumpable = true
var keys = [];
document.addEventListener('keydown', function(e) {
  keys[e.keyCode] = true
  if (e.keyCode == 38 && player.onGround() && jumpable == true) {
    player.jump();
    jumpable = false
  };
}, false);
document.addEventListener('keyup', function(e) {
  keys[e.keyCode] = false;
  if (e.keyCode == 38 && jumpable == false) {
    jumpable = true
  };
}, false);

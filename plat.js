var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var movespeed = 3
var globalGravity = .2
var player = {
  x: c.width / 2,
  y: c.height / 2,
  xspeed: 0,
  yspeed: 0,
  size: 10,
  xfriction: .5,
  g: globalGravity,
  jump: function() {
    this.yspeed = -6;
  },
  onGround: function(){
  for(var i = 0; i < platforms.length; i++){
  if(this.y+this.size == c.height || this.y+this.size == platforms[i].topSide){
  return true
  }
  }
  },
  update: function() {
    //movement
    if (this.y + this.size > c.height) {
      this.yspeed = 0;
      this.y = c.height - this.size;
    }

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
    }

    if (keys[39] == true) {
      this.xspeed = movespeed
    }

    if (this.y + this.size < c.height) {
      this.yspeed += this.g;
    }
    this.y += this.yspeed;
    this.x += this.xspeed;
    document.getElementById('x').innerHTML = 'X: ' + this.x;
    document.getElementById('y').innerHTML = 'Y: ' + this.y;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    //collision/platforms
    for (var i = 0; i < platforms.length; i++) {
      if /* x is within x of plat */ (this.x < platforms[i].rSide && this.x + this.size > platforms[i].lSide) {
        if (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
          if (this.yspeed >= 0) {
            this.y = platforms[i].topSide - this.size
            this.yspeed = 0
          }
          if (this.yspeed < 0) {
            this.y = platforms[i].botSide
            this.yspeed = 0
          }
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
addPlat(40, 350, 160, 20)
addPlat(340, 250, 110, 20)
addPlat(100,130,60,20)

setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height);
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

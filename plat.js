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
  onGround: function() {
    for (var i = 0; i < platforms.length; i++) {
      if (this.y + this.size == platforms[i].topSide) {
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
      for (var i = 0; i < platforms.length; i++) {
        if (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
          if (this.x - movespeed < platforms[i].rSide - scroll && this.x + movespeed > platforms[i].rSide - scroll) {
            this.xspeed = 0
          }
        }
      }
    }

    if (keys[39] == true) {
      this.xspeed = movespeed
      for (var i = 0; i < platforms.length; i++) {
        if (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
          if (this.x + this.size < platforms[i].lSide - scroll + movespeed && this.x + this.size > platforms[i].lSide - scroll - movespeed) {
            this.xspeed = 0
          }
        }
      }
    }

    this.yspeed += this.g;
    this.y += this.yspeed;
    this.x += this.xspeed;
    document.getElementById('x').innerHTML = 'X: ' + this.x;
    document.getElementById('y').innerHTML = 'Y: ' + this.y;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    //collision/platforms
    for (var i = 0; i < platforms.length; i++) {
      if /* x is within x of plat */ (this.x < platforms[i].rSide-scroll && this.x + this.size > platforms[i].lSide-scroll) {
        if /* y is inside plat */ (this.y + this.yspeed < platforms[i].botSide && this.y + this.size + this.yspeed > platforms[i].topSide) {
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
        if /* x will be within x of plat */ (this.x + this.xspeed < platforms[i].rSide-scroll && this.x + this.size + this.xspeed > platforms[i].lSide-scroll) {
          console.log("y in y and x in x")
          if (this.xspeed > 0) {
            this.x = platforms[i].lSide-scroll - this.size
            this.xspeed = 0
          }
          if (this.xspeed < 0) {
            this.x = platforms[i].rSide-scroll
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
    ctx.fillRect(this.lSide-scroll, this.topSide, this.width, this.height)
  }
}

function addPlat(startx, starty, width, height) {
  platforms.push(new platform(startx, starty, width, height))
}
addPlat(0, 450, 450, 50)
addPlat(300, 250, 200, 50)
addPlat(300, 250, 50, 150)
addPlat(100, 350, 200, 50)
addPlat(50, 150, 150, 50)
addPlat(0, -1,  2000, 1)
addPlat(500,200,50,100)
addPlat(550,150,50,100)
addPlat(600,100,50,100)
addPlat(600,100,100,50)
addPlat(700,0,500,1000)
addPlat(-1000,0,1000,1000)
addPlat(-100,900,900,100)
addPlat(650,450,50,50)

//drawing death sign
var deathSign = new Image
deathSign.src = "https://i.imgur.com/pogZi87.jpg"
deathSign.x = 375
deathSign.y = 375

//drawing smile
var smile = new Image
smile.src = "https://cdn.discordapp.com/attachments/233670630879395841/329782430762401795/smilepart2.png"
smile.x = 800
smile.y = 400

setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height);
  if (player.y<c.height){
  if (player.x>300){
  scroll+= movespeed
  player.x -= movespeed
  }
  if (player.x<50){
  scroll-= movespeed
  player.x += movespeed
  }}
  ctx.drawImage(deathSign, 375-scroll, 375)
  player.update();
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide-scroll > 0 && platforms[i].lSide-scroll < c.width)
      platforms[i].update()
  ctx.drawImage(smile, 830-scroll, 400)
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

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var movespeed = 3
var globalGravity = .2
var xscroll = 0
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
          if (this.x - movespeed < platforms[i].rSide - xscroll && this.x + movespeed > platforms[i].rSide - xscroll) {
            this.xspeed = 0
          }
        }
      }
    }

    if (keys[39] == true) {
      this.xspeed = movespeed
      for (var i = 0; i < platforms.length; i++) {
        if (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
          if (this.x + this.size < platforms[i].lSide - xscroll + movespeed && this.x + this.size > platforms[i].lSide - xscroll - movespeed) {
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
      if /* x is within x of plat */ (this.x < platforms[i].rSide-xscroll && this.x + this.size > platforms[i].lSide-xscroll) {
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
        if /* x will be within x of plat */ (this.x + this.xspeed < platforms[i].rSide-xscroll && this.x + this.size + this.xspeed > platforms[i].lSide-xscroll) {
          console.log("y in y and x in x")
          if (this.xspeed > 0) {
            this.x = platforms[i].lSide-xscroll - this.size
            this.xspeed = 0
          }
          if (this.xspeed < 0) {
            this.x = platforms[i].rSide-xscroll
            this.xspeed = 0
          }
          //problem (RESOLVED): pressing left/right keys clips into block and triggers vertical collision
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
    ctx.fillRect(this.lSide-xscroll, this.topSide, this.width, this.height)
  }
}

function addPlat(startx, starty, width, height) {
  platforms.push(new platform(startx, starty, width, height))
}

//all mapping
var img = new Image();
img.src ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAUCAIAAACReYBMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYdERsPGJIHKQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEf0lEQVR42u2dwZbDIAhF7f9/9MxuzpzOJEVAfJj7lm2aEkPkimjGQAghhBBCCMnrNcb4+vqyHv167TLUbmRp8103yJvB9iPLbkTkvifeji1O1c6dlJ+71+tVf9hNu/38/Pfnv895dfzVT67OY7Hh/ivLP179qaC3oO7S7BgRIkb7wR3MMjbIX4NzwT1oTPzMK+5IgWvphyUpGjM2lwW1f67LcmR8KDvF4lOcHbfByO6WAQPsjgB3hAB3wH0J1NaAe9llrrY50c3ahSKRrmEKWPdm3H3sHiFmx2Piw3pHsh89lraDngC1I3QmuNebnm5epHvKysY17S7tedNdD8wZsWd779CiGf/1xkh+PSXvPmylO7nsDsE/FtYTPQFwR+hYcK+0fmn9fcqQIGihciS+mTqgiz+1j+g4jLRAsAOajez+cfwQ/2p2BqDec+xLelDNE1oQEBEiKHcC96FUkVwzP5iSMp9K4ym4yBW730zO+ib098aM1TMJwfPLVv8vNcwybowsS43k4y0Pte+0wVFEwd1psZkB4O5of8AdocPBfUvYXmeAfXVdTX+nE/Mc8xIbA0Dw3xPr+BctCaD6f4RrXdwbucwOyG+GtQV5dxGHabdmo8Bmd3RbdxVQO0KPAPexL6lT/79T4B7fg6UvuG9h9xWUHMxxlrXAc6r/HWtJp8pmjNNHU+OHkZqSX7HGptJ5BGss069i3Sj9xhOMkQhwRwhwz7+Y7RWcjkoPS33nLNy3BvexO+8uQo1oaadZwO4fd4gK1sors7u7hrCM8p/wuBndYIrvoXaEfNByFLinXFJNRbvbknhHOZUvaQHu98y6cQuaXdH0ORmFXVdtBPQsdn/7MCtZ7rM8WDMzMlLFZHBbPKSzG0RysxB6KLi7L0xwtZOd3R1vSA0eowPus04PjKpZJV4xfzX2c1SBRyZMsmpjhqu8Pr0iv8ZJYMGpxswtXp/KAXGnEGoJ7iue7fRzKuwf/zFeZoH7aLKrTCK7Zy2l0oRRHasavaE2fQ/H2Z0i3dCfuPY0ZYv3XX6iMDOz3cL0IqVEcIfaERrmAgEhcD+sI97LH4ngPhru474r764Jo1JWyY4DfeC+jt2nlqPsXZO6KO+e6yrrOgTxoLCudtSRFFu3FAGhA3h9in/6gfuuZ/6Z4N5xVFrJ7ppeoWZVx+20I2UkbuI33tNgbf1InUnIZfftW793GYLqP9FwOULu/sT3Ohp1cC/uGjY2lr33vOdyxwLWvmPTlDpO8eCtORyP7AenDC7B4vUp2h6ptfUffzW1qvvfn6SsAq/xE813hhzJ7oA7Qr7uRT8L1qOKURDc7+ncVwqf0pI1s+ciLzqVCquCVnXHncTdV6Z4t6a2Xn9AjgTZnY19EALc1yYGDogrvhWoNShc81JrqfpIKc4Q3AVoXKy5PABcynZfKautB9lRffxCCL31hL+D5lPAfRy3AqkA3EWawlex/ag1yh8bEABSZvdh2H3lb/Z9RW390HgDAO4KviOE3qj95pNjwf1pXd66Mm7CKkIIIYQQ+qtvyukZX2SyrkAAAAAASUVORK5CYII=';
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, img.width, img.height);
var scale = 1;

function pixel(){
this.r=undefined
this.g=undefined
this.b=undefined
this.a=undefined
}

var map =[];
for(var i = 0; i<img.height; i++){
map.push([])
}
for(var y = 0; y<img.height; y++){
for(var x = 0; x<img.width; x++){
map[y].push(new pixel)
}
}

for (var y = 0; y < img.height; y++) {
  for (var x = 0; x < img.width; x++) {
    map[y][x].r = imgData.data[(y * img.width + x) * 4 + 0]
    map[y][x].g = imgData.data[(y * img.width + x) * 4 + 1]
    map[y][x].b = imgData.data[(y * img.width + x) * 4 + 2]
    map[y][x].a = imgData.data[(y * img.width + x) * 4 + 3];
  }
}
console.log(map)

for(var y = 0; y<map.length; y++){
	for(var x = 0; x<map[y].length; x++){
     if(map[y][x].r == 0 && map[y][x].g == 0 && map[y][x].b == 0 && map[y][x].a == 255){
   	addPlat((x/map.length)*c.height*scale,(y/map.length)*c.height*scale,c.height*scale/map.length,c.height*scale/map.length);
   }
  }
}

//sprites
function sprite(x,y,src){
this.x=x
this.y=y
this.img = new Image
this.img.src = src
}

var backgroundSprites = []
var foregroundSprites = []

function addBackground(x,y,src){
backgroundSprites.push(new sprite(x,y,src))
}
function addForeground(x,y,src){
foregroundSprites.push(new sprite(x,y,src))
}
/*
//deathsign
addBackground(375,375,"https://i.imgur.com/pogZi87.jpg")
//smiley
addForeground(830,400,"https://cdn.discordapp.com/attachments/233670630879395841/329782430762401795/smilepart2.png")
*/
setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height);
  if (player.y<c.height){
  if (player.x>300){
  xscroll+= movespeed
  player.x -= movespeed
  }
  if (player.x<100){
  xscroll-= movespeed
  player.x += movespeed
  }}
  for(var i = 0; i<backgroundSprites.length;i++){
  ctx.drawImage(backgroundSprites[i].img,backgroundSprites[i].x-xscroll,backgroundSprites[i].y)
  }
  player.update();
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide-xscroll > 0 && platforms[i].lSide-xscroll < c.width)
      platforms[i].update()
  }
  for(var i = 0; i<foregroundSprites.length;i++){
  ctx.drawImage(foregroundSprites[i].img,foregroundSprites[i].x-xscroll,foregroundSprites[i].y)}
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

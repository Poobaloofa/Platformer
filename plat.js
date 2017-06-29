var c = document.getElementById('canvas');
c.width = 1000;
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
img.src ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAIAAACVui2AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYdDioOvrLUQAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAx0lEQVRYw+WYSw6AIAxEO4b7X7kuNNEARSiUj7AVcF5oOwWizQaIiJmzpgKZM02EArqFb80Ajt1OeBlgXXCFq5x14A3MguhwM5xDfaLmi0HB1Jea+auXhIDo57EFuZ5ZEn8DM3NIODmzhJ3W/ABHCT+ZFSnnuWLPAuED65gXa7O8xuOK7ZlNpb0tRfP5Nzn82NJeVVpi7lNIxvhwT/U14VNU2MO/oGfrq0u5hi547eCsL71plVKrZ/sAYGTxba8frR4Adrv/0wnPXZAWm8hNPQAAAABJRU5ErkJggg==';
ctx.drawImage(img, 0, 0);
var imgData = ctx.getImageData(0, 0, img.width, img.height);
var scale = 1;

function pixel(){
this.r=undefined;
this.g=undefined;
this.b=undefined;
this.a=undefined;
}

//reads image data, converts to hashmap
  var map =[];
  for (var y = 0; y < img.height; y++) {
        map.push([]);
    for (var x = 0; x < img.width; x++) {
      map[y].push(new pixel);
      map[y][x].r = imgData.data[(y * img.width + x) * 4 + 0]
      map[y][x].g = imgData.data[(y * img.width + x) * 4 + 1]
      map[y][x].b = imgData.data[(y * img.width + x) * 4 + 2]
      map[y][x].a = imgData.data[(y * img.width + x) * 4 + 3];
    }
  }

//reads map array information, adds corresponding platforms
for(var y = 0; y<map.length; y++){
	for(var x = 0; x<map[y].length; x++){
     if(map[y][x].r == 0 && map[y][x].g == 0 && map[y][x].b == 0 && map[y][x].a == 255){
   	addPlat((x/map.length)*c.height*scale,(y/map.length)*c.height*scale,c.height*scale/map.length,c.height*scale/map.length);
   }
  }
}
c.width = 500;

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

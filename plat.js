var c = document.getElementById('canvas');
c.width = 1000;
var ctx = c.getContext('2d');
console.log('kek');
var movespeed = 3
var globalGravity = .2
var xscroll = 0
var yscroll = 0
var lScroll = 0.2
var rScroll = 0.6
var tScroll = 0.2
var bScroll = 0.8
var player = {
  x: c.width / 4,
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
      if (this.y + this.size == platforms[i].topSide-yscroll) {
        return true
      }
    }
  },
  update: function() {
    //movement

    if (this.xspeed > 0 && this.onGround()) {
      this.xspeed -= 2*this.xfriction
      this.xspeed = this.xspeed * 10
      this.xspeed = Math.floor(this.xspeed)
      this.xspeed = this.xspeed / 10
    };
    if (this.xspeed < 0 && this.onGround()) {
      this.xspeed += this.xfriction
      this.xspeed = this.xspeed * 10
      this.xspeed = Math.floor(this.xspeed)
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
// TODO INPUTS
    if (keys[38] == true && this.yspeed < 0) {
      this.g = globalGravity / 2;
    }
    if (keys[38] == false || this.yspeed > 0) {
      this.g = globalGravity
    }


    if (keys[37] == true) {
      this.xspeed = -movespeed
      for (var i = 0; i < platforms.length; i++) {
        if (this.y < platforms[i].botSide - yscroll && this.y + this.size > platforms[i].topSide-yscroll) {
          if (this.x - movespeed < platforms[i].rSide - xscroll && this.x + movespeed > platforms[i].rSide - xscroll) {
            this.xspeed = 0
          }
        }
      }
    }

    if (keys[39] == true) {
      this.xspeed = movespeed
      for (var i = 0; i < platforms.length; i++) {
        if (this.y < platforms[i].botSide - yscroll && this.y + this.size > platforms[i].topSide-yscroll) {
          if (this.x + this.size < platforms[i].lSide - xscroll + movespeed && this.x + this.size > platforms[i].lSide - xscroll - movespeed) {
            this.xspeed = 0
          }
        }
      }
    }

//scrolling
//x scrolling
  	 if (player.x>rScroll*c.width){
  	  xscroll+= movespeed
	    player.x -= movespeed
	    }
	   if (player.x<lScroll*c.width){
	   xscroll-= movespeed
	   player.x += movespeed
	   }
//y scrolling
    if (player.y<tScroll*c.height){
  	  yscroll -= movespeed
	    player.y += movespeed
	    }
	   if (player.y>bScroll*c.height){
	   yscroll += movespeed
	   player.y -= movespeed
	   }

    this.yspeed += this.g;
    this.y += this.yspeed;
    this.x += this.xspeed;
    document.getElementById('x').innerHTML = 'X: ' + this.x;
    document.getElementById('y').innerHTML = 'Y: ' + this.y;
    ctx.clearRect(this.x, this.y, this.size, this.size);	//TODO ADD SPRITE FOR PLAYER

    //collision/platforms
    for (var i = 0; i < platforms.length; i++) {
      if /* x is within x of plat */ (this.x < platforms[i].rSide-xscroll && this.x + this.size > platforms[i].lSide-xscroll) {
        if /* y is inside plat */ (this.y + this.yspeed < platforms[i].botSide - yscroll && this.y + this.size + this.yspeed > platforms[i].topSide-yscroll) {
          if (this.yspeed > 0) {
            this.y = platforms[i].topSide - yscroll - this.size
            this.yspeed = 0
          }
          if (this.yspeed < 0) {
            this.y = platforms[i].botSide - yscroll
            this.yspeed = 0
          }
        }
      }
      if /* y is inside plat y */ (this.y < platforms[i].botSide - yscroll && this.y + this.size > platforms[i].topSide-yscroll) {
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
        }
      }
    }
  }
}

var sprites = {
  brick : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYeEQ41+56XYQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABEUlEQVRIx+2WQUrDQBSGv5e8gp0EdONGvEjBnTulPY2XsqALvYDQE7i029geQE2tEPJcNIgZojMqZlH9IQQe3+RP5v2TGVlOMuOdjm+euXuouZ9khLQ3AHdRsgywkkDLpG7uCXGqI1h1Gn6QAWUFmYJEGD9VkKUgDSz+dHW+rRmH1yuKsSOVsM3BVcn8xJGrfGlWfqReTNQsricAZl5KPhtjmws2fbRf/5LF2NFeJ2vmjzWFV+/S7kDIL0sWAVbFS8tb7CJSlESy25OufhqvEgdWBt9l/38rfzVd09FOq3B2+0KxMs69epcyhdPZmmmA1aP91BsoCIZf/2iPB4LsFm1auXa75hEHjGGz2EJsL+l6Bd/dUpEbRgCnAAAAAElFTkSuQmCC',
  cobblestone : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcBADUeQ24mJwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEY0lEQVQ4y11Vy47TShCtdr/s+JlkkpBECCGx4XP5KvZIbBAgDSDNYDmTsXv86PddFDdC9M7druo6dc6pJh8+fACAYRiWZYkxcs4BwFrLOU+SBABCCM6579+/b7fbGGOWZavVKoTAGIsxCiEIISEEAGBaa631NE3n89k5hykopQDgvQcAY8y3b9+klLvdLsYYY6SU/glmbFmWJEnKsjTGsL7vpZTr9Xq/38/zPAxDCMEYA/+vHz9+AMD79+/rusYUfy9rbdd10zSlacqstcfjcbPZKKVeXl5uP5VlSQj5+vXrPM/v3r0TQgAAIeTvRFg+Yww/WVEUWZaFEDARpVRKmaap914ppZQ6Ho+UUu89Qv5njePonMuyzDnHpmninD89Pd2OOefe+67rlFKMMUopY2y/3xNCsHZKaZIkWmvvvdY6SZIYIyGE5Xn++PjonMNqnXPTNBljhBBpmuZ5jn8vyyKEaJomz3Pn3LIswzAAgHOu7/ssy9brNSvLsm1bKaVzTgjhnPPeV1XlvUeaYox93xtjiqLgnGutl2Wx1l4uF6XU4+Pj6XTy3nPO2TiOUsokSYQQ2CwAUErFGKWU3vtpmhCR1to5F2NUSlVVxRi7u7s7nU4AcL1e53lmhJCmabBTWmvMJaXUWgMA3tH3PSGkLEskoa7r1WqFZRJCEOw8z0lVVVJKJBsTcc7rupZS/vr1axzHNE2rqirLEsWltV6tVng37hRFIYQIITDOuRAixoj6pJSWZRljbNvWWvv69essy5B4AHh5eYkxpmnqnHPOEULqup6mSUrZ933Stq1zDlWHoIwxXddZa3e7HcoqxjhN09PT0/V67bqOMVaWZVEUANB1XQjh7u4uhMAIIdfrFZVirUWal2VB4J8+ffLe53mO4jbGnM/njx8/vn37drfboVbQ/N57JoQYx1EpxTnHgMvlwjk/HA593+92u2VZ0jTF7m632xDC4XB4eHjoui7P8xCClPJ6vT48PDC0JaW0KApEiuy0beu932w2+/3eGCOl3G63ADBNE8LXWldVhX0siuJ8PrP1eq21ppTeWrZerwHg/v5+u902TUMpxbpunu+6DgDevHnDGEMX53lOKf1jq7Is/zEtEl+WZdM0f5+2bZtlWVVViAY30SSJcy6EgPMM9YVnaZoaY758+dJ1Hbr35mRU0zzPfd/j5jiOQggWQrDWYnAIQWttjNFa13VdVVXf95fL5ffv30jO8/Pz6XR69eoVAPz8+dNai8OaUlpVFYsxaq0/f/5cFMUwDGmaojGrqgKANE3TNMXUaED05jzPdV0jJkynlGI4MI/Ho9b6cDigJZdlMcZYaxljUsobdjx6fn5umubv/WEY8jxnhBAp5Wq14pxba29eo5RqrfM8z7IMVYpuJ4QQQjabDefcOYc8SimVUgkKnXOOMTfTUkqFEMYYnKv41qFicTYgtFtIlmUMp+D9/X1d17fnB0XgnEOkOB6EENbapmm89/M8o73xlUQx/wcSqAXRPoVFPAAAAABJRU5ErkJggg=='
}
var platforms = []

function platform(startx, starty, width, height) {
  this.topSide = starty
  this.lSide = startx
  this.botSide = starty + height
  this.rSide = startx + width
  this.width = width
  this.height = height
  this.sprite = new Image();
  this.sprite.src = sprites.cobblestone;
  this.sprite.style.width = this.width;
  this.sprite.style.height = this.height;
  this.update = function() {
    ctx.fillRect(this.lSide-xscroll, this.topSide-yscroll, this.width, this.height);
    ctx.drawImage(this.sprite, this.lSide-xscroll, this.topSide-yscroll);
  }
}

function addPlat(startx, starty, width, height) {
  platforms.push(new platform(startx, starty, width, height))
}

//all mapping
var img = new Image();
img.src ='babbymap.png';
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
map.x = 0
map.y = 0
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

for(var y = 0; y<map.length; y++){
	for(var x = 0; x<map[y].length; x++){
     if(map[y][x].r == 0 && map[y][x].g == 0 && map[y][x].b == 0 && map[y][x].a == 255){
   	addPlat((x/map.length)*c.height*scale,(y/map.length)*c.height*scale,c.height*scale/map.length,c.height*scale/map.length);
   }
  }
}
c.width = 500;

//sprites

/*
//deathsign
addBackground(375,375,"https://i.imgur.com/pogZi87.jpg")
//smiley
addForeground(830,400,"https://cdn.discordapp.com/attachments/233670630879395841/329782430762401795/smilepart2.png")
*/

 for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide-xscroll > 0 && platforms[i].lSide-xscroll < c.width)
      platforms[i].update()
  }

//lighting
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


var background = new Image();
background.src = whatever goes here
setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(background, 0,0);
  for(var i = 0; i<bgSprites.length;i++){
  ctx.drawImage(bgSprites[i].img,bgSprites[i].x-xscroll,bgSprites[i].y)
  }
  player.update();
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].rSide-xscroll > 0 && platforms[i].lSide-xscroll < c.width)
      platforms[i].update()
  }
  for(var i = 0; i<fgSprites.length;i++){
  ctx.drawImage(fgSprites[i].img,fgSprites[i].x-xscroll,fgSprites[i].y)}

  //light(player.x, player.y, 200);
}, 10);


//key mapping
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

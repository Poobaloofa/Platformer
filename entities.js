var enemies = [];
enemies.push(new enemy(1000,300,20,.5,.2));

var pickUps = [];
//pickUps.push(new pickUp(1000,300,25,25,coinAnimFrames));

function enemy(x,y,size,movespeed,gravity){
  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;
  this.size = size; //default 20
  this.xfriction = .2;
  this.movespeed = movespeed; //default 1
  this.g = gravity;
  this.jump = function() {
    this.yspeed = -6;
  };
  this.onGround = function() {
    for (var i = 0; i < platforms.length; i++) {
      if (this.y + this.size == platforms[i].topSide && this.x < platforms[i].rSide && this.x + this.size > platforms[i].lSide) {
        return true;
      };
    };
    return false;
  };
  this.update = function(){
    if(this.x<camera.x+c.width && this.x>camera.x && this.y<camera.y+c.height && this.y>camera.y){
      this.xspeed = -movespeed;
      /*for (var i = 0; i < platforms.length; i++) {    //NOTE so this seems pretty unneeded/redundant because literally the same thing is in physics.js, and as far as I can tell it runs without a hitch here
        if (this.y < platforms[i].botSide && this.y + this.size > platforms[i].topSide) {
          if (this.x + this.size < platforms[i].lSide + movespeed && this.x + this.size > platforms[i].lSide - movespeed) {
            this.xspeed = 0;
          }
        }
      }*/
    }
  }
}

function pickUp(x,y,width,height,animFrames){
  this.x = x;
  this.y = y;
  this.w = width;
  this.h = height;
  this.animFrames = animFrames;
  this.currentFrame = 0;
  this.update = function (newFrame) {
    ctx.drawImage(this.animFrames[this.currentFrame], this.x-camera.x, this.y-camera.y);
    if(newFrame){
      this.currentFrame++;
      this.currentFrame%=animFrames.length;
    }
  }
}

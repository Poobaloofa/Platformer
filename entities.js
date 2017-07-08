var enemies = [];
enemies.push(new enemy(1000,300,20,.5,.2));


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

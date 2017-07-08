function Player(){
  this.x = undefined;
  this.y = undefined;
  this.xspeed = 0;
  this.yspeed = 0;
  this.size = 20;
  this.xfriction = .2;
  this.movespeed = 1;
  this.g = globalGravity;
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
}

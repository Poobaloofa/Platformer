function Player(){
  this.x = c.width / 4;
  this.y = c.height / 2;
  this.xspeed = 0;
  this.yspeed = 0;
  this.size = 20;
  this.xfriction = .2;
  this.movespeed = 3;
  this.jump = function() {
    this.yspeed = -6;
  };
  this.onGround = function() {
    for (var i = 0; i < platforms.length; i++) {
      if (this.y + this.size == platforms[i].topSide) {
        return true;
      };
    };
  };
  this.update = function(){

  };
}

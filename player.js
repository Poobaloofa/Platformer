function player(){
  x: c.width / 4,
  y: c.height / 2,
  xspeed: 0,
  yspeed: 0,
  size: 20,
  xfriction: .2,
  movespeed: 3,
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
}

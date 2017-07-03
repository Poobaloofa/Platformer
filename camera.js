var camera = {
  x: 0,
  y: 0,
  lbound: 0.2,
  rbound: 0.6,
  tbound: 0.4,
  bbound: 0.8,
  update: function(){
    //x scrolling
    if(player.x>this.x+c.width*this.rbound){
      this.x += player.x-(c.width*this.rbound);
    };
    if(player.x<this.x+c.width*this.lbound){
      this.x += player.x-(c.width*this.lbound);
    };
    //y scrolling
    if(player.y>this.y+c.height*this.bbound){
      this.y += player.y-(c.height*this.bbound);
    };
    if(player.y<this.y+c.height*this.tbound){
      this.y += player.y-(c.height*this.tbound);
    };
  },
};

//natural forces
function natForces(obj){
  //gravity
  if(obj.onGround() == false){
  obj.yspeed += obj.g
}
  //friction
  if (obj.xspeed > 0 && obj.onGround()) {
    obj.xspeed -= obj.xfriction;
    obj.xspeed = obj.xspeed * 10;
    obj.xspeed = Math.floor(obj.xspeed);
    obj.xspeed = obj.xspeed / 10;
  };
  if (obj.xspeed < 0 && obj.onGround()) {
    obj.xspeed += obj.xfriction;
    obj.xspeed = obj.xspeed * 10;
    obj.xspeed = Math.ceil(obj.xspeed);
    obj.xspeed = obj.xspeed / 10;
  };
}

function colliding(obj){
  for (var i = 0; i < platforms.length; i++) {
    if /* x is within x of plat */ (obj.x < platforms[i].rSide && obj.x + obj.size > platforms[i].lSide) {
      if /* y is inside plat */ (obj.y + obj.yspeed < platforms[i].botSide && obj.y + obj.size + obj.yspeed > platforms[i].topSide) {
        if (obj.yspeed > 0) {
          obj.y = platforms[i].topSide - obj.size
          obj.yspeed = 0
          return "top"
        }
        if (obj.yspeed < 0) {
          obj.y = platforms[i].botSide
          obj.yspeed = 0
          return "bot"
        }
      }
    }
    if /* y is inside plat y */ (obj.y < platforms[i].botSide && obj.y + obj.size > platforms[i].topSide) {
      if /* x will be within x of plat */ (obj.x + obj.xspeed < platforms[i].rSide && obj.x + obj.size + obj.xspeed > platforms[i].lSide) {
        if (obj.xspeed > 0) {
          obj.x = platforms[i].lSide - obj.size
          obj.xspeed = 0
          return "left"
        }
        if (obj.xspeed < 0) {
          obj.x = platforms[i].rSide
          obj.xspeed = 0
          return "right"
        }
      }
    }
  }
}

function pUpdate(obj){
  natForces(obj);
  colliding(obj);
  obj.x += obj.xspeed;
  obj.y += obj.yspeed;
}

//ANYTHING using physics needs: x,y,xspeed,yspeed,xfriction,g

function objColl(obj1,obj2){

}

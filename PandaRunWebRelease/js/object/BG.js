var __extends=this&&this.__extends||function(){var t=function(r,s){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var s in r)r.hasOwnProperty(s)&&(t[s]=r[s])})(r,s)};return function(r,s){function i(){this.constructor=r}t(r,s),r.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),BG=function(t){function r(){var r=t.call(this)||this;return r.sprWidth=Cof.DesinWidth,r.spr1=new Sprite,r.spr1.loadImage("BG.jpg"),r.addChild(r.spr1),r.spr2=new Sprite,r.spr2.loadImage("BG.jpg"),r.addChild(r.spr2),r.spr2.pos(r.sprWidth,0),r}return __extends(r,t),r.prototype.update=function(t){this.spr1.x+this.sprWidth<t&&(this.spr1.x=this.spr2.x+this.sprWidth),this.spr2.x+this.sprWidth<t&&(this.spr2.x=this.spr1.x+this.sprWidth)},r}(Sprite);
var $cam,Cam=function(){function t(){this.viewRectangle=new Rectangle,this.playerOffX=0,this._distance=0,this._camX=0}return Object.defineProperty(t.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance!=t&&(this._distance=t,this.game.distance=this.distance)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"camX",{get:function(){return this._camX},set:function(t){this._camX=t,this.viewRectangle.x=t,this.camLayer.scrollRect=this.viewRectangle},enumerable:!0,configurable:!0}),t.prototype.start=function(t,e,i){$cam=this,this.game=i,this.camLayer=t,this.viewRectangle.x=0,this.viewRectangle.y=0,this.viewRectangle.width=Cof.DesinWidth,this.viewRectangle.height=Cof.DesinHeight,this.player=e,this.camX=0,this.playerOffX=this.camX-this.player.x,this.startX=0},t.prototype.update=function(){this.player.x+this.playerOffX>this.camX&&(this.camX=this.player.x+this.playerOffX,this.distance=Math.floor(this.camX/10))},t}();
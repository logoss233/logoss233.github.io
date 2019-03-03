function Boom(x,y){
    GameObject.call(this,{
      x:x,
      y:y,
      width:CONFIG.enemySize,
      height:CONFIG.enemySize,
      image:ImageLab.enemyBoomImg
    })
    this.tag="boom"
    this.timer=5  //持续时间
  }
  Boom.prototype=Object.create(GameObject.prototype)
  Boom.prototype.constructor=Boom
  Boom.prototype.update=function(){
    this.timer--
    if(this.timer<=0){
      this.destroy()
    }
  }
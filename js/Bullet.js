/**
 * 子弹
 * @param {*} x 
 * @param {*} y 
 */
function Bullet(x,y){
    GameObject.call(this,{
      x:x,
      y:y,
      width:2,
      height:CONFIG.bulletSize,
      image:null
    })
    this.tag="bullet"
    this.speed=CONFIG.bulletSpeed
  }
  Bullet.prototype=Object.create(GameObject.prototype)
  Bullet.prototype.constructor=Bullet
  //重写draw方法
  Bullet.prototype.draw=function(){
    context.fillStyle="white"
    context.fillRect(this.x,this.y,this.width,this.height)
  }
  Bullet.prototype.update=function(){
    this.y-=this.speed
    for(var i=0;i<ObjManager.enemys.length;i++){
      var enemy=ObjManager.enemys[i]
      if(this.checkCollision(enemy)){
        enemy.die()
        this.destroy()
      }
    }
    
    if (this.y<-this.height){
      this.destroy()
    }
  }
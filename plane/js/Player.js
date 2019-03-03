/**
 * 玩家 飞机
 * @param {Object} options 包含x,y
 */
function Player(x,y){
    GameObject.call(this,{
      x:x,
      y:y,
      width:CONFIG.planeSize.width,
      height:CONFIG.planeSize.height,
      image:ImageLab.planeImg
    })
    this.tag="player"
    this.shootCd=CONFIG.shootCd
    this.shootTimer=0
    this.speed=CONFIG.planeSpeed
    this.canvasPadding=CONFIG.canvasPadding
  }
  Player.prototype=Object.create(GameObject.prototype)
  Player.prototype.constructor=Player
  Player.prototype.update=function(){
    var left=Input.isKey("left")
    var right=Input.isKey("right")
    var shoot=Input.isKey("shoot")
    if(left){
      this.x-=this.speed
      if(this.x<this.canvasPadding){
        this.x=this.canvasPadding
      }
    }
    if(right){
      this.x+=this.speed
      if(this.x>canvas.width-this.canvasPadding-this.width){
        this.x=canvas.width-this.canvasPadding-this.width
      }
    }
  
    if(shoot){
      if(this.shootTimer<=0){
        this.shootTimer=this.shootCd
        this.shoot()
      }
    }
    if(this.shootTimer>0){
      this.shootTimer--
    }
    
  }
  Player.prototype.shoot=function(){
    var x=this.x+this.width/2
    var y=this.y-10
    var bullet=new Bullet(x,y)
    ObjManager.add(bullet)
  }
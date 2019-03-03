/**
 * 游戏物体基类
 * @param {Object} options 包含x,y,width,height
 */
function GameObject(options){
    this.x=options.x ||0   
    this.y=options.y ||0
    this.width=options.width ||0
    this.height=options.height ||0
    this.image=options.image ||null
    //标记 用来让ObjMamager识别
    this.tag=""  
  }
  GameObject.prototype.draw=function(){
    if(!this.image){
      return
    }
    context.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  /**
   * 检测是否与另一个游戏物体相撞
   */
  GameObject.prototype.checkCollision=function(obj){
    var rect1=this
    var rect2=obj
    var result=false
    if (!(rect2.x + rect2.width < rect1.x) &&
    !(rect1.x + rect1.width < rect2.x) &&
    !(rect2.y + rect2.height < rect1.y) &&
    !(rect1.y + rect1.height < rect2.y)) {
      result=true
    }
    return result
  }
  /**
   * 添加到场景
   */
  GameObject.prototype.addToScene=function(){
    ObjManager.add(this)
  }
  /**
   * 销毁
   */
  GameObject.prototype.destroy=function(){
    ObjManager.remove(this)
  }
  /**
   * 每帧更新 用来给子类重写
   */
  GameObject.prototype.update=function(){
  }
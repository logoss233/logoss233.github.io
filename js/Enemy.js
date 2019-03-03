/**
 * 敌人
 * @param {} x 
 * @param {*} y 
 */
function Enemy(x,y){
    GameObject.call(this,{
      x:x,
      y:y,
      width:CONFIG.enemySize,
      height:CONFIG.enemySize,
      image:ImageLab.enemyImg
    })
    this.tag="enemy"
  }
  Enemy.prototype=Object.create(GameObject.prototype)
  Enemy.prototype.constructor=Enemy
  Enemy.prototype.die=function(){
    //生成爆炸效果
    var boom=new Boom()
    boom.x=this.x+this.width/2-boom.width/2
    boom.y=this.y+this.height/2-boom.height/2
    boom.addToScene()
    this.destroy()
    //得分
    GAME.setScore(GAME.score+1)
    //如果没有敌人了，游戏胜利
    if(ObjManager.enemys.length==0){
      window.setTimeout(function(){
        GAME.winLevel()
      },500)
    }
  }
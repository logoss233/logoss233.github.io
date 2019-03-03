/**
 * 游戏循环
 */
var Loop={
    timer:-1,
    start:function(){
      Loop.timer=requestAnimationFrame(()=>{
        Loop.update()
      })
    },
    end:function(){
      cancelAnimationFrame(this.timer)
    },
    update(){
      //更新游戏物体
      if (ObjManager.player){
        ObjManager.player.update()
      }
      //复制数组，防止增加删除物体产生问题
      var bullets=ObjManager.bullets.concat()
      for(let i=0;i<bullets.length;i++){
        let bullet=bullets[i]
        bullet.update()
      }
      //敌人控制
      EnemyControl.update()
      //更新爆炸
      var booms=ObjManager.booms.concat()
      for(let i=0;i<booms.length;i++){
        let boom=booms[i]
        boom.update()
      }
  
  
  
      //清除画布
      context.clearRect(0,0,canvas.width,canvas.height)
      //绘制
      if(ObjManager.player){
        ObjManager.player.draw()
      }
      
      for(let i=0;i<ObjManager.bullets.length;i++){
        ObjManager.bullets[i].draw()
      }
      for(let i=0;i<ObjManager.enemys.length;i++){
        ObjManager.enemys[i].draw()
      }
      for(let i=0;i<ObjManager.booms.length;i++){
        ObjManager.booms[i].draw()
      }
      Loop.timer=requestAnimationFrame(Loop.update)
    }
  }
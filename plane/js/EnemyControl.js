var EnemyControl={
    /**
     * 初始化 每次游戏开始时初始化一次
     */
    init:function(){
      this.speed=CONFIG.enemySpeed
      //朝向 1朝右 -1 朝左
      this.direction=1
      if(CONFIG.enemyDirection="right"){
        this.direction=1
      }else if(CONFIG.enemyDirection="left"){
        this.direction=-1
      }
    },
    update:function(){
      var changeLine=false
      var enemys=ObjManager.enemys.concat()
      for(let i=0;i<enemys.length;i++){
        let enemy=enemys[i]
        enemy.x=enemy.x+this.speed*this.direction
        if(this.direction==1 && enemy.x>canvas.width-CONFIG.canvasPadding-enemy.width){
          changeLine=true
        }
        if(this.direction==-1 && enemy.x<CONFIG.canvasPadding){
          changeLine=true
        }
      }
      if (changeLine){
        this.changeLine()
      }
    },
    changeLine(){
      this.direction=this.direction*-1
      var enemyWin=false
      for(let i=0;i<ObjManager.enemys.length;i++){
        var enemy=ObjManager.enemys[i]
        enemy.y+=enemy.height
        if(enemy.y+enemy.height>canvas.height-CONFIG.canvasPadding-CONFIG.planeSize.height){
          enemyWin=true
        }
      }
      if(enemyWin){
        //游戏失败
        GAME.lose()
      }
    }
  }
  "use strict"
/**
 * 整个游戏对象
 */
var GAME={
  /**
   * 初始化函数,这个函数只执行一次
   * @param  {object} opts 
   * @return {[type]}      [description]
   */
  init: function(opts) {
    this.status='start';
    this.score=0
    this.level=1
    this.isPause=false //游戏是否暂停

    this.playScoreText=document.querySelector(".game-playing .score")
    this.successNextLevelText=document.querySelector(".game-success .game-next-level")
    this.failedScoreText=document.querySelector(".game-failed .score")

    this.bindEvent();
  },
  bindEvent: function() {
    var self=this;
    var playBtn=document.querySelector('.js-play');
    // 开始游戏按钮绑定
    playBtn.onclick=function() {
      self.play();
    };
    //按p暂停游戏
    window.addEventListener("keydown",(e)=>{
      if (e.keyCode==80){
        if(this.status=="playing"){
          this.isPause=!this.isPause
          console.log(this)
          if(this.isPause){
            Loop.end()
          }else{
            Loop.start()
          }
        }
      }
    })
    //失败界面重新开始按钮
    var btn=document.querySelector(".game-failed .js-replay")
    btn.onclick=function(){
      self.replay()
    }
    //通过一关后继续游戏按钮
    btn=document.querySelector(".js-next")
    btn.onclick=function(){
      self.play()
    }
    //全部通关后重玩按钮
    btn=document.querySelector(".game-all-success .js-replay")
    btn.onclick=function(){
      self.replay()
    }
  },
  /**
   * 更新游戏状态，分别有以下几种状态：
   * start  游戏前
   * playing 游戏中
   * failed 游戏失败
   * success 游戏成功
   * all-success 游戏通过
   * stop 游戏暂停（可选）
   */
  setStatus:function(status) {
    //离开状态时要做的事
    switch(this.status){
      case "playing":
        Loop.end()
        ObjManager.removeAll()
        context.clearRect(0,0,canvas.width,canvas.height)
      break;
    }

    this.status=status;
    container.setAttribute("data-status", status);
    //进入状态要执行的函数
    switch(status){
      case "start":
        this.setScore(0)
        this.level=1
        this.isPause=false
      break;
      case "playing":
        this.status_playing_init()
      break;
      case "success":
        this.successNextLevelText.innerText="下一个Level："+this.level
      break;
      case "failed":
        this.failedScoreText.innerText=String(this.score)
      break;
    }
  },
  play: function() {
    this.setStatus('playing');
  },
  status_playing_init:function(){
    this.isPause=false
    var conf=CONFIG
    //重置敌人控制
    EnemyControl.init()
    //生成玩家
    var player=new Player()
    player.x=canvas.width/2-player.width/2
    player.y=canvas.height-conf.canvasPadding-player.height
    ObjManager.add(player)
    //生成敌人
    for(var line=0;line<this.level;line++){
      for(let i=0;i<conf.numPerLine;i++){
        var enemy=new Enemy()
        enemy.x=conf.canvasPadding+(enemy.width+conf.enemyGap)*i
        enemy.y=conf.canvasPadding+line*(enemy.height+conf.enemyGap)
        enemy.addToScene()
      }
    }
    //开始游戏循环
    Loop.start()
  },
  //关卡胜利
  winLevel(){
    this.level++
    if(this.level<=CONFIG.totalLevel){
      this.setStatus("success")
    }else{
      this.setStatus("all-success")
    }
  },
  //失败
  lose(){
    window.setTimeout(()=>{
      this.setStatus("failed")
    },1)
    
  },
  setScore(score){
    this.score=score
    this.playScoreText.innerText=String(score)
  },
  replay(){
    this.setStatus("start")
  }
};


// 初始化
GAME.init();

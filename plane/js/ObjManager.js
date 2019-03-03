/**
 * 游戏物体管理器
 */
var ObjManager={
    player:null,
    enemys:[],
    bullets:[],
    booms:[],
    add:function(obj){
      switch(obj.tag){
        case "player":
          this.player=obj
        break;
        case "enemy":
          this.enemys.push(obj)
        break;
        case "bullet":
          this.bullets.push(obj)
        break;
        case "boom":
          this.booms.push(obj)
        break;
      }
    },
    remove:function(obj){
      switch(obj.tag){
        case "player":
          this.player=null
        break;
        case "enemy":
          var index=this.enemys.indexOf(obj)
          if(index>-1){
            this.enemys.splice(index,1)
          }
        break;
        case "bullet":
          var index=this.bullets.indexOf(obj)
          if(index>-1){
            this.bullets.splice(index,1)
          }
        break;
        case "boom":
          var index=this.booms.indexOf(obj)
          if(index>-1){
            this.booms.splice(index,1)
          }
        break;
      }
    },
    removeAll:function(){
      this.player=null
      this.enemys=[]
      this.bullets=[]
      this.booms=[]
    }
  }
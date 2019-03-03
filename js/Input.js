/**
 * 按键管理
 */
var Input={
    keyMap:null,
    keys:{
    },
    init:function(){
      //初始化按键信息
      this.keyMap=CONFIG.keyMap
      for(var key in this.keyMap){
        this.keys[this.keyMap[key]]=false
      }
      //绑定事件
      this.bindEvent()
    },
    bindEvent(){
      //按下
      window.addEventListener("keydown",(e)=>{
        var keyCode=String(e.keyCode)
        if(this.keyMap.hasOwnProperty(keyCode)){
          var key=this.keyMap[keyCode]
          this.keys[key]=true
        }
      })
      //松开
      window.addEventListener("keyup",(e)=>{
        var keyCode=String(e.keyCode)
        if(this.keyMap.hasOwnProperty(keyCode)){
          var key=this.keyMap[keyCode]
          this.keys[key]=false
        }
      })
    },
    /**
     * 检测某个按键是否按下
     * @param {string} key 
     */
    isKey(key){
      if(!this.keys.hasOwnProperty(key)){
        console.log("没有这个按键")
        return false
      }
      return this.keys[key]
    }
  }
  Input.init()
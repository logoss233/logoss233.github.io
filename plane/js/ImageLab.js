var ImageLab={
    init:function(){
      var conf=CONFIG
      this.planeImg=new Image()
      this.planeImg.src=conf.planeIcon
      this.enemyImg=new Image()
      this.enemyImg.src=conf.enemyIcon
      this.enemyBoomImg=new Image()
      this.enemyBoomImg.src=conf.enemyBoomIcon
    },
  }
  ImageLab.init()
var GameMain=function(){function a(){Laya.MiniAdpter.init(!0,!1),Laya.init(Cof.DesinWidth,Cof.DesinHeight,WebGL),Laya.stage.alignH=Laya.Stage.ALIGN_LEFT,Laya.stage.alignV=Laya.Stage.ALIGN_TOP,Laya.stage.bgColor="#232628",Laya.Browser.onMiniGame?Laya.stage.scaleMode="noscale":Laya.stage.scaleMode=Stage.SCALE_SHOWALL,Laya.stage.screenMode=Stage.SCREEN_HORIZONTAL,Laya.Browser.onMiniGame&&Laya.timer.once(1e3,this,function(){var a=Laya.Browser.window.wx,s=Laya.Browser.window.sharedCanvas;s.width=Laya.stage.width,s.height=Laya.stage.height,a.postMessage({type:"resizeShared",url:"",data:{width:Laya.stage.width,height:Laya.stage.height,matrix:Laya.stage._canvasTransform},isLoad:!1})}),this.loadBg()}return a.prototype.loadBg=function(){Laya.loader.load(["BG.jpg"],Handler.create(this,this.loadAsset))},a.prototype.loadAsset=function(){this.bg=new Laya.Sprite,this.bg.loadImage("BG.jpg"),Laya.stage.addChild(this.bg),this.text=new Laya.Text,this.text.fontSize=30,Laya.stage.addChild(this.text),this.text.text="loading 0%",this.text.pos(Laya.stage.width/2,Laya.stage.height/2);Laya.loader.load(["res/atlas/item.atlas","res/atlas/panda.atlas","res/atlas/comp.atlas","res/atlas/comp.atlas","res/atlas/ui.atlas","PlayerAnimation.ani","CoinAnimation.ani","ShieldAnimation.ani","MagnentAnimation.ani","EatEffectAnimation.ani","res/map/0-0.json","res/map/0-1.json","res/map/0-2.json","res/map/0-3.json","res/map/0-4.json","res/map/0-5.json","res/map/0-6.json","res/map/0-7.json","res/map/1-0.json","res/map/1-1.json","res/map/1-2.json","res/map/1-3.json","res/map/1-4.json","res/map/1-5.json","res/map/1-6.json","res/map/1-7.json","res/map/1-8.json","res/map/1-9.json","res/map/2-0.json","res/map/2-1.json","res/map/2-2.json","res/map/2-3.json","res/map/2-4.json","res/map/2-5.json","res/map/2-6.json","res/map/2-7.json","res/map/2-8.json","res/map/3-0.json","res/map/3-1.json","res/map/3-2.json","res/map/3-3.json","res/map/3-4.json","res/map/3-5.json","res/map/3-6.json","res/map/3-7.json","res/map/3-8.json","res/map/3-9.json","res/map/3-10.json","res/map/3-11.json","res/map/4-0.json","res/map/4-1.json","res/map/4-2.json","res/map/4-3.json","res/map/4-4.json","res/map/4-5.json","res/map/4-6.json","res/map/4-7.json","res/map/4-8.json"],Laya.Handler.create(this,this.onLoadComplete),new Laya.Handler(this,this.loadProcess))},a.prototype.loadProcess=function(a){this.text.text="loading "+Math.floor(100*a)+"%"},a.prototype.onLoadComplete=function(){this.bg.destroy(),this.text.destroy(),new GameData,new MusicManager;for(a=0;a<30;a++){s=new Floor;Pool.recover("Floor",s)}for(a=0;a<10;a++){s=new Ball1;Pool.recover("Ball1",s)}for(a=0;a<10;a++){s=new Ball2;Pool.recover("Ball2",s)}for(a=0;a<20;a++){s=new Coin;Pool.recover("Coin",s)}for(var a=0;a<10;a++){var s=new Stab;Pool.recover("Stab",s)}new Main},a}();new GameMain;
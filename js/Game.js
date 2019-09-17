!function () {
	window.Game = function () {
		this.canvas  = document.getElementById("box");
		this.ctx     = this.canvas.getContext("2d");
		this.audios  = document.getElementById("background1");
		this.audios2 = document.getElementById("background2");
		this.gameover= document.getElementById("gameover");
		this.wheel   = document.getElementById("wheel");
		this.jingdi  = document.getElementById("jingdi");
		this.guangbo = document.getElementById("guangbo");
		this.w       = 600;
		this.h       = 1071;
		//游戏界面的长度和宽度
		this.canvas.width = this.w;
		this.canvas.height= this.h;
		
		this.background    = new Background();
		this.mycar 		   = new Mycar();
		this.londar();//加载资源
		this.bindEvent();
	}
}()
	//资源的加载
	Game.prototype.londar = function () {
		var self = this;
		this.data = {
			"background":"img/background2.jpg",
			"spirit":"img/spirit.png",
			"mycar":"img/mycar.png",
			"red":"img/red.png",
			"green":"img/green.png"
		}
		var picall = Object.keys(this.data).length;
		var count  = 0;
		for (k in this.data) {
			var src = this.data[k];
			this.data[k] = new Image;
			this.data[k].src = src;
			this.data[k].onload = function () {
				count++;
				if (count == picall) {
					self.begin();
				}
			}
		}	
	}
	//开始游戏
	Game.prototype.begin = function () {
		this.arr = [];
		this.cartime = 0;
		var self = this;
		//发动机，核心控制区
		this.timer = setInterval(function () {
			self.ctx.clearRect(0,0,600,1071);
			self.background.update();
			self.cartime+=10;
			if (self.cartime%2000==0) new Car(); 
			for (var i=0;i<self.arr.length;i++) {
				self.arr[i].update();
			}
			self.mycar.update();
		},20)
	}
	//键盘事件
	Game.prototype.bindEvent = function () {
		var self = this;
	    document.onkeydown = function (event) {
			if (event.keyCode == 37) {
				self.mycar.move = "left";
				self.wheel.play();
			}else if (event.keyCode == 39) {
				self.mycar.move = "right";
				self.wheel.play();
			}else if (event.keyCode == 38) {
				self.mycar.move = "top";
			}else if (event.keyCode == 40) {
				self.mycar.move = "bottom";
			}else if (event.keyCode == 65) {
				self.guangbo.play();
				self.audios.play();
				self.audios2.play();
				self.audios2.volume = 0.3;
			}else if (event.keyCode == 32) {
				self.jingdi.play();
			}
		}
	}
	



























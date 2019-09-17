!function () {
	window.Car = function () {
		
		this.spirit_w = [0,128];  //赛车图的横向位置点
		this.spirit_h = [0,160,320];//赛车图的纵向位置点
		this.random_w = _.random(0,1);//随机横向赛车位置
		this.random_h = _.random(0,2);//随机纵向赛车位置
		this.car_x    = this.spirit_w[this.random_w];//小车在X轴随机出现的位置
		this.car_y    = this.spirit_h[this.random_h];//小车在Y轴随机出现的位置
		this.x = _.random(76,420);//将小车出现的位置控制在道路上
		this.w = 128;//小车的宽度
		this.h = 160;//小车的长度
		this.idx = 0;//控制赛车车速
		this.shift = 0;//赛车左右碰撞
		this.shift1 = 3;//赛车左右碰撞
		game.arr.push(this);
	}
}()

	Car.prototype.update = function () {
		this.idx    += 3;
		this.shift  += this.shift1;
		//控制赛车在地图中的运动位置
		if (this.x+this.shift > 400) this.shift1 = -3; 
		if (this.x+this.shift < 76)  this.shift1 = 3;
		//赛车背景图控制
		game.ctx.drawImage(game.data["spirit"],this.car_x,this.car_y,this.w,this.h,this.x+this.shift,-this.h+this.idx,this.w,this.h);
		//碰撞参数
		this.x1 = this.x+this.shift;
		this.x2 = this.x+this.shift+this.w;
		this.y1 = -this.h+this.idx;
		this.y2 = -this.h+this.idx+this.h;
		//碰撞判断条件
		if (game.mycar.x1<this.x2&&game.mycar.y1<this.y2&&game.mycar.y1>this.y1&&game.mycar.x2>this.x1&&game.mycar.x2>this.x1||
			game.mycar.x1<this.x2&&game.mycar.y2<this.y2&&game.mycar.x2>this.x1&&game.mycar.y2>this.y1&&game.mycar.y2<this.y2) {
			//当以上条件成立时停止定时器
			clearInterval(game.timer);
			//声音，音效的停止，以及游戏碰撞结束提示音
			game.gameover.play();
			game.audios.pause();
			game.audios2.pause();
			game.wheel.pause();
			game.jingdi.pause();
			game.guangbo.pause();
		}
	}
	









!function () {
	window.Mycar = function () {
		this.w = 106;//运钞车的宽度
		this.h = 235;//运钞车的长度
		this.move = null;//键盘信息转换介质
		this.crosswise = 255;//运钞车初始横向位置
		this.lengthways= 400;//运钞车初始纵向位置
	}
}()
	
	Mycar.prototype.update = function () {
		//键盘事件执行
		if (this.move  == "left") {
			this.crosswise  -= 10;
			if (this.crosswise < 85) this.crosswise = 85;
		}else if(this.move  == "right"){
			this.crosswise  += 10;
			if (this.crosswise > 420) this.crosswise = 420;
		}else if(this.move  == "top"){
			this.lengthways -= 10;
			if (this.lengthways < 0) this.lengthways = 0;
		}else if(this.move  == "bottom"){
			this.lengthways += 10;
			if (this.lengthways > 836) this.lengthways = 836;
		}
		//运钞车背景图控制
		game.ctx.drawImage(game.data["mycar"],11,11,this.w,this.h,this.crosswise,this.lengthways,this.w,this.h);
		//碰撞参数
		this.x1 = this.crosswise;
		this.x2 = this.crosswise + this.w;
		this.y1 = this.lengthways;
		this.y2 = this.lengthways+ this.h;
	}
	

!function () {
	window.Background = function () {
		this.w = 600;
		this.h = 1071;
		this.idx = 0; 
	}
}()
	Background.prototype.update = function () {
		this.idx += 20;
		this.idx = this.idx > this.h ? 0 : this.idx;
		game.ctx.drawImage(game.data["background"],0,+this.idx);
		game.ctx.drawImage(game.data["background"],0,-this.h+this.idx);
	}







HUD = function(hp, money)
{
	this.indent = 6;

	this.lifes = [];
	for (var i = 0; i < hp; ++i)
		this.addHP();

	this.moneyText = game.add.text(16, 40, 'DONATES: ' + money, 
		{ 
		    font: 'Arial Black',
    	    fontSize: 14,
    		fontWeight: 'bold',
		});
	this.moneyText.fixedToCamera = true;
}

HUD.prototype.addHP = function() 
{
	var x = (this.lifes.length + 1) * (16 + this.indent);
	var life = game.add.sprite(x, 5, 'mandat');
	life.fixedToCamera = true;

	this.lifes.push(life);
};

HUD.prototype.update = function() 
{
	for (var i = 0; i < this.lifes.length; ++i)
		this.lifes[i].bringToTop();
};

HUD.prototype.removeHP = function() 
{
	var last = this.lifes.length - 1;
	var live = this.lifes[last];

	live.kill();

	this.lifes.splice(last);
};

HUD.prototype.updateScore = function()
{
	this.moneyText.setText('DONATES: ' + score);
}
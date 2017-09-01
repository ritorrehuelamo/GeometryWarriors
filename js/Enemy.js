function Enemy (x, y, i){
	Positionable.call(this, x, y)
	this.id = i
	this.enemy = $('<div>').attr({class: 'enemy', id: this.id})
		.css({
			top: this.y,
			left: this.x,
			position: 'absolute'
		})
		$('#board').append(this.enemy)
}

Enemy.prototype = Object.create(Positionable.prototype)
Enemy.prototype.constructor = Enemy

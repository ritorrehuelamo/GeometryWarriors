function Bullet (x, y) {
	Positionable.call(this, x, y)
	this.speed = Math.random() * 50 + 20
	this.bullet = $('<div>').addClass('shot')
		.css({
			top: this.y,
			left: this.x,
			position: 'absolute'
		})
	$('#board').append(this.bullet)
}

Bullet.prototype = Object.create(Positionable.prototype)
Bullet.prototype.constructor = Bullet

Bullet.prototype.update = function () {
	this.x += this.speed
	this.bullet.css({
		top: this.y,
		left: this.x
	})
}

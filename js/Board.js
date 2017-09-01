function Board(x, y){
	Positionable.call(this, x, y)
	this.score = $('<div>').addClass('score')
	this.score.css({
		top: '125px',
		lef: '125px',
		position: 'absolute'
	})
	$('#board').append(this.score)
}


Board.prototype = Object.create(Positionable.prototype)
Board.prototype.constructor = Board

Board.prototype.boardMove = function () {
	$('.score').css('left', (this.x + 200))
	$('#board').css('left', (this.x * (-1)))
}

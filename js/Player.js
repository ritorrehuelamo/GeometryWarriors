function Player(x, y) {
  Positionable.call(this, x, y)
  this.score = 0
  this.player = $('<div>').attr('id', 'player')
    .css({
      top: this.y,
      left: this.x,
      position: 'absolute'
    })
  $('#board').append(this.player)
  this.direction = 'left'
}

Player.prototype = Object.create(Positionable.prototype)
Player.prototype.constructor = Player

Player.prototype.moveLeft = function() {
  this.direction = 'left'
  this.x = parseInt($('#player').css('left'))
  if (this.x >= -10) {
    this.x += 10
  }
  $('#player').css('left', this.x)
}

Player.prototype.moveRight = function() {
  this.direction = 'right'
  this.x = parseInt($('#player').css('left'))
  if (this.x >= -10) this.x -= 10
  $('#player').css('left', this.x)
}

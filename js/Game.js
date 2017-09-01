$(document).ready(function() {
  var player = new Player(300, 400)
  var board = new Board(player.x, player.y)
	var keys = {},
    bullets = [],
    fps = 30,
		score

  setInterval(update, 1000 / fps)


  $(document).keydown(key => keys[key.keyCode] = true)
    .keyup(key => delete keys[key.keyCode])

  function checkControls() {
    if (keys[68]) player.moveLeft()
    else if (keys[65]) player.moveRight()
    else if (keys[32]) shotPlayer()
  }

  function shotPlayer() {
    bullets.push(new Bullet(player.x, player.y))
  }

  var desiredNumberOfMonsters = 1;
  var monsters = []

  function fillFullMonsters(n) {
    for (var i = 0; i < n; i++) {
	      var x = parseInt(Math.random() * 700 + Math.random() * 3000)
      	monsters.push(new Enemy(x, player.y, 'monster' + i))
    }
  }

  function moveBoardWithPlayer() {
    board.x = player.x
    board.boardMove()
  }

  fillFullMonsters(desiredNumberOfMonsters)

  function shotCollisionToEnemy() {
    monsters.forEach((monster, index) => {

      if (player.score < 10 ) {
				var collision = $('.shot').collision(monster.enemy)
				if (collision[0]) {
	        $('.shot').remove()
	        bullets = []
					$("#" + monster.id).remove()
					fillFullMonsters(desiredNumberOfMonsters)
					monsters.splice(index, 1)
					score = player.score+=1
					console.log(score)
					$('.score').text('SCORE: ' + score)
	      }
      }else{
				$('.score').text('YOU WIN!!!')
			}
    })
  }

  function update() {
    checkControls()
    bullets.forEach(bullet => bullet.update())
    moveBoardWithPlayer()
    shotCollisionToEnemy()
  }

})

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 0 },
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
}

const game = new Phaser.Game(config)

let platforms
let player
let star
let stars
let cursors
let score = 0
let scoreBoard

function preload() {
  this.load.image('sky', 'assets/img/sky.png')
  this.load.image('bomb', 'assets/img/bomb.png')
  this.load.image('ground', 'assets/img/platform.png')
  this.load.image('star', 'assets/img/star.png')

  this.load.spritesheet('character', 'assets/img/dude.png', {
    frameWidth: 32,
    frameHeight: 48,
  })
}

function create() {
  this.add.image(0, 0, 'sky').setOrigin(0, 0)
  //this.add.image(400, 300, 'star').setOrigin(0, 0)

  // Platforms
  platforms = this.physics.add.staticGroup()

  platforms.create(400, 568, 'ground').setScale(2).refreshBody()
  platforms.create(600, 400, 'ground')
  platforms.create(50, 250, 'ground')
  platforms.create(750, 220, 'ground')

  // Player
  player = this.physics.add.sprite(100, 250, 'character')

  player.setBounce(0.75)
  player.setCollideWorldBounds(true)

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  })

  this.anims.create({
    key: 'turn',
    frames: [{ key: 'character', frame: 4 }],
    frameRate: 20,
  })

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('character', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  })

  player.anims.play('turn', true)

  // star
  // star = this.physics.add.sprite(100, 50, 'star')
  // star.setBounce(0.5)
  // star.setCollideWorldBounds(true)

  //multiple stars
  stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: {
      x: 12,
      y: 0,
      stepX: 70,
    },
  })

  stars.children.iterate(function (child) {
    const randY = Phaser.Math.FloatBetween(0.4, 0.8)
    child.setBounceY(randY)
    //child.setCollideWorldBounds(true)
  })

  scoreBoard = this.add.text(16, 16, 'SCORE:0', {
    fontsize: '32 px',
    fill: '#000',
  })

  //collison
  this.physics.add.collider(player, platforms)
  this.physics.add.collider(stars, platforms)
  // this.physics.add.collider(star, platforms)

  this.physics.add.overlap(stars, player, collectStar, null, this)

  //keyboard
  cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  //check if users presses arrow keys
  //then move, and play animation
  if (cursors.left.isDown) {
    player.setVelocityX(-100)
    player.anims.play('left', true)
  } else if (cursors.right.isDown) {
    player.setVelocityX(100)
    player.anims.play('right', true)
  } else {
    player.setVelocityX(0)
    player.anims.play('turn', true)
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330)
  }

  // if (cursors.shift.isDown) {
  //   star.setVelocityY(-50)
  // }
}
function collectStar(player, star) {
  star.destroy()
  score += 1
  scoreBoard.setText(`SCORE: ${score}`)
  // console.log('Star overlapped player', score)
}

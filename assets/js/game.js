const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 100 },
      debug: true
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
}

var game = new Phaser.Game(config)

let platforms
let player

function preload() {
  this.load.image('sky', 'assets/img/sky.png')
  this.load.image('bomb', 'assets/img/bomb.png')
  this.load.image('ground', 'assets/img/platform.png')
  this.load.image('star', 'assets/img/star.png')

  this.load.spritesheet('character','assets/img/dude.png',{
  frameWidth: 32,
  frameHeight: 48,
  })
}

function create() {
  this.add.image(0, 0, 'sky').setOrigin(0, 0)
  this.add.image(400, 300, 'star').setOrigin(0, 0)

  // Platforms
  platforms = this.physics.add.staticGroup()

  platforms.create(400, 568, 'ground').setScale(2).refreshBody()
  platforms.create(600, 400, 'ground')
  platforms.create(50, 250, 'ground')
  platforms.create(750, 220, 'ground')

  // Player
  player = this.physics.add. sprite(100, 150, 'character')

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
}

function update() {}


import FrogSprite from '../objects/FrogSprite'
import FireflySprite from '../objects/FireflySprite'
import LightSprite from '../objects/LightSprite'
// import { ObjectFlags } from 'typescript'

export default class LevelOneScene extends Phaser.Scene {
  frog!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  score = 0
  scoreUI!: Phaser.GameObjects.Text

  frog1!: FrogSprite
  frog2!: FrogSprite
  firefly!: FireflySprite
  light1!: LightSprite
  light2!: LightSprite
  lightGroup!: Phaser.Physics.Arcade.Group

  constructor() {
    super({ key: 'LevelOneScene' })
  }
  preload() {}

  create() {
    //bg image
    this.add.image(0, 0, 'forest').setOrigin(0.0)

    //frog
    // this.frog = this.physics.add.sprite(500, 620, 'frog')
    this.frog1 = new FrogSprite(this, 200, 480).setScale(1 / 2).refreshBody()
    this.frog2 = new FrogSprite(this, 700, 550).setScale(1 / 2).refreshBody()

    // something happens
    this.frog1.prey()
    this.frog2.prey()

    //firefly
    this.firefly = new FireflySprite(this, 20, 400)
      .setScale(1 / 2)
      .refreshBody()
    this.firefly.fly()

    // this.light.hit()

    // this.add.sprite(500, 620).play('walk')

    // this.anims.create({
    //   key: 'move',
    //   frames: 'frog',
    //   frameRate: 12,
    //   repeat: -1,
    // })

    // //firefly
    // this.player = this.physics.add.sprite(100, 250, 'firefly')

    // this.anims.create({
    //   key: 'left',
    //   frames: this.anims.generateFrameNumbers('firefly', {
    //     start: 0,
    //     end: 3,
    //   }),
    //   frameRate: 10,
    //   repeat: -1,
    // })
    // this.player.anims.play('turn', true)

    // //lights
    // this.stars = this.physics.add.group({
    //   key: 'light1',
    //   repeat: 3,
    //   setXY: {
    //     x: 12,
    //     y: 0,
    //     stepX: 70,
    //   },
    // })

    // this.physics.add.collider(this.player, this.objects)

    // this.physics.add.overlap(this.player, this.objects, undefined)

    //keyboard
    this.cursors = this.input.keyboard.createCursorKeys()

    //light
    this.lightGroup = this.physics.add.group({
      classType: LightSprite,
    })

    this.lightGroup.get(300, 300, 'round-1')
    this.lightGroup.get(200, 200, 'round-2')

    // this.light1 = new LightSprite(this, 300, 300, 1)
    // this.add.image(300, 300, 'light-round-1').setScale(2 / 3)
    // this.add.image(200, 200, 'light-round-2').setScale(1 / 3)

    //score
    this.scoreUI = this.add.text(32, 32, 'SCORE:0', {
      fontSize: '40px',
      color: '#fff',
      fontFamily: 'Amatic SC',
    })

    //collison
    // this.physics.add.collider(this.firefly, this.lightGroup)

    this.physics.add.overlap(
      this.lightGroup,
      this.firefly,
      this.lightOverlapped,
    )

    this.physics.add.overlap(this.frog1, this.firefly, this.frogOverlapped)

    // this.physics.add.overlap(this.light1, this.firefly, undefined)
    // this.cameras.main.startFollow(this.firefly)
    // this.cameras.main.setZoom(2)
  }

  frogOverlapped(firefly: FireflySprite, frog1: FrogSprite) {
    console.log('YOU LOSE')
  }

  lightOverlapped(firefly: FireflySprite, light: LightSprite) {
    light.destroy()
  }

  update() {
    if (this.cursors.left.isDown) {
      console.log('left is pressed')
      this.firefly.setVelocityX(-100)
    } else if (this.cursors.right.isDown) {
      console.log('right is pressed.')
      this.firefly.setVelocityX(100)
    } else {
      this.firefly.setVelocityX(0)
    }

    if (this.cursors.down.isDown) {
      console.log('down is pressed')
      this.firefly.setVelocityY(100)
    } else if (this.cursors.up.isDown) {
      this.firefly.setVelocityY(-100)
    } else {
      this.firefly.setVelocityY(0)
    }
  }
}

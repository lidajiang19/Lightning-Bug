import FrogSprite from '../objects/FrogSprite'
import FireflySprite from '../objects/FireflySprite'
import LightSprite from '../objects/LightSprite'
// import GameOverScene from './GameOverScene'
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

  create() {
    //bg image
    this.add.image(0, 0, 'forest').setOrigin(0.0)

    //frog
    // this.frog = this.physics.add.sprite(500, 620, 'frog')
    this.frog1 = new FrogSprite(this, 200, 480).setScale(1 / 2).refreshBody()
    this.frog2 = new FrogSprite(this, 800, 550).setScale(1 / 2).refreshBody()

    // something happens
    this.frog1.prey()
    this.frog2.prey()

    //firefly
    this.firefly = new FireflySprite(this, 20, 400)
      .setScale(1 / 2)
      .refreshBody()
    this.firefly.fly()

    //light
    let lights = this.physics.add.group()
    // classType: LightSprite,

    for (let x = 1; x < 4; x++) {
      for (let i = 1; i < 7; i++) {
        let xx = Phaser.Math.Between(0, 1000)
        let yy = Phaser.Math.Between(0, 720)
        this.lightGroup.create(xx, yy, 'light' + i)
      }
    }
    lights.children.iterate((child) => {})

    this.lightGroup.get(300, 300, 'round-1')
    this.lightGroup.get(200, 200, 'round-2')

    //collison

    this.physics.add.overlap(
      lights.children.entries,
      this.firefly,
      this.collectLights,
    )

    this.physics.add.overlap(this.frog1, this.firefly, this.frogOverlapped)

    //   frogOverlapped(firefly: FireflySprite, frog1: FrogSprite) {
    //   console.log('YOU LOSE')
    // }

    // lightOverlapped(firefly: FireflySprite, lights: LightSprite) {
    //   light.destroy()
    // }

    // this.physics.add.overlap(this.light1, this.firefly, undefined)
    // this.cameras.main.startFollow(this.firefly)
    // this.cameras.main.setZoom(2)

    //keyboard
    this.cursors = this.input.keyboard.createCursorKeys()

    //score
    this.scoreUI = this.add.text(32, 32, 'SCORE:0', {
      fontSize: '40px',
      color: '#fff',
      fontFamily: 'Amatic SC',
    })
  }

  update() {
    //cursors
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

  collectLights(firefly,lights) {
    lights.disableBody(true, true)
    switch (lights.texture.key) {
      case 'light1':
        this.score += 5
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break
      case 'light2':
        this.score += 4
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break
      case 'light3':
        this.score += 4
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break
      case 'light4':
        this.score += 3
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break
      case 'light5':
        this.score += 2
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break
      case 'light6':
        this.score += 1
        this.scoreUI.setText('TOTAL SCORE: ' + this.score)
        break

      default:
        break
    }

    if (this.score === 57) {
      this.scene.start('NicelyDownScene')
    }



  }

  frogOverlapped(firefly, frog){
    firefly.disableBody(true, true)
    this.scene.start('GameOverScene')

  }
}

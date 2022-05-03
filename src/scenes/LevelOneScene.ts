import FrogSprite from '../objects/FrogSprite'
import FireflySprite from '../objects/FireflySprite'
import { MouseConstraint } from 'matter'
import LightSprite from '../objects/LightSprite'
// import LightSprite from '../objects/LightSprite'
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

  // light1!: LightSprite
  // light2!: LightSprite
  // lightGroup!: Phaser.Physics.Arcade.Group

  constructor() {
    super({ key: 'LevelOneScene' })

  }

  create() {
    //bg music
    let music = this.sound.add('bgm')
    music.play()

    //bg image
    this.add.image(0, 0, 'forest').setOrigin(0.0)

    //frog
    // this.frog = this.physics.add.sprite(500, 620, 'frog')
    this.frog1 = new FrogSprite(this, 200, 480).setScale(1 / 2).refreshBody()
    this.frog2 = new FrogSprite(this, 800, 550).setScale(1 / 2).refreshBody()

    // frog prey
    this.frog1.prey()
    this.frog2.prey()

    //firefly
    this.firefly = new FireflySprite(this, 20, 400)
      .setScale(1 / 2)
      .refreshBody()
    // this.firefly.fly()
    this.load.spritesheet('firefly','assets/img/firefly/firefly.png')

    //light
    let lights = this.physics.add.group()
    // classType: LightSprite,
    // this.lights = new LightSprite(this,200,200)
    // this.add.image(200, 200, 'light-round-1').setScale(0.5)
    // var LightSprite = Phaser.Math.FloatBetween(13, 33)





    for (let x = 1; x < 4; x++) {
      for (let i = 1; i < 7; i++) {
        let xx = Phaser.Math.Between(0, 1000)
        let yy = Phaser.Math.Between(0, 720)
        lights.create(xx, yy, 'light' + i).setScale(0.5)
      }
    }
    // lights.children.iterate((child) => {})


    // this.lightGroup.get(300, 300, 'round-1')
    // this.lightGroup.get(200, 200, 'round-2')

    //collison

    this.physics.add.overlap(
      this.firefly,
      lights.children.entries,
      // this.light-round-1,
      this.collectLights,
      null,
      this,
    )

    this.physics.add.overlap(
      this.firefly,
      this.frog1,
      this.frogOverlapped,
      null,
      this,
    )

    this.physics.add.overlap(
      this.firefly,
      this.frog2,
      this.frogOverlapped,
      null,
      this,
    )

    // this.physics.add.overlap(this.frog1, this.firefly, this.frogOverlapped)

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
    lights.destroy()
    switch (lights.texture.key) {
      case 'light-round-1':
        this.score += 5
        this.scoreUI.setText(`TOTAL SCORE: `+this.score)
        break
      case 'light2':
        this.score += 4
        this.scoreUI.setText(`TOTAL SCORE: `+ this.score)
        break
      case 'light3':
        this.score += 4
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light4':
        this.score += 3
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light5':
        this.score += 2
        this.scoreUI.setText(`TOTAL SCORE: `+ this.score)
        break
      case 'light6':
        this.score += 1
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break

      default:
        break;

    }

    if (this.score === 50) {
      this.scene.start('NicelyDownScene')
    }
  }

  frogOverlapped(firefly, frog){
    frog.destroy()
    this.scene.start('GameOverScene')
    // this.scene.start('GameOverScene')

  }
}

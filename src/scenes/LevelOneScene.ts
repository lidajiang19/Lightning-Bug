import FrogSprite from '../objects/FrogSprite'
import FireflySprite from '../objects/FireflySprite'
import { MouseConstraint } from 'matter'
import LightSprite from '../objects/LightSprite'
// import LightSprite from '../objects/LightSprite'
// import GameOverScene from './GameOverScene'
// import { ObjectFlags } from 'typescript'

export default class LevelOneScene extends Phaser.Scene {
  frog!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  firefly1!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
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

    //bg image
    this.add.image(0, 0, 'forest').setOrigin(0.0)

    //frog
    // this.frog = this.physics.add.sprite(500, 620, 'frog')
    this.frog1 = new FrogSprite(this, 200, 480).setScale(1 / 2).refreshBody()
    this.frog2 = new FrogSprite(this, 800, 550).setScale(1 / 2).refreshBody()

    // frogs prey
    this.frog1.prey()
    this.frog2.prey()

    //firefly

    this.firefly = new FireflySprite(this, 20, 400)
      .setScale(0.5)
      .refreshBody()
      .setBounce(0.2)
      .setCollideWorldBounds(true)

    //firefly move
    this.firefly.moveright()
    this.firefly.moveleft()
    this.firefly.moveup()
    this.firefly.movedown()


    //light
    let lights = this.physics.add.group()


    for (let x = 1; x < 7; x++) {
      for (let i = 1; i < 12; i++) {
        let xx = Phaser.Math.Between(0, 1000)
        let yy = Phaser.Math.Between(0, 720)
        lights.create(xx, yy, 'light' + i).setScale(0.75)
      }
    }
    lights.children.iterate((child) => {})



    //collison
    this.physics.add.overlap(
      this.firefly,
      lights.children.entries,
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
      this.firefly.setVelocityX(-130)
      this.firefly.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      console.log('right is pressed.')
      this.firefly.setVelocityX(130)
      this.firefly.anims.play('right', true)
    } else {
      this.firefly.setVelocityX(0)
    }

    if (this.cursors.down.isDown) {
      console.log('down is pressed')
      this.firefly.setVelocityY(130)
      this.firefly.anims.play('down', true)
    } else if (this.cursors.up.isDown) {
      this.firefly.setVelocityY(-130)
      this.firefly.anims.play('up', true)
    } else {
      this.firefly.setVelocityY(0)
    }
  }

  collectLights(firefly, lights) {
    lights.destroy(true,true)
    switch (lights.texture.key) {
      case 'light1':
        this.score += 5
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light2':
        this.score += 4
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
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
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light6':
        this.score += 1
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light7':
        this.score += 6
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light8':
        this.score += 5
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light9':
        this.score += 4
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light10':
        this.score += 3
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break
      case 'light11':
        this.score += 2
        this.scoreUI.setText(`TOTAL SCORE: ` + this.score)
        break

      default:
        break
    }

    // if(lights.countActive(true) == 0){
    //    this.scene.start('NicelyDownScene')
    // }

    if (this.score >= 230) {
      this.scene.start('NicelyDownScene')
    }
  }

  frogOverlapped(firefly, frog) {
    frog.destroy(true,true)
    this.scene.start('GameOverScene')
  
  }
}


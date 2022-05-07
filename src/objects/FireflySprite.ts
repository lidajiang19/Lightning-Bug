export default class FireflySprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'firefly')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.body.setSize(90, 90)

    this._makeAnimations()

    // this.play('firefly')
  }

  moveleft() {
      this.play('left', true)
  }
  moveright(){
      this.play('right', true)
  }
  moveup(){
    this.play('up', true)
  }
  movedown(){
     this.play('down', true)

  }



  _makeAnimations() {

    //
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNames('firefly1', {
        prefix: 'firefly-',
        start: 5,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNames('firefly1', {
        prefix: 'firefly-',
        start: 1,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNames('firefly1', {
        prefix: 'firefly-',
        start: 3,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNames('firefly1', {
        prefix: 'firefly-',
        start: 7,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    })
//



    // this.anims.create({
    //   key:'fly',
    //   frames: this.anims.generateFrameNames('firefly1', {
    //     prefix:'firefly-',
    //     start:1,
    //     end:8,
    //   }),
    //   frameRate:10,
    //   repeat:-1
    // })


  }
}

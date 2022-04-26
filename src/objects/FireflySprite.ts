export default class FireflySprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'firefly')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this._makeAnimations()

    this.play('firefly-still')
  }

  fly(){
      this.play('firefly-move',true)
  }

//   still() {
//     this.play('frog-still', true)
//   }

  _makeAnimations() {
    this.anims.create({
      key: 'firefly-still',
      frames: [{ key: 'firefly', frame: 'firefly-2' }],
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'firefly-move',
      frames: this.anims.generateFrameNames('firefly', {
        prefix: 'firefly-',
        start: 1,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
    })
  }
}

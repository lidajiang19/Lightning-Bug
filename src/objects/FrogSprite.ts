export default class FrogSprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'frog')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.body.setSize(120, 285)

    this._makeAnimations()

    // this.play('frog-still')
  }

  prey() {
    this.play('frog-prey', true)
  }

  //   still() {
  //      this.play('frog-still', true)
  //    }

  _makeAnimations() {
    this.anims.create({
      key: 'frog-still',
      frames: [{ key: 'frog', frame: 'frog-still-10' }],
      frameRate: 5,
      repeat: -1,
    })

    this.anims.create({
      key: 'frog-prey',
      frames: this.anims.generateFrameNames('frog', {
        prefix: 'frog-still-',
        start: 1,
        end: 10,
      }),
      frameRate: 8,
      repeat: -1,
    })
  }
}

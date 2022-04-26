export default class LightSprite extends Phaser.Physics.Arcade.Sprite {
  // points: number

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    type: string = 'round-1',
  ) {
    super(scene, x, y, `light-${type}`)
    // super(scene, x, y, 'light-round-2')

    // this.points = points

    scene.add.existing(this)
    scene.physics.add.existing(this)

    // if (this.points == 1) {
    //   this.play('light-low')
    // } else if (this.points == 5) {
    //   this.play('light-medium')
    // } else if (this.points == 10) {
    //   this.play('light-high')
    // }
  }
}

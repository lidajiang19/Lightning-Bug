export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndGameScene' })
  }
  preload() {}

  create() {
    console.log('EndGameScene')

    // Add background color with phaser
    this.cameras.main.backgroundColor =
      Phaser.Display.Color.HexStringToColor('#00151C')

    const centerX = this.sys.game.canvas.width / 2
    const centerY = this.sys.game.canvas.height / 2

    this.add
      .text(centerX, centerY-20, 'Game Over', {
        fontSize: '80px',
        color: '#fff',
        fontFamily: 'Amatic SC',
      })
      .setOrigin(0.5, 0.5)

      this.load.image(0, 0, 'play-again-button')


    // TODO: Add Game Over text (not as image)
  }
}

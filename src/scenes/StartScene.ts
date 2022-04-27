export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }
  preload() {
    this.load.image('start', 'assets/img/start.png')
    this.load.image('startbutton', 'assets/img/start-button.png')
  }

  create() {
    // bgc color
    Phaser.Display.Color.HexStringToColor('#00151C')
    this.add.image(500, 360, 'start')
    let over = this.add.image(500, 560, 'startbutton').setScale(0.5, 0.5)
    over.setInteractive()
    over.on('pointerdown', () => {
      this.scene.start('LevelOneScene')
    })
  }
}

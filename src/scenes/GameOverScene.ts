export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' })
  }


  preload() {
    this.load.image('over','assets/img/game-over.png')
    this.load.image('again','assets/img/play-again-button.png')
  }

  create() {
   
    //pic button
    // Phaser.Display.Color.HexStringToColor('#00151C')
    this.add.image(500, 360, 'over')
    let playButton = this.add.image(500, 560, 'again').setScale(0.5)

    playButton.setInteractive()

    playButton.on('pointerdown', () => {
      this.scene.start('LevelOneScene')
    })

  }

}

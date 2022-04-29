export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' })
  }


  preload() {
    this.load.image('over','assets/img/game-over.png')
    this.load.image('again','assets/img/play-again-button.png')
  }

  create() {
    // console.log('EndGameScene')

    // Add background color with phaser
    // this.cameras.main.backgroundColor =
    //   Phaser.Display.Color.HexStringToColor('#00151C')

    // const centerX = this.sys.game.canvas.width / 2
    // const centerY = this.sys.game.canvas.height / 2

    // this.add
    //   .text(centerX, centerY-20, 'Game Over', {
    //     fontSize: '80px',
    //     color: '#fff',
    //     fontFamily: 'Amatic SC',
    //   })
    //   .setOrigin(0.5, 0.5)

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

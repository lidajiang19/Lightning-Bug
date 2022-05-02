// import PreloaderScene from "./PreloaderScene"

export default class NicelyDownScene extends Phaser.Scene {
  constructor() {
    super({ key: 'NicelyDownScene' })
  }
  preload() {
    this.load.image('down', 'assets/img/nicely-down.png')
    this.load.image('again', 'assets/img/play-again-button.png')
  }

  create(){
    // Phaser.Display.Color.HexStringToColor('#00151C')

    this.add.image(500, 360, 'down')
    let playButton = this.add.image(500, 560, 'again').setScale(0.5, 0.5)
    playButton.setInteractive()
    playButton.on('pointerdown', () => {
      this.scene.start('LevelOneScene')
    })


    //不可运行
    // this.add.image(500, 360, 'down')
    // let playButton = this.add.image(500, 560, 'again').setScale(0.5)

    // playButton.setInteractive()

    // playButton.on('poninterdown',() => {
    //     this.scene.start('LevelOneScene')
    //   })
    //不可运行
      // this,


  }

}


// create(){
//     this.scene.start('LevelOneScene')

// }




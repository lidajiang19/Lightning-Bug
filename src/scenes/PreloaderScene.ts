export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }
  preload() {
    this.load.image('forest', 'assets/img/forest.png')

    this.load.image('light-round-1', 'assets/img/light-round-1.png')
    this.load.image('light-round-2', 'assets/img/light-round-2.png')
    this.load.image('light-round-3', 'assets/img/light-round-3.png')
    this.load.image('light-round-4', 'assets/img/light-round-4.png')
    this.load.image('light-round-5', 'assets/img/light-round-5.png')
    this.load.image('light-round-6', 'assets/img/light-round-6.png')
    this.load,image('play-again-button','assets/img/play-again-button.png')

    this.load.atlas(
      'frog',
      'assets/img/frog/frog.png',
      'assets/img/frog/frog.json',
    )

    this.load.atlas(
      'firefly',
      'assets/img/firefly/firefly.png',
      'assets/img/firefly/firefly.json',
    )
  }

  create() {
    this.scene.start('LevelOneScene')
  }
}

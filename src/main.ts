import 'phaser'
import GameOverScene from './scenes/GameOverScene'
// import LevelOneScene from './scenes/LevelOneScene'
import StartScene from './scenes/StartScene'
// import PreloaderScene from './scenes/PreloaderScene'

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: true,
    },
  },
  scene: [StartScene],
}
// StartScene, PreloaderScene, LevelOneScene,
new Phaser.Game(config)

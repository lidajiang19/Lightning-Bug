import 'phaser'
import EndGameScene from './scenes/EndGameScene'
import LevelOneScene from './scenes/LevelOneScene'
import LevelTwoScene from './scenes/LevelTwoScene'
import PreloaderScene from './scenes/PreloaderScene'

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
  scene: [EndGameScene],
}
// PreloaderScene, LevelOneScene, LevelTwoScene,
new Phaser.Game(config)

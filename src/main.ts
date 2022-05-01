import 'phaser'
import GameOverScene from './scenes/GameOverScene'
import LevelOneScene from './scenes/LevelOneScene'
import StartScene from './scenes/StartScene'
import PreloaderScene from './scenes/PreloaderScene'
import NicelyDownScene from'./scenes/NicelyDownScene'

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
  scene: [
    PreloaderScene,
    StartScene,
    LevelOneScene,
    NicelyDownScene,
    GameOverScene,
  ],
}

//DO NOT DELETE
// PreloaderScene, StartScene, LevelOneScene,NicelyDownScene,GameOverScene
new Phaser.Game(config)

import PrefabRectangle from "../engine/PrefabRectangle.js";
import Scene from "../engine/Scene.js"
import PlayerUpdate from "./PlayerUpdate.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Generator from "./Generator.js";
import Game from "../engine/Game.js";
import MEnemyGO from "./MEnemyGO.js";
import PlayerSwordUpdate from "./PlayerSwordUpdate.js"

class DungeonScene extends Scene {
   constructor() {
      super("Dungeon");
   }

   start() {
      let player = new PrefabRectangle("player", 0, 0, 20, 20);
      player.components.push(new PlayerUpdate(player));
      player.layer = 0;
      this.gameObjects.push(player);
      //this.gameObjects.push(new PrefabRectangle("obs", 175, 175, 25, 25));
      let GeneratorGO = new PrefabEmpty("GeneratorGO");
      GeneratorGO.components.push(new Generator(GeneratorGO));
      this.gameObjects.push(GeneratorGO);
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));
      this.gameObjects.push(new MEnemyGO("Menemy", 10, 10, 25, 25));

      let playerSword = new PrefabRectangle("Sword", 0, 0, 100, 100);
      playerSword.visible = false;
      playerSword.components.push(new PlayerSwordUpdate(playerSword));
      this.gameObjects.push(playerSword);

   }
}

export default DungeonScene;
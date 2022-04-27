import PrefabRectangle from "../engine/PrefabRectangle.js";
import Scene from "../engine/Scene.js"

class DungeonScene extends Scene {
   constructor() {
      super("Dungeon");
   }

   start() {
      let player = new PrefabRectangle(0, 0, 10, 10);
      player.components.push(new PlayerUpdate(player));
      player.layer = 0;      
      this.gameObjects.push(player);

      

   }

}
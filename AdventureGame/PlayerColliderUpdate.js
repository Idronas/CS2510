import Game from "../engine/Game.js";
import GameObject from "../engine/GameObject.js";

class PlayerColliderUpdate extends GameObject {
   constructor(parent) {
      super(parent);
   }

   update() {
      let player = Game.findByNameOne("player");
      let playerRect = player.getComponent("Rectangle");


   }

}

export default PlayerColliderUpdate;
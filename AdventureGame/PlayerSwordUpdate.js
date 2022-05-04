import Collisions from "../engine/Collisions.js";
import Component from "../engine/Component.js";
import Game from "../engine/Game.js"

class PlayerSwordUpdate extends Component {
   constructor(parent) {
      super(parent);
   }

   update() {

      let enemies = Game.findByName("enemy"); //kill
      for (let enemy of enemies) {
         if (Collisions.inCollision(parent.getComponent("Rectangle"), enemy.getComponent("Rectangle"))) {
            enemy.markForDelete = true;
            console.log("marked " + enemy);
         }
      }
   }

}

export default PlayerSwordUpdate;
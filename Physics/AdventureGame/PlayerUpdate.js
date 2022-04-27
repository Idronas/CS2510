import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Input from "../engine/Input.js";

class PlayerUpdate extends Component {
   
   constructor(parent) {
      super(parent)
   }
   
   playerSpeed = 100;
   diffX = 0;
   diffY = 0;
   
   update() {
      
      let player = Game.findByNameOne("player");
      let playerDraw = player.getComponent("RectangleDraw");

      
      if (Input.getKey("a"))
         this.diffX = -this.playerSpeed;
      if (Input.getKey("d"))
         this.diffX = this.playerSpeed;
      if (Input.getKey("w")) 
         this.diffY = this.playerSpeed;
      if (Input.getKey("s"))
         this.diffY = -this.playerSpeed;
      
      this.parent.x = this.diffX;
      this.parent.y = this.diffY;

      console.log(this.parent.x);
      console.log(this.parent.y);

   }

}

export default PlayerUpdate;
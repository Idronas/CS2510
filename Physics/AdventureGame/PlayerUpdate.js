import Component from "../engine/Component.js";
import Input from "../engine/Input.js";

class PlayerUpdate extends Component {
   
   constructor(parent) {
      super(parent)
   }
   
   playerSpeed = 10;
   diffX = 0;
   diffY = 0;
   
   update() {
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

   }

}
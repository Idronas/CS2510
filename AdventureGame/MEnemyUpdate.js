import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import Time from "../engine/Time.js";

class MEnemyUpdate extends Component {
   constructor(parent) {
      super(parent);    
      this.moveTimer = 0;
      this.diffX = 0;
      this.diffY = 0;
   }

   update() {
      let player = Game.findByNameOne("player");
      let playerRect = player.getComponent("Rectangle");
      let enemRect = this.parent.getComponent("Rectangle");

      this.moveSpeed = 100;
      this.state = 0;

      if (this.state == 0 && this.moveTimer <= 0) {  //move around randomly
         this.moveX = Math.random() - .5;
         this.moveY = Math.random() - .5;

         this.diffX = this.moveSpeed * this.moveX * Time.secondsBetweenFrame;
         this.diffY = this.moveSpeed * this.moveY * Time.secondsBetweenFrame;

      }
      //console.log(this.diffY);
      //console.log(this.diffX);
      
      if (enemRect.y <= -175) {
         this.diffY = -this.diffY;
         enemRect.y = -174;
         console.log("CHANGED");
      }
      if (enemRect.y >= 150) {
         enemRect.y = 149;
         this.diffY = -this.diffY;
         console.log("CHANGED");
      }
      if (enemRect.x <= -175) {
         enemRect.x = -174;
         this.diffX = -this.diffX;
         console.log("CHANGED");
      }
      if (enemRect.x >= 150) {
         enemRect.x = 149;
         this.diffX = -this.diffX;
         console.log("CHANGED");
      }

      enemRect.x += this.diffX;
      enemRect.y += this.diffY;

      if (this.moveTimer <= 0) {
         this.moveTimer = Math.random() * 3;
      } else {
         this.moveTimer -= Time.secondsBetweenFrame;
      }

   }

}

export default MEnemyUpdate;
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Input from "../engine/Input.js";
import Collisions from "../engine/Collisions.js"
import Time from "../engine/Time.js";
import Rectangle from "../engine/Rectangle.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";

class PlayerUpdate extends Component {

   constructor(parent) {
      super(parent)
      this.start();
   }

   start() {
      
      this.playerLastFacingDirection = 0;
      this.playerAttackWaitTimer = 0;
      this.playerSword = null;

   }

   update() {

      let playerGO = Game.findByNameOne("player");
      let playerRect = playerGO.getComponent("Rectangle");
      let playerDraw = playerGO.getComponent("RectangleDraw");
      


      playerDraw.fillStyle = "green";

      this.playerSpeed = 100;
      this.diffX = 0;
      this.diffY = 0;

      if (Input.getKey("a")) {
         this.diffX = -this.playerSpeed * Time.secondsBetweenFrame;
         this.playerLastFacingDirection = "left";
      }
      if (Input.getKey("d")) {
         this.diffX = this.playerSpeed * Time.secondsBetweenFrame;
         this.playerLastFacingDirection = "right";
      }
      if (Input.getKey("w")) {
         this.diffY = -this.playerSpeed * Time.secondsBetweenFrame;
         this.playerLastFacingDirection = "up";
      }
      if (Input.getKey("s")) {
         this.diffY = this.playerSpeed * Time.secondsBetweenFrame;
         this.playerLastFacingDirection = "down";
      }
      if (Input.getKey("1"))
         Game.cameraScale = 1;
      if (Input.getKey("2"))
         Game.cameraScale = 2;
      if (Input.getKey(" ")) {
         if (!playerSword && this.playerAttackWaitTimer <= 0) {
            playerSword = Game.instantiate(new PrefabRectangle("Sword", playerRect.x, playerRect.y, 50, 50));
            playerSwordRect.x = playerRect.x;
            playerSwordRect.y = playerRect.y;
            playerSword.visible = true;
            this.playerAttackWaitTimer = .5;
         } 
      }

      if (this.playerAttackWaitTimer > 0) {
         this.playerAttackWaitTimer -= Time.secondsBetweenFrame;
      } 
      if (this.playerAttackWaitTimer <= 0 && playerSword.visible == true) {
         playerSword.visible = false;
      }


      console.log(this.playerAttackWaitTimer);


      playerRect.x += this.diffX;
      playerRect.y += this.diffY;

   }

}

export default PlayerUpdate;
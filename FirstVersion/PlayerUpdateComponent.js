class PlayerUpdateComponent extends Component {
   constructor(parent) {
      super(parent);
      this.playerX = 0;
      this.playerY = 0;
      this.playerWidth = 100;
      this.playerHeight = 100;
      this.r = 255;
      this.g = 255;
      this.b = 255;
      this.moveSpeed = 10;
   }
   update() {

   }
   keyDown(event) {
      if (event.key === 'a') {
         this.playerX -= this.moveSpeed;
      } else if (event.key === 'd') {
         this.playerX += this.moveSpeed;
      } else if (event.key === 's') {
         this.playerY += this.moveSpeed;
      }  else if (event.key === 'w') {
         this.playerY -= this.moveSpeed;
      }
   }
}
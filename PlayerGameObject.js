
class PlayerGameObject extends GameObject {
   constructor () {
    super();
    this.components.push(new PlayerUpdateComponent(this));
    this.components.push(new PlayerDrawComponent(this));
    this.playerX = 0;
    this.playerY = 0;
    this.playerWidth = 100;
    this.playerHeight = 100;
    this.r = 255;
    this.g = 255;
    this.b = 255;
   }
   
}

class PlayerGameObject extends GameObject {
   constructor() {
      super();
      this.components.push(new PlayerUpdateComponent(this));
      this.components.push(new PlayerDrawComponent(this));
   }
   update() {
      this.components.filter(c => c.update).forEach(c => c.update());
   }
   draw() {
      this.components.filter(c => c.draw).forEach(c => c.draw(ctx));
   }
}
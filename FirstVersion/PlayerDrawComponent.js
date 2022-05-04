//https://stackoverflow.com/questions/54994265/is-there-a-way-to-access-superclass-variables-in-subclass-with-javascript

class PlayerDrawComponent extends Component {
   constructor (parent) {
      super(parent);
   }
   draw(ctx) {
      let updateComponent = this.parent.components.find(c=>c instanceof PlayerUpdateComponent);
      
      ctx.fillStyle = `rgb(${255},${255},${255})`
      ctx.strokeStyle = "white";
      ctx.beginPath()
      ctx.rect(
        updateComponent.playerX,
        updateComponent.playerY,
        updateComponent.playerWidth,
        updateComponent.playerHeight
      )
      ctx.fill();
      ctx.stroke();
    }
}
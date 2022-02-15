class PlayerDrawComponent extends Component {
   constructor (parent) {
      super(parent);
   }
   draw(ctx) {
      //let updateComponent = this.parent.components.find(c=>c instanceof PlayerUpdateComponent);
      let drawData = this.parent.color;


      ctx.fillStyle = `rgb(${255},${255},${255})`
      ctx.strokeStyle = "white";
  
      ctx.beginPath()
      ctx.rect(
        super.playerX,
        super.playerY,
        super.playerWidth,
        super.playerHeight
      )
      ctx.fill();
      ctx.stroke();
    }
}
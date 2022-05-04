import GameObject from "../engine/GameObject.js";
import MEnemyUpdate from "./MEnemyUpdate.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class MEenemyGO extends GameObject {
   constructor(name, x, y, w, h) {
      super(name);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.layer = -1;
      this.start();
   }

   start() {
      this.components.push(new Rectangle(this, this.x,this.y,this.w,this.h));
      this.components.push(new RectangleDraw(this, "gray", "transparent"));
      this.components.push(new MEnemyUpdate(this));
   }

}

export default MEenemyGO;
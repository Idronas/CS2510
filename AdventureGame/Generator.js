import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";

class Generator extends Component {
	constructor(parent) {
		super(parent);
		let j = -200;
		for (var i = -200; i < 200; i += 25) {  //draw leftmost walls
			let wallGO = new PrefabRectangle("wall", j, i, 25, 25);
			let wallDraw = wallGO.getComponent("RectangleDraw");
			wallDraw.strokeStyle = "black";
			wallDraw.fillStyle = "brown";
			wallGO.layer = -1;
			console.log(i);
			console.log(j);
			Game.instantiate(wallGO);
		}
		j = 175;
		for (var i = -200; i < 200; i += 25) { //draw rightmost walls
			let wallGO = new PrefabRectangle("wall", j, i, 25, 25);
			let wallDraw = wallGO.getComponent("RectangleDraw");
			wallDraw.strokeStyle = "black";
			wallDraw.fillStyle = "brown";
			wallGO.layer = -1;
			console.log(i);
			console.log(j);
			Game.instantiate(wallGO);
		}
		j = -200;
		for (var i = -200; i < 200; i += 25) { //draw top walls
			let wallGO = new PrefabRectangle("wall", i, j, 25, 25);
			let wallDraw = wallGO.getComponent("RectangleDraw");
			wallDraw.strokeStyle = "black";
			wallDraw.fillStyle = "brown";
			wallGO.layer = -1;
			console.log(i);
			console.log(j);
			Game.instantiate(wallGO);
		}
		j = 175;
		for (var i = -200; i < 200; i += 25) { //draw bottom walls
			let wallGO = new PrefabRectangle("wall", i, j, 25, 25);
			let wallDraw = wallGO.getComponent("RectangleDraw");
			wallDraw.strokeStyle = "black";
			wallDraw.fillStyle = "brown";
			wallGO.layer = -1;
			console.log(i);
			console.log(j);
			Game.instantiate(wallGO);
		}
	}

	start() {

	}

}

export default Generator;
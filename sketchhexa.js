
var cols, rows;
var canvas;

var w = 40;

var offsetX = 50;
var offsetY = 50;

var current;

var grid = [];
var stack = [];

function setup() {
	canvas = createCanvas(800,400);
	canvas.parent('sketch');

	cols = floor(width / w);
	rows = floor(height / w);
	//frameRate(5);

	for(var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i,j);
			grid.push(cell);
		}
	}

	current = grid[0];
}

function draw() {
	background(0, 50, 70);
	angleMode(DEGREES)
	for(var i = 0; i < grid.length; i++) {
  		grid[i].show();
  	}

	current.visited = true;
}






function Cell(i,j) {
	this.i = i;
	this.j = j;
	this.walls = [true, true, true, true, true, true];
	this.visited = false;

	this.show = function () {
		var x = this.i * w;
		var y = this.j * w;
		stroke(255);
		if(this.walls[0]) {
			push();
			rotate(-60);
			line(offsetX + x,		offsetY + y,	offsetX + x + w-10,		offsetY + y);
			pop();
		}
		if(this.walls[1]) {
			push();
			rotate(30*2);
			//rect(-26, -26, 52, 52);
			//line(offsetX + x + w -10,		offsetY + y, offsetX + x,		offsetY + y);
			line(offsetX + x,		offsetY + y,	offsetX + x + w -10,		offsetY + y);
			//line(x + w,	y,	x + w,	y + w);
			pop();
		}
	}

}
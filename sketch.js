
var rows, cols;
var w = 30;
var grid = [];

var current;

var stack = [];

var canvas;

var color;

function setup() {
	canvas = createCanvas(1200, 600);
	canvas.parent('sketch');
	resetSketch();

	var buttonReset = createButton("Reset");
	buttonReset.parent('sketch');
	var buttonColor = createButton("Change color!");
	buttonColor.parent('sketch');

	buttonReset.mousePressed(resetSketch);
	buttonColor.mousePressed(changeColor);

	color = false;

}

function changeColor() {
	color = !color;
}

function resetSketch() {
	cols = floor(width / w);
	rows = floor(height / w);
	//frameRate(20);

	stack = [];
	grid = [];
	for(var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i,j);
			grid.push(cell);
		}
	}

	current = grid[0];
}

function draw() {
  background(44, 119, 152);
  for(var i = 0; i < grid.length; i++) {
  	grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // step 1
  var next = current.checkNeighbors();
  if (next) {
  	next.visited = true;
  	// step 2
  	stack.push(current);
  	// step 3
  	removeWalls(current, next);
  	// step 4
  	current = next;
  } else if (stack.length > 0) {
  	current = stack.pop();
  }
}

function removeWalls(a, b) {
	var diffx = a.i - b.i;
	if(diffx === 1) {
		a.walls[3] = false;
		b.walls[1] = false;
	} else if (diffx === -1) {
		a.walls[1] = false;
		b.walls[3] = false;
	}
	var diffy = a.j - b.j;
	if(diffy === 1) {
		a.walls[0] = false;
		b.walls[2] = false;
	} else if (diffy === -1) {
		a.walls[2] = false;
		b.walls[0] = false;
	}
}

function index(i, j) {
	if(i < 0 || j < 0 || i > cols-1 || j > rows-1) {
		return -1;
	}
	return i + j * cols;
}
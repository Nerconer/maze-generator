function Cell(i,j) {
	this.i = i;
	this.j = j;
	this.walls = [true, true, true, true];
	this.visited = false;

	this.highlight = function () {
		var x = this.i * w;
		var y = this.j * w;
		noStroke();
		fill(0, 255, 0, 100);
		rect(x, y, w, w);
	}

	this.checkNeighbors = function () {
		var neighbors = [];

		var top 	= grid[index(i, j - 1)];
		var right 	= grid[index(i + 1, j)];
		var bottom 	= grid[index(i, j + 1)];
		var left 	= grid[index(i - 1, j)];

		if (top && !top.visited) {
			neighbors.push(top);
		}
		if (right && !right.visited) {
			neighbors.push(right);
		}
		if (bottom && !bottom.visited) {
			neighbors.push(bottom);
		}
		if (left && !left.visited) {
			neighbors.push(left);
		}

		if(neighbors.length > 0) {
			// pick a random neighbor
			var rand = floor(random(0, neighbors.length));
			return neighbors[rand];
		} else {
			return undefined;
		}
	}

	this.show = function () {
		var x = this.i * w;
		var y = this.j * w;

		push();
		if(this.visited) {
			noStroke();
			if(color) {
				if(this.j % 8 == 0)
				fill(136, 37, 136);
				else if(this.j % 8 == 1)
					fill(41, 24, 136);
				else if(this.j % 8 == 2)
					fill(46, 135, 194);
				else if(this.j % 8 == 3)
					fill(60, 140, 10);
				else if(this.j % 8 == 4)
					fill(254, 250, 41);
				else if(this.j % 8 == 5)
					fill(238, 134, 38);
				else if(this.j % 8 == 6)
					fill(230, 46 , 37);
				else if(this.j % 8 == 7)
					fill(230, 72, 134);
				//else fill(84, 206, 141, 100);
			} else {
				fill(84, 206, 141);
			}		
			rect(x, y, w, w);
		}
		pop();

		strokeWeight(2);
		stroke(0);
		if(this.walls[0]) {
			line(x,		y,	x + w,		y);
		}
		if(this.walls[1]) {
			line(x + w,	y,	x + w,	y + w);
		}
		if(this.walls[2]) {
			line(x + w,	y + w,	x,	y + w);
		}
		if(this.walls[3]) {
			line(x,		y + w,	x,		y);
		}
		
	}
}
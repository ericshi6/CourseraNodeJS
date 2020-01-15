var rect = require('./rectangle');
	
	// perimeter: (x,y) => (2*(x+y)),
	// area: (x,y) => (x*y)


function solveRect(l,b) {
	console.log("Solving for rectangle with l = " + l + " and b = " + b);
	//occurs after set timeout
	rect(l,b, (err, rectangle) => {
		if (err) {
			console.log("ERROR: ", err.message);
		}
		else {
			console.log("Area = ", + rectangle.area())
			console.log("Perimeter = ", + rectangle.perimeter())

		}
	});
	console.log("This statement is after the rectangle")
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
// npm install robotjs

var robot = require("robotjs");

function click1(delay) {
	if (typeof delay === 'undefined') {
		delay = 0;
	}
	setTimeout(function() {
		robot.moveMouse(10, 10);
		robot.mouseClick();
		console.log("click 10, 10");
	}, 1000+delay);
}

function click2(delay) {
	setTimeout(function() {
		robot.moveMouse(594, 648);
		robot.mouseClick();
		console.log("click 594, 648");
	}, 1000+delay);
}

var base = 1000;
var delay = 1000;

/*setTimeout(function() {
	click1();
	setTimeout(function() {
		click2();
	}, 5000);
}, 5000);*/

click1();
click2(1000);
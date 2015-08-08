// npm install robotjs

var robot = require("robotjs");

function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        clearTimeout(timerId);
        timerId = setTimeout(callback, remaining);
    };

    this.resume();
}

var timer = new Timer(testClick(), 3000);

function testClick() {
	// Mouse is at x:594 y:648
	robot.moveMouse(594, 648);
	setTimeout(function() {
		console.log("Test click after 1s delay");
	}, 1000);
	setTimeout(function() {
		console.log("Test click after 2s delay");
	}, 2000);
	robot.mouseClick();
}

timer.pause();
timer.resume();
timer.pause();
timer.resume();
timer.pause();
timer.resume();
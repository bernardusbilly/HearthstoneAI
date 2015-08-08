// npm install robotjs

var robot = require("robotjs");

//Get the mouse position, returns an object with x and y. 
var mouse=robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
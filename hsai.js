var robot = require("robotjs");

module.exports = function Player(status, health) {
	// default condition for node.js
	if (typeof health === 'undefined') {
		health = 30;
	}

	this.status = status;
	this.health = health;
	this.cardList = [];
}
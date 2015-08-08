var LogWatcher = require('hearthstone-log-watcher');
var logWatcher = new LogWatcher();
var hdm = require('./hearthstone-data-mining');
 

var player = new Player("FRIENDLY");
var opp = new Player("OPPONENT");

logWatcher.on('zone-change', function (data) {
	console.log("(" + data.cardName + ') has moved to (' + data.team + ') (' + data.zone + ')');
	if (data.zone === 'HAND') {
	  	if (data.team === 'FRIENDLY') {
	  		player.addHand(data.cardName);
	  	} else {
	  		opp.addHand("");
	  	}
	} else if (data.zone === 'DECK') {
		if (data.team === 'FRIENDLY') {
	  		player.removeHand(data.cardName);
	  	} else {
	  		opp.removeHand("");
	  	}
	} else if (data.zone === 'PLAY') {
		if (data.team === 'FRIENDLY') {
	  		player.removeHand(data.cardName);
	  		player.addBoard(data.cardName);
	  	} else {
	  		opp.removeHand("");
			opp.addBoard(data.cardName);
	  	}
	} else if (data.zone === 'GRAVEYARD') {
		if (data.team === 'FRIENDLY') {
	  		var check = player.checkBoard(data.cardName);
	  		if (check == true) {
	  			player.removeBoard(data.cardName);
	  			return;
	  		} else {
	  			player.removeHand(data.cardName);
	  		}
	  	} else {
	  		var check = opp.checkBoard(data.cardName);
	  		if (check == true) {
	  			opp.removeBoard(data.cardName);
	  			return;
	  		} else {
	  			opp.removeHand("");
	  		}
	  	}
	} else if (data.zone === 'PLAY (Hero Power)') {
	  	if (data.team === 'FRIENDLY') {
	  		// player.heroPower(data.cardName);
	  	} else {
	  		// opp.heroPower(data.cardName);
	  	}
	} else if (data.zone === 'PLAY (Hero)') {
		if (data.team === 'FRIENDLY') {
	  		// player.hero(data.cardName);
	  	} else {
	  		// opp.hero(data.cardName);
	  	}
	}
	player.info();
});
 
logWatcher.on('game-over', function(players) {
	console.log("GAME OVER");
	players.forEach(function(player) {
		if (player.status === 'WON') {
			console.log("The Winner is %s", player.name);
		}
	})
	player = new Player("FRIENDLY");
	opp = new Player("OPPONENT");
});

logWatcher.start();

function Player(status, health) {
	// default condition for node.js
	if (typeof health === 'undefined') {
		health = 30;
	}

	this.status = status;
	this.health = health;
	this.hand = [];
	this.board = [];
	this.numCard = 0;

	this.hero = function(heroName) {
		this.hero = heroName;
	}

	this.heroPower = function(heroPower) {
		this.heroPower = heroPower;
	}

	this.addHand = function(cardName) {
		this.hand[this.hand.length] = cardName;
	}

	this.removeHand = function(cardName) {
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i] == cardName) {
				this.hand.splice(i,1);
				return;
			}
		}
	}

	this.checkHand = function(cardName) {
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i] == cardName) {
				return true;
			}
		}
	}

	this.addBoard = function(cardName) {
		this.board[this.board.length] = cardName;
	}

	this.removeBoard = function(cardName) {
		for (var i = 0; i < this.board.length; i++) {
			if (this.board[i] == cardName) {
				this.board.splice(i,1);
				return;
			}
		}
	}

	this.checkBoard = function(cardName) {
		for (var i = 0; i < this.board.length; i++) {
			if (this.board[i] == cardName) {
				return true;
			}
		}
	}

	this.info = function() {
		// prints everything - returns nothing
		console.log("==============");
		for (var i = 0; i < this.board.length; i++) {
			console.log(this.board[i]);
		}
		console.log("==============");
		console.log("Total card: " + this.hand.length);
		for (var i = 0; i < this.hand.length; i++) {
			console.log(this.hand[i]);
		}
		console.log("==============\n\n\n");
	}
}
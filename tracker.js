var LogWatcher = require('hearthstone-log-watcher');

var hlw = new LogWatcher();

hlw.on('game-start', function(players) {
	console.log("GAME START");
	players.forEach(function(player) {
		if (player.team === 'FRIENDLY') {
			console.log("Friendly (local) layer is %s", player.name);
		}
	});
});

hlw.on('zone-change', function(data) {
	console.log("%s has moved to %s %s", data.cardName, data.team, data.zone);
});

hlw.on('game-over', function(players) {
	console.log("GAME OVER");
	players.forEach(function(player) {
		if (player.status === 'WON') {
			console.log("The Winner is %s", player.name);
		}
	})
});

hlw.start();
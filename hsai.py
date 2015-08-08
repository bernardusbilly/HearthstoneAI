"""
Alpha v0.1
Download execjs: https://pypi.python.org/pypi/PyExecJS#downloads
"""

import execjs

if __name__ == '__main__':
	print "Hearthstone AI - Alpha v0.1"
	while (True):
		base = execjs.compile("	var LogWatcher = require('hearthstone-log-watcher');\
								var hlw = new LogWatcher();\
								\
								hlw.on('game-start', function(players) {\
									console.log('GAME START');\
									players.forEach(function(player) {\
										if (player.team === 'FRIENDLY') {\
											console.log('Friendly (local) layer is %s', player.name);\
										}\
									});\
								});\
								\
								hlw.on('zone-change', function(data) {\
									console.log('%s has moved to %s %s', data.cardName, data.team, data.zone);\
								});\
								\
								hlw.on('game-over', function(players) {\
									console.log('GAME OVER');\
									players.forEach(function(player) {\
										if (player.status === 'WON') {\
											console.log('The Winner is %s', player.name);\
										}\
									})\
								});\
								\
								hlw.start();\
							")
	
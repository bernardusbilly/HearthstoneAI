"""
Download execjs: https://pypi.python.org/pypi/PyExecJS#downloads
"""

import execjs

if __name__ == '__main__':
	print "Hearthstone AI - Alpha 0.1"
	ctx = execjs.compile("function add(x, y) \
		{return x + y; }")
	print ctx.call("add", 1, 2)
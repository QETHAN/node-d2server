var cont = '',
	notice = require('./notice.js'),
	util = require('./util.js'),
	appNamePreg = /\{@appName\}/g,
	appPagesPreg = /\{@appPages\}/g;

require('fs').readFile(__dirname+'/src/404.html', function(err, buf){
	if (err) {
		notice.warn('404 file', err);
	} else {
		cont = buf.toString();
	}
});


module.exports = function(appConf, port){
	var pages, name;

	if (appConf && port) {
		var sitePath = appConf.getSitePath(port);
		pages = '';
		name = appConf.name;
		util.eachObject(appConf.HTMLData, function(srcFile, outFiles){
			util.eachObject(outFiles, function(outFile, fileConf){
				pages += '<a href="'+sitePath+fileConf.href+'">'+fileConf.title+'</a>';
			});
		});
	} else {
		name = 'No Project';
		pages = '<no html file>';
	}

	return cont.replace(appNamePreg, name).replace(appPagesPreg, pages);
};
var cache = {
		'conf': require('../conf.js'),
		'mime': require('../mime.js'),
		'util': require('./func/util.js'),
		'notice': require('./func/notice.js')
	},
	modPath = {
		'i2serv': './apps/i2serv.js',
		
		'resHead': './func/resHead.js',
		'mimeTag': './func/mimeTag.js',
		'watchFileCh': './func/watchFileCh.js',

		'proj404': './tpl/proj404.js',
		
		'd2fsJS': './src/d2fs.mod/d2fs.mod.js',
		'favicon': './src/favicon.mod/favicon.mod.js',

		'DRS': './module/DRS/DRS.js',
		'convertCss': './module/convertCss/convertCss.js',
		'dataAPI': './module/dataAPI/dataAPI.js',

		'Cache': './module/Cache/Cache.js',
		'combo': './module/combo/combo.js',
		'export': './module/export/export.js',
		'initProject': './module/initProject/initProj.js',
		'parseHTML': './module/parseHTML/parseHTML.js',
		'parseLess': './module/parseLess/parseLess.js',
		'ProjConfig': './module/ProjConfig/ProjConfig.js',
		'servUtil': './module/servUtil/servUtil.js',
		'wget': './module/wget/wget.js'
	};


module.exports = {
	'conf': cache.conf,
	'mime': cache.mime,
	'util': cache.util,
	'notice': cache.notice,
	'dirname': __dirname,

	'load': function(mod){
		if (!cache[mod]) cache[mod] = require(modPath[mod] || mod);

		return cache[mod];
	}
};
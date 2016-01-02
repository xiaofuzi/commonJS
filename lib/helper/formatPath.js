var path = require('path'),
	rootPath = process.cwd();

var pathFormat = function(pathname){
	if(path.extname(pathname) == ''||pathname[pathname.length-1]=='.'){
		pathname = pathname + '.js';
	}
	return path.join(rootPath, pathname);
}


module.exports = pathFormat;
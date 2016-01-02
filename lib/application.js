var fs = require('fs'),
	pathFormat = require('./helper/formatPath');

/*
* global variable myexports
*/
module.exports = global.myrequire = myrequire;

/*
* params {modName} required mod name
* return {exports} exports mod 
*/


function myrequire(modname){
	var currentPath = __filename || '';
	modname = pathFormat(modname);
	/*
	* cache
	*/
	if(modname in myrequire.cache){
		return myrequire.cache[modname];
	}

	var mod = new Function('myexports, mymodule', fs.readFileSync(modname, 'utf8'));
	var myexports = {},
		mymodule = {
			exports: myexports
		};

	mod(myexports, mymodule);
	myrequire.cache[modname] = mymodule.exports;

	return mymodule.exports;
};

/*
* cache required modules
*/
myrequire.cache = Object.create(null);



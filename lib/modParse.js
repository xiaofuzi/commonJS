/*
* not complete
*/

var path = require('path');
/*
* module meta data
*/

var Meta = {
	modId = null;
	name: 'modname',
	dependencies: [],
	requirePath: '',
	Path: '',
	codeContent: ''
}

function Parse(dirname){
	this.name = '';
	this.dependencies = [];
	this.path = '';

	var initial = function(){
		this.name = path.basename(filename, '.js');
	}
}


var vm = require('vm');

var name = 'xiaofu';
var exp = exports,
	mod = module,
	req = require;
//var func = new Function('req', 'var path = req("path");console.log(module);');

//func(req);
//console.log(this)

// var script = new vm.Script('console.log(name);var path = require("path");console.log(path);');

// script.runInThisContext();
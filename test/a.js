var b_module = myrequire('/test/b'),
	fs = require('fs');

	console.log(fs.readFileSync(process.cwd() + '/test/b.js', 'utf8'));

mymodule.exports = function(){
	b_module();
	console.log('my name is a!');
}
var b_module = myrequire('/test/b');


mymodule.exports = function(){
	b_module();
	console.log('my name is a!');
}
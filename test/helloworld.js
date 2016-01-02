var a_module = myrequire('/test/a');

function hello(){
	a_module();
	console.log('hello world!');
}

mymodule.exports = hello;
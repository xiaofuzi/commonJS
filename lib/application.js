var fs = require('fs'),
    vm = require('./sandbox'),
    pathFormat = require('./helper/formatPath');

/*
 * global variable myrequire
 */
module.exports = global.myrequire = myrequire;

/*
 * params {modName} required mod name
 * return {exports} exports mod 
 */


function myrequire(modname) {
    modname = pathFormat(modname);
    /*
     * cache
     */
    if (modname in myrequire.cache) {
        return myrequire.cache[modname];
    }


    var modScript = fs.readFileSync(modname, 'utf8');
    var myexports = vm.run(modScript);
    myrequire.cache[modname] = myexports;

    return myexports;
};

/*
 * cache required modules
 */
myrequire.cache = Object.create(null);

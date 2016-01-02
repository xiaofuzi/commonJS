var vm = require('vm');

var sandbox = global;

/*context*/
sandbox.require = require;
sandbox.exports = exports;
sandbox.module = module;
sandbox.myexports = {};
sandbox.mymodule = {
    exports: myexports
};

exports.run = function(code){
    var modScript = code;
    vm.createContext(sandbox);
    vm.runInContext(modScript, sandbox);

    return sandbox.mymodule.exports;
}
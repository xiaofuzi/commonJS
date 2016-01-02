var vm = require('vm');

var sandbox = global;

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
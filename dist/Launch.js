"use strict";
exports.__esModule = true;
var server_1 = require("./Server/server");
var Launch = /** @class */ (function () {
    function Launch() {
        this.server = new server_1.Server();
    }
    Launch.prototype.LaunchApp = function () {
        console.log('App Started');
        this.server.createServer();
    };
    return Launch;
}());
new Launch().LaunchApp();
// create ts-config file using tsc --init

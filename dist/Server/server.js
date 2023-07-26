"use strict";
exports.__esModule = true;
exports.Server = void 0;
var http_1 = require("http");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.createServer = function () {
        http_1.createServer(function (req, res) {
            var _a;
            console.log('Got Response fom', (_a = req.url) === null || _a === void 0 ? void 0 : _a.length);
            res.end();
        }).listen(8080);
    };
    return Server;
}());
exports.Server = Server;

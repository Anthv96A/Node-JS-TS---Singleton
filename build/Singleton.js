"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./Logger");
var Singleton = /** @class */ (function () {
    function Singleton() {
        if (!Singleton.instance)
            Singleton.instance = new Logger_1.Logger();
    }
    Singleton.prototype.getLoggerInstance = function () {
        return Singleton.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;

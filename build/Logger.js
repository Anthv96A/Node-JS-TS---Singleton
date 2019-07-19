"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
        this.logs = [];
    }
    Object.defineProperty(Logger.prototype, "count", {
        get: function () {
            return this.logs.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "allLogs", {
        get: function () {
            return this.logs;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.log = function (message) {
        var timestamp = new Date().toISOString();
        this.logs.push({ message: message, timestamp: timestamp });
        console.log(timestamp + " - " + message);
    };
    return Logger;
}());
exports.Logger = Logger;

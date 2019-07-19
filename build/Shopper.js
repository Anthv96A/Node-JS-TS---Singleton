"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var logger = new Singleton_1.Singleton().getLoggerInstance();
var Shopper = /** @class */ (function () {
    function Shopper(name, money) {
        this.name = name;
        this.money = money;
        logger.log("New Shopper: " + name + " has " + money + " in their account.");
    }
    return Shopper;
}());
exports.Shopper = Shopper;

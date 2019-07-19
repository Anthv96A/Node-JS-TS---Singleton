"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton");
var logger = new Singleton_1.Singleton().getLoggerInstance();
var Store = /** @class */ (function () {
    function Store(name, inventory) {
        this.name = name;
        this.inventory = inventory;
        logger.log("New Store: " + this.name + " has " + this.inventory.length + " items in stock.");
    }
    return Store;
}());
exports.Store = Store;

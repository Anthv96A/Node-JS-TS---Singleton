"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shopper_1 = require("./Shopper");
var Store_1 = require("./Store");
var Singleton_1 = require("./Singleton");
var logger = new Singleton_1.Singleton().getLoggerInstance();
logger.log('Initializing app ...');
new Shopper_1.Shopper('anth', 20);
new Store_1.Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
]);
logger.log('Finished config');
console.log(logger.count + " logs total");
logger.allLogs.map(function (l) { return console.log("   " + l.message); });

import { Singleton } from './Singleton';
const logger = new Singleton().getLoggerInstance();

export class Store {
    private readonly name: string;
    private readonly inventory: any[];

    constructor(name: string, inventory: any[]){
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${this.name} has ${this.inventory.length} items in stock.`)
    }
}

import { Singleton } from './Singleton';
const logger = new Singleton().getLoggerInstance();

export class Shopper {
    private readonly name: string;
    private readonly money: number;

    constructor(name: string, money: number){
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }
}

import { Shopper } from './Shopper';
import { Store } from './Store';
import { Singleton } from './Singleton';

const logger = new Singleton().getLoggerInstance();
logger.log('Initializing app ...');

new Shopper('anth', 20);
new Store('Steep and Deep Supplies', [
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
])

logger.log('Finished config');

console.log(`${logger.count} logs total`);
logger.allLogs.map((l: any) => console.log(`   ${l.message}`));
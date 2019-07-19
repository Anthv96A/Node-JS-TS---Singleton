import { LoggerModel } from './LoggerModel';

export class Logger {
    private readonly logs: LoggerModel[];

    constructor(){
        this.logs = [];
    }

    get count(): number{
        return this.logs.length;
    }

    get allLogs(): LoggerModel[]{
        return this.logs;
    }

    log(message: string){
        const timestamp: string = new Date().toISOString();
        this.logs.push({ message: message, timestamp: timestamp});
        console.log(`${timestamp} - ${message}`);
    }
}

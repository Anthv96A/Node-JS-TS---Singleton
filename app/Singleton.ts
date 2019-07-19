import { Logger } from './Logger';

export class Singleton {
    private static instance: Logger;

    constructor(){
        if(!Singleton.instance)
            Singleton.instance = new Logger();
    }

    getLoggerInstance() : Logger{
        return Singleton.instance;
    }
}
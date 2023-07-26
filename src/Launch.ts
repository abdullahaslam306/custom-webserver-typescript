import { Server } from './Server/server';
class Launch{
    private server: Server;
    constructor() {
        this.server = new Server();
    }
    public LaunchApp(){
        console.log('App Started')
        this.server.createServer();
    }
}
 new Launch().LaunchApp();
 // create ts-config file using tsc --init
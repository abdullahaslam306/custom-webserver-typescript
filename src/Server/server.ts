import { createServer, IncomingMessage, ServerResponse }  from 'http';
import { Authorizer } from '../Authorization/Authorizoer';
import { Login } from './LoginHandler';
import { Utils } from './Utils';
export class Server {
    private authorizer : Authorizer = new Authorizer();
    public createServer() {
       createServer(
         async (req :IncomingMessage,res:ServerResponse) =>{
            console.log('Got Response fom',req.url?.length);
            const basePath = Utils.getBasePath(req.url)
            switch (basePath) {
                case "login":
                   await  new Login(req, res, this.authorizer).handlerRequest();
                    break;
            
                default:
                    break;
            }
            res.end();
         }
       ).listen(8080);
    }
}
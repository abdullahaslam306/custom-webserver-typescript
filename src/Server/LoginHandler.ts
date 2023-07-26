import { IncomingMessage, ServerResponse } from 'http'
import { Account, TokenGenerator } from './Model';
export class Login{
    private req :IncomingMessage;
    private res:ServerResponse;
    private tokenGenerator: TokenGenerator;

    public constructor(req: IncomingMessage, res: ServerResponse, tokenGenerator: TokenGenerator) {
        this.req = req;
        this.res = res;
        this.tokenGenerator = tokenGenerator;
    }
    public async handlerRequest() : Promise<void> {
        const body = await this.getRequestBody();
        const sessionToken = await this.tokenGenerator.generateToken(body);
        if(sessionToken) {
            this.res.write("Session Created")
        }
        else{
            this.res.write("Error wrong credentials")

        }
    }
    private async getRequestBody() : Promise<Account> {
        return new Promise((resolve, reject) =>{
            let body = '';
            this.req.on('data',(data:string) =>{
                data+= data;
            });

            this.req.on('end',()=> {
                try {
                    resolve(JSON.parse(body))
                }
                catch(error) {
                    reject(error)
                }
            })
            this.req.on('error',(error:any) => {
                reject(error)
            })
        })
    }
}
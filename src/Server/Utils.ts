import { parse } from 'url'
export class Utils {
    public static getBasePath(url: string | undefined) :string {
        if(url) {
            const parsedUrl = parse(url);
            return parsedUrl.pathname!.split('/')[1]; 
        }else{
            return "";
        }
            
    }

}
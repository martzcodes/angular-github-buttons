import { Http } from '@angular/http';
import 'rxjs/add/operator/share';
export declare class GithubService {
    private http;
    private apiUrl;
    private users;
    constructor(http: Http);
    getUserInfo(username: string): any;
    getRepoInfo(username: string, reponame: string): any;
}

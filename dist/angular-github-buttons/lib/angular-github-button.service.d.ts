import { HttpClient } from '@angular/common/http';
export declare class AngularGithubButtonService {
    private http;
    private apiUrl;
    private users;
    constructor(http: HttpClient);
    getUserInfo(username: string): any;
    getRepoInfo(username: string, reponame: string): any;
}

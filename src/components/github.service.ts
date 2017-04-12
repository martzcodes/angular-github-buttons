import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/share';

class User {
    observable: Observable<any>;
    repos: any = {};
}

@Injectable()
export class GithubService {
    private apiUrl = 'https://api.github.com/';  // URL to web API
    private users: any = {};

    constructor( @Inject(Http) private http: Http) {}

    getUserInfo(username: string) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
        } else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
            }
        }
        return this.users[username].observable;
    }

    getRepoInfo(username: string, reponame: string) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
        } else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
            }
        }
        return this.users[username].repos[reponame];
    }
}
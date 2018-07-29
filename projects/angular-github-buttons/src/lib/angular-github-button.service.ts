import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

class User {
  observable: Observable<any>;
  repos: any = {};
}

@Injectable({
  providedIn: 'root'
})
export class AngularGithubButtonService {
  private apiUrl = 'https://api.github.com/'; // URL to web API
  private users: any = {};

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  getUserInfo(username: string) {
    if (!this.users.hasOwnProperty(username)) {
      this.users[username] = new User();
      this.users[username].observable = this.http
        .get('https://api.github.com/users/' + username)
        .pipe(share());
    } else {
      if (!this.users[username].observable) {
        this.users[username].observable = this.http
          .get('https://api.github.com/users/' + username)
          .pipe(share());
      }
    }
    return this.users[username].observable;
  }

  getRepoInfo(username: string, reponame: string) {
    if (!this.users.hasOwnProperty(username)) {
      this.users[username] = new User();
      this.users[username].repos[reponame] = this.http
        .get('https://api.github.com/repos/' + username + '/' + reponame)
        .pipe(share());
    } else {
      if (!this.users[username].repos.hasOwnProperty(reponame)) {
        this.users[username].repos[reponame] = this.http
          .get('https://api.github.com/repos/' + username + '/' + reponame)
          .pipe(share());
      }
    }
    return this.users[username].repos[reponame];
  }
}

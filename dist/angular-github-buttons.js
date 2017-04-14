import { Component, Inject, Injectable, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/share';

class User {
    constructor() {
        this.repos = {};
    }
}
class GithubService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/';
        this.users = {};
    }
    /**
     * @param {?} username
     * @return {?}
     */
    getUserInfo(username) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
        }
        else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
            }
        }
        return this.users[username].observable;
    }
    /**
     * @param {?} username
     * @param {?} reponame
     * @return {?}
     */
    getRepoInfo(username, reponame) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
        }
        else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
            }
        }
        return this.users[username].repos[reponame];
    }
}
GithubService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GithubService.ctorParameters = () => [
    { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
];

class GithubButton {
    /**
     * @param {?} github
     */
    constructor(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.reponame && this.type !== 'follow') {
            this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
                this.repo = repo.json();
                this.process();
            });
        }
        else if (this.type === 'follow') {
            this.github.getUserInfo(this.username).subscribe(user => {
                this.user = user.json();
                this.process();
            });
        }
    }
    /**
     * @return {?}
     */
    process() {
        switch (this.type) {
            case 'watch':
                this.mainClass += ' github-watchers';
                this.buttonType = 'Watch';
                this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/';
                this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/watchers';
                this.counterNum = this.repo.watchers_count;
                break;
            case 'star':
                this.mainClass += ' github-stargazers';
                this.buttonType = 'Star';
                this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/';
                this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/stargazers';
                this.counterNum = this.repo.stargazers_count;
                break;
            case 'fork':
                this.mainClass += ' github-forks';
                this.buttonType = 'Fork';
                this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/fork';
                this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/network';
                this.counterNum = this.repo.forks_count;
                break;
            case 'follow':
                this.mainClass += ' github-me';
                this.buttonType = 'Follow @' + this.username;
                this.buttonHref = 'https://github.com/' + this.username;
                this.counterHref = 'https://github.com/' + this.username + '/followers';
                this.counterNum = this.user.followers;
                break;
        }
    }
}
GithubButton.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-btn',
                template: `
  <span class="gh-btn-container">
    <span [ngClass]="{'github-btn':size!=='large', 'github-btn-large':size==='large'}" id="github-btn">
      <a class="gh-btn" [ngClass]="mainClass" id="gh-btn" target="_blank" aria-label="" href="{{buttonHref}}">
          <svg *ngIf="type==='follow' && size!=='large'" aria-hidden="true" class="octicon octicon-mark-github" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          <svg *ngIf="type==='watch' && size!=='large'" aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
          <svg *ngIf="type==='star' && size!=='large'" aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          <svg *ngIf="type==='fork' && size!=='large'" aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>

          <svg *ngIf="type==='follow' && size==='large'" aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          <svg *ngIf="type==='watch' && size==='large'" aria-hidden="true" class="octicon octicon-eye" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
          <svg *ngIf="type==='star' && size==='large'" aria-hidden="true" class="octicon octicon-star" height="32" version="1.1" viewBox="0 0 14 16" width="28"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          <svg *ngIf="type==='fork' && size==='large'" aria-hidden="true" class="octicon octicon-repo-forked" height="32" version="1.1" viewBox="0 0 10 16" width="20"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span class="gh-text" id="gh-text">{{buttonType}}</span>
      </a>
    </span>
    <span *ngIf="count==='true'" [ngClass]="{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}">
      <a class="gh-count" id="gh-count" href="{{counterHref}}" target="_blank" aria-label="">{{counterNum | number}}</a>
    </span>
  </span>
`,
                styles: [`
  body {
  padding: 0;
  margin: 0;
  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  overflow: hidden;
}
a {
  color: #24292e;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.gh-btn-container {
  display: block;
  margin-top: 0em;
  position: relative;
}
.octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor
}
.octicon {
    vertical-align: text-bottom
}
.gh-btn-count {
  float: left;
    padding: 3px 10px;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid rgba(27,31,35,0.2);
    border-left: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.gh-btn-count-large {
  float: left;
    padding: 8px 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid rgba(27,31,35,0.2);
    border-left: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.github-btn {
  color: #24292e;
  background-color: #eff3f6;
  background-image: -webkit-linear-gradient(270deg, #fafbfc 0%, #eff3f6 90%);
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  float: left;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 3px 10px;
  font-size: 12px;
  line-height: 20px;
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.github-btn-large {
  color: #24292e;
  background-color: #eff3f6;
  background-image: -webkit-linear-gradient(270deg, #fafbfc 0%, #eff3f6 90%);
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  float: left;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 3px 10px;
  position: relative;
  display: inline-block;
  font-size: 28px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
`]
            },] },
];
/**
 * @nocollapse
 */
GithubButton.ctorParameters = () => [
    { type: GithubService, decorators: [{ type: Inject, args: [GithubService,] },] },
];
GithubButton.propDecorators = {
    'username': [{ type: Input },],
    'reponame': [{ type: Input },],
    'type': [{ type: Input },],
    'count': [{ type: Input },],
    'size': [{ type: Input },],
};

class GithubButtonModule {
}
GithubButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule],
                declarations: [GithubButton],
                exports: [GithubButton],
                providers: [GithubService]
            },] },
];
/**
 * @nocollapse
 */
GithubButtonModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { GithubButtonModule, GithubButton, GithubService as ɵa };

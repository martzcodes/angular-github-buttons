import { Injectable, Inject, NgModule, Component, Input, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class User {
    constructor() {
        this.repos = {};
    }
}
class AngularGithubButtonService {
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
            this.users[username].observable = this.http
                .get('https://api.github.com/users/' + username)
                .pipe(share());
        }
        else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http
                    .get('https://api.github.com/users/' + username)
                    .pipe(share());
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
            this.users[username].repos[reponame] = this.http
                .get('https://api.github.com/repos/' + username + '/' + reponame)
                .pipe(share());
        }
        else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http
                    .get('https://api.github.com/repos/' + username + '/' + reponame)
                    .pipe(share());
            }
        }
        return this.users[username].repos[reponame];
    }
}
AngularGithubButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
AngularGithubButtonService.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Inject, args: [HttpClient,] }] }
];
/** @nocollapse */ AngularGithubButtonService.ngInjectableDef = defineInjectable({ factory: function AngularGithubButtonService_Factory() { return new AngularGithubButtonService(inject(HttpClient)); }, token: AngularGithubButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FollowComponent {
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
        this.github.getUserInfo(this.username).subscribe(user => {
            this.user = user;
            this.counterNum = this.user.followers;
        });
    }
}
FollowComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-follow',
                template: `
<span class="gh-btn-container">
    <span [ngClass]="{'github-btn':size!=='large', 'github-btn-large':size==='large'}" id="github-btn">
      <a class="gh-btn github-me" id="gh-btn" target="_blank" aria-label="" href="https://github.com/{{username}}">
          <svg aria-hidden="true" class="octicon octicon-mark-github" [attr.height]="size==='large' ? 32 : 16" version="1.1" viewBox="0 0 16 16"
              [attr.width]="size==='large' ? 32 : 16"><path fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span class="gh-text" id="gh-text">&nbsp;Follow @{{username}}</span>
      </a>
    </span>
    <span *ngIf="count==='true'" [ngClass]="{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}">
      <a class="gh-count" id="gh-count" href="https://github.com/{{username}}/followers" target="_blank" aria-label="">{{counterNum | number}}</a>
    </span>
  </span>
  `,
                styles: [
                    `
      body {
        padding: 0;
        margin: 0;
        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        overflow: hidden;
      }
      a {
        color: #24292e;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
      .gh-btn-container {
        display: block;
        margin-top: 0em;
        position: relative;
      }
      .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
      }
      .octicon {
        vertical-align: text-bottom;
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
        border: 1px solid rgba(27, 31, 35, 0.2);
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .github-btn {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .github-btn-large {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `
                ]
            },] },
];
/** @nocollapse */
FollowComponent.ctorParameters = () => [
    { type: AngularGithubButtonService }
];
FollowComponent.propDecorators = {
    username: [{ type: Input }],
    reponame: [{ type: Input }],
    count: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ForkComponent {
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
        this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
            this.repo = repo;
            this.counterNum = this.repo.forks_count;
        });
    }
}
ForkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-fork',
                template: `
    <span class="gh-btn-container">
    <span [ngClass]="{'github-btn':size!=='large', 'github-btn-large':size==='large'}" id="github-btn">
      <a class="gh-btn github-forks" id="gh-btn" target="_blank" aria-label="" href="https://github.com/{{username}}/{{reponame}}/fork">
          <svg aria-hidden="true" class="octicon octicon-repo-forked" [attr.height]="size==='large' ? 32 : 16" version="1.1" viewBox="0 0 10 16" [attr.width]="size==='large' ? 20 : 10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span class="gh-text" id="gh-text">&nbsp;Fork</span>
      </a>
    </span>
    <span *ngIf="count==='true'" [ngClass]="{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}">
      <a class="gh-count" id="gh-count" href="https://github.com/{{username}}/{{reponame}}/network" target="_blank" aria-label="">{{counterNum | number}}</a>
    </span>
  </span>
  `,
                styles: [
                    `
      body {
        padding: 0;
        margin: 0;
        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        overflow: hidden;
      }
      a {
        color: #24292e;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
      .gh-btn-container {
        display: block;
        margin-top: 0em;
        position: relative;
      }
      .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
      }
      .octicon {
        vertical-align: text-bottom;
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
        border: 1px solid rgba(27, 31, 35, 0.2);
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .github-btn {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .github-btn-large {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `
                ]
            },] },
];
/** @nocollapse */
ForkComponent.ctorParameters = () => [
    { type: AngularGithubButtonService }
];
ForkComponent.propDecorators = {
    username: [{ type: Input }],
    reponame: [{ type: Input }],
    count: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarComponent {
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
        this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
            this.repo = repo;
            this.counterNum = this.repo.stargazers_count;
        });
    }
}
StarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-star',
                template: `
    <span class="gh-btn-container">
    <span [ngClass]="{'github-btn':size!=='large', 'github-btn-large':size==='large'}" id="github-btn">
      <a class="gh-btn github-stargazers" id="gh-btn" target="_blank" aria-label="" href="https://github.com/{{username}}/{{reponame}}/">
          <svg aria-hidden="true" class="octicon octicon-star" [attr.height]="size==='large' ? 32 : 16" version="1.1" viewBox="0 0 14 16" [attr.width]="size === 'large' ? 28 : 14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
      <span class="gh-text" id="gh-text">&nbsp;Star</span>
      </a>
    </span>
    <span *ngIf="count==='true'" [ngClass]="{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}">
      <a class="gh-count" id="gh-count" href="https://github.com/{{username}}/{{reponame}}/stargazers" target="_blank" aria-label="">{{counterNum | number}}</a>
    </span>
  </span>
  `,
                styles: [
                    `
      body {
        padding: 0;
        margin: 0;
        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        overflow: hidden;
      }
      a {
        color: #24292e;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
      .gh-btn-container {
        display: block;
        margin-top: 0em;
        position: relative;
      }
      .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
      }
      .octicon {
        vertical-align: text-bottom;
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
        border: 1px solid rgba(27, 31, 35, 0.2);
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .github-btn {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .github-btn-large {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `
                ]
            },] },
];
/** @nocollapse */
StarComponent.ctorParameters = () => [
    { type: AngularGithubButtonService }
];
StarComponent.propDecorators = {
    username: [{ type: Input }],
    reponame: [{ type: Input }],
    count: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WatchComponent {
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
        this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
            this.repo = repo;
            this.counterNum = this.repo.watchers_count;
        });
    }
}
WatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-watch',
                template: `
    <span class="gh-btn-container">
    <span [ngClass]="{'github-btn':size!=='large', 'github-btn-large':size==='large'}" id="github-btn">
      <a class="gh-btn github-watchers" id="gh-btn" target="_blank" aria-label="" href="https://github.com/{{username}}/{{reponame}}">
          <svg aria-hidden="true" class="octicon octicon-eye" [attr.height]="size==='large' ? 32 : 16" version="1.1" viewBox="0 0 16 16" [attr.width]="size==='large' ? 32 : 16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
      <span class="gh-text" id="gh-text">&nbsp;Watch</span>
      </a>
    </span>
    <span *ngIf="count==='true'" [ngClass]="{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}">
      <a class="gh-count" id="gh-count" href="https://github.com/{{username}}/{{reponame}}/watchers" target="_blank" aria-label="">{{counterNum | number}}</a>
    </span>
  </span>
  `,
                styles: [
                    `
      body {
        padding: 0;
        margin: 0;
        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        overflow: hidden;
      }
      a {
        color: #24292e;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
      .gh-btn-container {
        display: block;
        margin-top: 0em;
        position: relative;
      }
      .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
      }
      .octicon {
        vertical-align: text-bottom;
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
        border: 1px solid rgba(27, 31, 35, 0.2);
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .github-btn {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .github-btn-large {
        color: #24292e;
        background-color: #eff3f6;
        background-image: -webkit-linear-gradient(
          270deg,
          #fafbfc 0%,
          #eff3f6 90%
        );
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
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `
                ]
            },] },
];
/** @nocollapse */
WatchComponent.ctorParameters = () => [
    { type: AngularGithubButtonService }
];
WatchComponent.propDecorators = {
    username: [{ type: Input }],
    reponame: [{ type: Input }],
    count: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularGithubButtonsModule {
}
AngularGithubButtonsModule.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule, CommonModule],
                declarations: [ForkComponent, FollowComponent, WatchComponent, StarComponent],
                exports: [ForkComponent, FollowComponent, WatchComponent, StarComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AngularGithubButtonService, FollowComponent, ForkComponent, StarComponent, WatchComponent, AngularGithubButtonsModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1naXRodWItYnV0dG9ucy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1naXRodWItYnV0dG9ucy9saWIvYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvbGliL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi9mb3JrL2ZvcmsuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi9zdGFyL3N0YXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvbGliL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNsYXNzIFVzZXIge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIHJlcG9zOiBhbnkgPSB7fTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2Uge1xuICBwcml2YXRlIGFwaVVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tLyc7IC8vIFVSTCB0byB3ZWIgQVBJXG4gIHByaXZhdGUgdXNlcnM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cENsaWVudCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFVzZXJJbmZvKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMudXNlcnMuaGFzT3duUHJvcGVydHkodXNlcm5hbWUpKSB7XG4gICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXSA9IG5ldyBVc2VyKCk7XG4gICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJyArIHVzZXJuYW1lKVxuICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudXNlcnNbdXNlcm5hbWVdLm9ic2VydmFibGUgPSB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB1c2VybmFtZSlcbiAgICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcnNbdXNlcm5hbWVdLm9ic2VydmFibGU7XG4gIH1cblxuICBnZXRSZXBvSW5mbyh1c2VybmFtZTogc3RyaW5nLCByZXBvbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJzLmhhc093blByb3BlcnR5KHVzZXJuYW1lKSkge1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0gPSBuZXcgVXNlcigpO1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0ucmVwb3NbcmVwb25hbWVdID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJyArIHVzZXJuYW1lICsgJy8nICsgcmVwb25hbWUpXG4gICAgICAgIC5waXBlKHNoYXJlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudXNlcnNbdXNlcm5hbWVdLnJlcG9zLmhhc093blByb3BlcnR5KHJlcG9uYW1lKSkge1xuICAgICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXS5yZXBvc1tyZXBvbmFtZV0gPSB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLycgKyB1c2VybmFtZSArICcvJyArIHJlcG9uYW1lKVxuICAgICAgICAgIC5waXBlKHNoYXJlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2Vyc1t1c2VybmFtZV0ucmVwb3NbcmVwb25hbWVdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1mb2xsb3cnLFxuICB0ZW1wbGF0ZTogYFxuPHNwYW4gY2xhc3M9XCJnaC1idG4tY29udGFpbmVyXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieydnaXRodWItYnRuJzpzaXplIT09J2xhcmdlJywgJ2dpdGh1Yi1idG4tbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiIGlkPVwiZ2l0aHViLWJ0blwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1idG4gZ2l0aHViLW1lXCIgaWQ9XCJnaC1idG5cIiB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWxhYmVsPVwiXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX1cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViXCIgW2F0dHIuaGVpZ2h0XT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtGb2xsb3cgQHt7dXNlcm5hbWV9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L2ZvbGxvd2Vyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9sbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdXNlcm5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcmVwb25hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY291bnQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyB1c2VyOiBhbnk7XG4gIHB1YmxpYyByZXBvOiBhbnk7XG4gIHB1YmxpYyBjb3VudGVyTnVtOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnaXRodWI6IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2l0aHViLmdldFVzZXJJbmZvKHRoaXMudXNlcm5hbWUpLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICB0aGlzLmNvdW50ZXJOdW0gPSB0aGlzLnVzZXIuZm9sbG93ZXJzO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1mb3JrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItZm9ya3NcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vZm9ya1wiPlxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJvY3RpY29uIG9jdGljb24tcmVwby1mb3JrZWRcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAgMTZcIiBbYXR0ci53aWR0aF09XCJzaXplPT09J2xhcmdlJyA/IDIwIDogMTBcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO0Zvcms8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiY291bnQ9PT0ndHJ1ZSdcIiBbbmdDbGFzc109XCJ7J2doLWJ0bi1jb3VudCc6c2l6ZSE9PSdsYXJnZScsICdnaC1idG4tY291bnQtbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1jb3VudFwiIGlkPVwiZ2gtY291bnRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vbmV0d29ya1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVzZXJuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcG9uYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBwdWJsaWMgdXNlcjogYW55O1xuICBwdWJsaWMgcmVwbzogYW55O1xuICBwdWJsaWMgY291bnRlck51bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViOiBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdpdGh1Yi5nZXRSZXBvSW5mbyh0aGlzLnVzZXJuYW1lLCB0aGlzLnJlcG9uYW1lKS5zdWJzY3JpYmUocmVwbyA9PiB7XG4gICAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgICAgdGhpcy5jb3VudGVyTnVtID0gdGhpcy5yZXBvLmZvcmtzX2NvdW50O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1zdGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItc3RhcmdhemVyc1wiIGlkPVwiZ2gtYnRuXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS9cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLXN0YXJcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiBbYXR0ci53aWR0aF09XCJzaXplID09PSAnbGFyZ2UnID8gMjggOiAxNFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO1N0YXI8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiY291bnQ9PT0ndHJ1ZSdcIiBbbmdDbGFzc109XCJ7J2doLWJ0bi1jb3VudCc6c2l6ZSE9PSdsYXJnZScsICdnaC1idG4tY291bnQtbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1jb3VudFwiIGlkPVwiZ2gtY291bnRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vc3RhcmdhemVyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVzZXJuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcG9uYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBwdWJsaWMgdXNlcjogYW55O1xuICBwdWJsaWMgcmVwbzogYW55O1xuICBwdWJsaWMgY291bnRlck51bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViOiBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdpdGh1Yi5nZXRSZXBvSW5mbyh0aGlzLnVzZXJuYW1lLCB0aGlzLnJlcG9uYW1lKS5zdWJzY3JpYmUocmVwbyA9PiB7XG4gICAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgICAgdGhpcy5jb3VudGVyTnVtID0gdGhpcy5yZXBvLnN0YXJnYXplcnNfY291bnQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLXdhdGNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItd2F0Y2hlcnNcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX1cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLWV5ZVwiIFthdHRyLmhlaWdodF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIFthdHRyLndpZHRoXT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtXYXRjaDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS93YXRjaGVyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0UmVwb0luZm8odGhpcy51c2VybmFtZSwgdGhpcy5yZXBvbmFtZSkuc3Vic2NyaWJlKHJlcG8gPT4ge1xuICAgICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMucmVwby53YXRjaGVyc19jb3VudDtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ya0NvbXBvbmVudCB9IGZyb20gJy4vZm9yay9mb3JrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2xsb3dDb21wb25lbnQgfSBmcm9tICcuL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFdhdGNoQ29tcG9uZW50IH0gZnJvbSAnLi93YXRjaC93YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhckNvbXBvbmVudCB9IGZyb20gJy4vc3Rhci9zdGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JrQ29tcG9uZW50LCBGb2xsb3dDb21wb25lbnQsIFdhdGNoQ29tcG9uZW50LCBTdGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZvcmtDb21wb25lbnQsIEZvbGxvd0NvbXBvbmVudCwgV2F0Y2hDb21wb25lbnQsIFN0YXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJHaXRodWJCdXR0b25zTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsQUFLQTs7cUJBRWUsRUFBRTs7Q0FDaEI7Ozs7O0lBU0MsWUFBd0MsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtzQkFIdkMseUJBQXlCO3FCQUNyQixFQUFFO0tBRXFDOzs7OztJQUU1RCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcs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
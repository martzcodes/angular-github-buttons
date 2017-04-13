import { Component, Inject, Injectable, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

var GithubService = (function () {
    /**
     * @param {?} http
     */
    function GithubService(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/';
        this.users = {};
    }
    /**
     * @param {?} username
     * @return {?}
     */
    GithubService.prototype.getUserInfo = function (username) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = {};
            this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
        }
        else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
            }
        }
        return this.users[username].observable;
    };
    /**
     * @param {?} username
     * @param {?} reponame
     * @return {?}
     */
    GithubService.prototype.getRepoInfo = function (username, reponame) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = {};
            this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
        }
        else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
            }
        }
        return this.users[username].repos[reponame];
    };
    return GithubService;
}());
GithubService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GithubService.ctorParameters = function () { return [
    { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
]; };

var GithubButton = (function () {
    /**
     * @param {?} github
     */
    function GithubButton(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    GithubButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.reponame && this.type !== 'follow') {
            this.github.getRepoInfo(this.username, this.reponame).subscribe(function (repo) {
                _this.repo = repo.json();
                _this.process();
            });
        }
        else if (this.type === 'follow') {
            this.github.getUserInfo(this.username).subscribe(function (user) {
                _this.user = user.json();
                _this.process();
            });
        }
    };
    /**
     * @return {?}
     */
    GithubButton.prototype.process = function () {
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
    };
    return GithubButton;
}());
GithubButton.decorators = [
    { type: Component, args: [{
                selector: 'ng-gh-btn',
                template: "\n  <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n    <a class=\"gh-btn\" [ngClass]=\"mainClass\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"{{buttonHref}}\">\n        <span class=\"gh-ico\" aria-hidden=\"true\"></span>\n    <span class=\"gh-text\" id=\"gh-text\">{{buttonType}}</span>\n    </a>\n    <a *ngIf=\"count==='true'\" class=\"gh-count\" id=\"gh-count\" href=\"{{counterHref}}\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n  </span>\n",
                styles: ["\n  body {\n  padding: 0;\n  margin: 0;\n  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  overflow: hidden;\n}\n.github-btn {\n  height: 20px;\n  overflow: hidden;\n}\n.gh-btn,\n.gh-count,\n.gh-ico {\n  float: left;\n}\n.gh-btn,\n.gh-count {\n  padding: 2px 5px 2px 4px;\n  color: #333;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.gh-btn {\n  background-color: #eee;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));\n  background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);\n  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);\n  background-repeat: no-repeat;\n  border: 1px solid #d5d5d5;\n}\n.gh-btn:hover,\n.gh-btn:focus {\n  text-decoration: none;\n  background-color: #ddd;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));\n  background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);\n  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);\n  border-color: #ccc;\n}\n.gh-btn:active {\n  background-image: none;\n  background-color: #dcdcdc;\n  border-color: #b5b5b5;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n.gh-ico {\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n.gh-count {\n  position: relative;\n  margin-left: 4px;\n  background-color: #fafafa;\n  border: 1px solid #d4d4d4;\n}\n.gh-count:hover,\n.gh-count:focus {\n  color: #4183C4;\n}\n.gh-count:before,\n.gh-count:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.gh-count:before {\n  top: 50%;\n  left: -3px;\n  margin-top: -4px;\n  border-width: 4px 4px 4px 0;\n  border-right-color: #fafafa;\n}\n.gh-count:after {\n  top: 50%;\n  left: -4px;\n  z-index: -1;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #d4d4d4;\n}\n.github-btn-large {\n  height: 30px;\n}\n.github-btn-large .gh-btn,\n.github-btn-large .gh-count {\n  padding: 3px 10px 3px 8px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px;\n}\n.github-btn-large .gh-ico {\n  width: 20px;\n  height: 20px;\n}\n.github-btn-large .gh-count {\n  margin-left: 6px;\n}\n.github-btn-large .gh-count:before {\n  left: -5px;\n  margin-top: -6px;\n  border-width: 6px 6px 6px 0;\n}\n.github-btn-large .gh-count:after {\n  left: -6px;\n  margin-top: -7px;\n  border-width: 7px 7px 7px 0;\n}\n"]
            },] },
];
/**
 * @nocollapse
 */
GithubButton.ctorParameters = function () { return [
    { type: GithubService, decorators: [{ type: Inject, args: [GithubService,] },] },
]; };
GithubButton.propDecorators = {
    'username': [{ type: Input },],
    'reponame': [{ type: Input },],
    'type': [{ type: Input },],
    'count': [{ type: Input },],
    'size': [{ type: Input },],
};

var GithubButtonModule = (function () {
    function GithubButtonModule() {
    }
    return GithubButtonModule;
}());
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
GithubButtonModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { GithubButtonModule, GithubButton, GithubService as ɵa };

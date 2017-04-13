import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/share';
var User = (function () {
    function User() {
        this.repos = {};
    }
    return User;
}());
function User_tsickle_Closure_declarations() {
    /** @type {?} */
    User.prototype.observable;
    /** @type {?} */
    User.prototype.repos;
}
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
            this.users[username] = new User();
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
            this.users[username] = new User();
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
export { GithubService };
GithubService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GithubService.ctorParameters = function () { return [
    { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
]; };
function GithubService_tsickle_Closure_declarations() {
    /** @type {?} */
    GithubService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    GithubService.ctorParameters;
    /** @type {?} */
    GithubService.prototype.apiUrl;
    /** @type {?} */
    GithubService.prototype.users;
    /** @type {?} */
    GithubService.prototype.http;
}

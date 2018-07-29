(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/angular-github-buttons/fesm5/angular-github-buttons.js":
/*!***************************************************************************************************************!*\
  !*** /Users/mattmartz/Development/github-buttons/dist/angular-github-buttons/fesm5/angular-github-buttons.js ***!
  \***************************************************************************************************************/
/*! exports provided: AngularGithubButtonService, FollowComponent, ForkComponent, StarComponent, WatchComponent, AngularGithubButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularGithubButtonService", function() { return AngularGithubButtonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function() { return FollowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForkComponent", function() { return ForkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return WatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularGithubButtonsModule", function() { return AngularGithubButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var User = /** @class */ (function () {
    function User() {
        this.repos = {};
    }
    return User;
}());
var AngularGithubButtonService = /** @class */ (function () {
    function AngularGithubButtonService(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/';
        this.users = {};
    }
    /**
     * @param {?} username
     * @return {?}
     */
    AngularGithubButtonService.prototype.getUserInfo = /**
     * @param {?} username
     * @return {?}
     */
    function (username) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].observable = this.http
                .get('https://api.github.com/users/' + username)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }
        else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http
                    .get('https://api.github.com/users/' + username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
            }
        }
        return this.users[username].observable;
    };
    /**
     * @param {?} username
     * @param {?} reponame
     * @return {?}
     */
    AngularGithubButtonService.prototype.getRepoInfo = /**
     * @param {?} username
     * @param {?} reponame
     * @return {?}
     */
    function (username, reponame) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].repos[reponame] = this.http
                .get('https://api.github.com/repos/' + username + '/' + reponame)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }
        else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http
                    .get('https://api.github.com/repos/' + username + '/' + reponame)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
            }
        }
        return this.users[username].repos[reponame];
    };
    AngularGithubButtonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularGithubButtonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],] }] }
    ]; };
    /** @nocollapse */ AngularGithubButtonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularGithubButtonService_Factory() { return new AngularGithubButtonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: AngularGithubButtonService, providedIn: "root" });
    return AngularGithubButtonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FollowComponent = /** @class */ (function () {
    function FollowComponent(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    FollowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.github.getUserInfo(this.username).subscribe(function (user) {
            _this.user = user;
            _this.counterNum = _this.user.followers;
        });
    };
    FollowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-gh-follow',
                    template: "\n<span class=\"gh-btn-container\">\n    <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n      <a class=\"gh-btn github-me\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"https://github.com/{{username}}\">\n          <svg aria-hidden=\"true\" class=\"octicon octicon-mark-github\" [attr.height]=\"size==='large' ? 32 : 16\" version=\"1.1\" viewBox=\"0 0 16 16\"\n              [attr.width]=\"size==='large' ? 32 : 16\"><path fill-rule=\"evenodd\"\n              d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>\n      <span class=\"gh-text\" id=\"gh-text\">&nbsp;Follow @{{username}}</span>\n      </a>\n    </span>\n    <span *ngIf=\"count==='true'\" [ngClass]=\"{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}\">\n      <a class=\"gh-count\" id=\"gh-count\" href=\"https://github.com/{{username}}/followers\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n    </span>\n  </span>\n  ",
                    styles: [
                        "\n      body {\n        padding: 0;\n        margin: 0;\n        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        overflow: hidden;\n      }\n      a {\n        color: #24292e;\n        text-decoration: none;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,\n          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n          'Segoe UI Symbol';\n      }\n      .gh-btn-container {\n        display: block;\n        margin-top: 0em;\n        position: relative;\n      }\n      .octicon {\n        display: inline-block;\n        vertical-align: text-top;\n        fill: currentColor;\n      }\n      .octicon {\n        vertical-align: text-bottom;\n      }\n      .gh-btn-count {\n        float: left;\n        padding: 3px 10px;\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .gh-btn-count-large {\n        float: left;\n        padding: 8px 10px;\n        font-size: 24px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .github-btn {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        font-size: 12px;\n        line-height: 20px;\n        position: relative;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .github-btn-large {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        position: relative;\n        display: inline-block;\n        font-size: 28px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    FollowComponent.ctorParameters = function () { return [
        { type: AngularGithubButtonService }
    ]; };
    FollowComponent.propDecorators = {
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reponame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return FollowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ForkComponent = /** @class */ (function () {
    function ForkComponent(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    ForkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.github.getRepoInfo(this.username, this.reponame).subscribe(function (repo) {
            _this.repo = repo;
            _this.counterNum = _this.repo.forks_count;
        });
    };
    ForkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-gh-fork',
                    template: "\n    <span class=\"gh-btn-container\">\n    <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n      <a class=\"gh-btn github-forks\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"https://github.com/{{username}}/{{reponame}}/fork\">\n          <svg aria-hidden=\"true\" class=\"octicon octicon-repo-forked\" [attr.height]=\"size==='large' ? 32 : 16\" version=\"1.1\" viewBox=\"0 0 10 16\" [attr.width]=\"size==='large' ? 20 : 10\"><path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"></path></svg>\n      <span class=\"gh-text\" id=\"gh-text\">&nbsp;Fork</span>\n      </a>\n    </span>\n    <span *ngIf=\"count==='true'\" [ngClass]=\"{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}\">\n      <a class=\"gh-count\" id=\"gh-count\" href=\"https://github.com/{{username}}/{{reponame}}/network\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n    </span>\n  </span>\n  ",
                    styles: [
                        "\n      body {\n        padding: 0;\n        margin: 0;\n        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        overflow: hidden;\n      }\n      a {\n        color: #24292e;\n        text-decoration: none;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,\n          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n          'Segoe UI Symbol';\n      }\n      .gh-btn-container {\n        display: block;\n        margin-top: 0em;\n        position: relative;\n      }\n      .octicon {\n        display: inline-block;\n        vertical-align: text-top;\n        fill: currentColor;\n      }\n      .octicon {\n        vertical-align: text-bottom;\n      }\n      .gh-btn-count {\n        float: left;\n        padding: 3px 10px;\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .gh-btn-count-large {\n        float: left;\n        padding: 8px 10px;\n        font-size: 24px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .github-btn {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        font-size: 12px;\n        line-height: 20px;\n        position: relative;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .github-btn-large {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        position: relative;\n        display: inline-block;\n        font-size: 28px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    ForkComponent.ctorParameters = function () { return [
        { type: AngularGithubButtonService }
    ]; };
    ForkComponent.propDecorators = {
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reponame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ForkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StarComponent = /** @class */ (function () {
    function StarComponent(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    StarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.github.getRepoInfo(this.username, this.reponame).subscribe(function (repo) {
            _this.repo = repo;
            _this.counterNum = _this.repo.stargazers_count;
        });
    };
    StarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-gh-star',
                    template: "\n    <span class=\"gh-btn-container\">\n    <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n      <a class=\"gh-btn github-stargazers\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"https://github.com/{{username}}/{{reponame}}/\">\n          <svg aria-hidden=\"true\" class=\"octicon octicon-star\" [attr.height]=\"size==='large' ? 32 : 16\" version=\"1.1\" viewBox=\"0 0 14 16\" [attr.width]=\"size === 'large' ? 28 : 14\"><path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z\"></path></svg>\n      <span class=\"gh-text\" id=\"gh-text\">&nbsp;Star</span>\n      </a>\n    </span>\n    <span *ngIf=\"count==='true'\" [ngClass]=\"{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}\">\n      <a class=\"gh-count\" id=\"gh-count\" href=\"https://github.com/{{username}}/{{reponame}}/stargazers\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n    </span>\n  </span>\n  ",
                    styles: [
                        "\n      body {\n        padding: 0;\n        margin: 0;\n        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        overflow: hidden;\n      }\n      a {\n        color: #24292e;\n        text-decoration: none;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,\n          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n          'Segoe UI Symbol';\n      }\n      .gh-btn-container {\n        display: block;\n        margin-top: 0em;\n        position: relative;\n      }\n      .octicon {\n        display: inline-block;\n        vertical-align: text-top;\n        fill: currentColor;\n      }\n      .octicon {\n        vertical-align: text-bottom;\n      }\n      .gh-btn-count {\n        float: left;\n        padding: 3px 10px;\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .gh-btn-count-large {\n        float: left;\n        padding: 8px 10px;\n        font-size: 24px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .github-btn {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        font-size: 12px;\n        line-height: 20px;\n        position: relative;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .github-btn-large {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        position: relative;\n        display: inline-block;\n        font-size: 28px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    StarComponent.ctorParameters = function () { return [
        { type: AngularGithubButtonService }
    ]; };
    StarComponent.propDecorators = {
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reponame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return StarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WatchComponent = /** @class */ (function () {
    function WatchComponent(github) {
        this.github = github;
    }
    /**
     * @return {?}
     */
    WatchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.github.getRepoInfo(this.username, this.reponame).subscribe(function (repo) {
            _this.repo = repo;
            _this.counterNum = _this.repo.watchers_count;
        });
    };
    WatchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-gh-watch',
                    template: "\n    <span class=\"gh-btn-container\">\n    <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n      <a class=\"gh-btn github-watchers\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"https://github.com/{{username}}/{{reponame}}\">\n          <svg aria-hidden=\"true\" class=\"octicon octicon-eye\" [attr.height]=\"size==='large' ? 32 : 16\" version=\"1.1\" viewBox=\"0 0 16 16\" [attr.width]=\"size==='large' ? 32 : 16\"><path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"></path></svg>\n      <span class=\"gh-text\" id=\"gh-text\">&nbsp;Watch</span>\n      </a>\n    </span>\n    <span *ngIf=\"count==='true'\" [ngClass]=\"{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}\">\n      <a class=\"gh-count\" id=\"gh-count\" href=\"https://github.com/{{username}}/{{reponame}}/watchers\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n    </span>\n  </span>\n  ",
                    styles: [
                        "\n      body {\n        padding: 0;\n        margin: 0;\n        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        overflow: hidden;\n      }\n      a {\n        color: #24292e;\n        text-decoration: none;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,\n          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n          'Segoe UI Symbol';\n      }\n      .gh-btn-container {\n        display: block;\n        margin-top: 0em;\n        position: relative;\n      }\n      .octicon {\n        display: inline-block;\n        vertical-align: text-top;\n        fill: currentColor;\n      }\n      .octicon {\n        vertical-align: text-bottom;\n      }\n      .gh-btn-count {\n        float: left;\n        padding: 3px 10px;\n        font-size: 12px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .gh-btn-count-large {\n        float: left;\n        padding: 8px 10px;\n        font-size: 24px;\n        font-weight: 600;\n        line-height: 20px;\n        color: #24292e;\n        vertical-align: middle;\n        background-color: #fff;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-left: 0;\n        border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n      }\n      .github-btn {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        font-size: 12px;\n        line-height: 20px;\n        position: relative;\n        display: inline-block;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .github-btn-large {\n        color: #24292e;\n        background-color: #eff3f6;\n        background-image: -webkit-linear-gradient(\n          270deg,\n          #fafbfc 0%,\n          #eff3f6 90%\n        );\n        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n        float: left;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        padding: 3px 10px;\n        position: relative;\n        display: inline-block;\n        font-size: 28px;\n        font-weight: 600;\n        line-height: 20px;\n        white-space: nowrap;\n        vertical-align: middle;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background-repeat: repeat-x;\n        background-position: -1px -1px;\n        background-size: 110% 110%;\n        border: 1px solid rgba(27, 31, 35, 0.2);\n        border-radius: 0.25em;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    WatchComponent.ctorParameters = function () { return [
        { type: AngularGithubButtonService }
    ]; };
    WatchComponent.propDecorators = {
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reponame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return WatchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularGithubButtonsModule = /** @class */ (function () {
    function AngularGithubButtonsModule() {
    }
    AngularGithubButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [ForkComponent, FollowComponent, WatchComponent, StarComponent],
                    exports: [ForkComponent, FollowComponent, WatchComponent, StarComponent]
                },] },
    ];
    return AngularGithubButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1naXRodWItYnV0dG9ucy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1naXRodWItYnV0dG9ucy9saWIvYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvbGliL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi9mb3JrL2ZvcmsuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi9zdGFyL3N0YXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zL2xpYi93YXRjaC93YXRjaC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvbGliL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNsYXNzIFVzZXIge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIHJlcG9zOiBhbnkgPSB7fTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2Uge1xuICBwcml2YXRlIGFwaVVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tLyc7IC8vIFVSTCB0byB3ZWIgQVBJXG4gIHByaXZhdGUgdXNlcnM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cENsaWVudCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFVzZXJJbmZvKHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMudXNlcnMuaGFzT3duUHJvcGVydHkodXNlcm5hbWUpKSB7XG4gICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXSA9IG5ldyBVc2VyKCk7XG4gICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJyArIHVzZXJuYW1lKVxuICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlKSB7XG4gICAgICAgIHRoaXMudXNlcnNbdXNlcm5hbWVdLm9ic2VydmFibGUgPSB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB1c2VybmFtZSlcbiAgICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcnNbdXNlcm5hbWVdLm9ic2VydmFibGU7XG4gIH1cblxuICBnZXRSZXBvSW5mbyh1c2VybmFtZTogc3RyaW5nLCByZXBvbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJzLmhhc093blByb3BlcnR5KHVzZXJuYW1lKSkge1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0gPSBuZXcgVXNlcigpO1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0ucmVwb3NbcmVwb25hbWVdID0gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJyArIHVzZXJuYW1lICsgJy8nICsgcmVwb25hbWUpXG4gICAgICAgIC5waXBlKHNoYXJlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudXNlcnNbdXNlcm5hbWVdLnJlcG9zLmhhc093blByb3BlcnR5KHJlcG9uYW1lKSkge1xuICAgICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXS5yZXBvc1tyZXBvbmFtZV0gPSB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLycgKyB1c2VybmFtZSArICcvJyArIHJlcG9uYW1lKVxuICAgICAgICAgIC5waXBlKHNoYXJlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51c2Vyc1t1c2VybmFtZV0ucmVwb3NbcmVwb25hbWVdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1mb2xsb3cnLFxuICB0ZW1wbGF0ZTogYFxuPHNwYW4gY2xhc3M9XCJnaC1idG4tY29udGFpbmVyXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieydnaXRodWItYnRuJzpzaXplIT09J2xhcmdlJywgJ2dpdGh1Yi1idG4tbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiIGlkPVwiZ2l0aHViLWJ0blwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1idG4gZ2l0aHViLW1lXCIgaWQ9XCJnaC1idG5cIiB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWxhYmVsPVwiXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX1cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViXCIgW2F0dHIuaGVpZ2h0XT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtGb2xsb3cgQHt7dXNlcm5hbWV9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L2ZvbGxvd2Vyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9sbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdXNlcm5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcmVwb25hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY291bnQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyB1c2VyOiBhbnk7XG4gIHB1YmxpYyByZXBvOiBhbnk7XG4gIHB1YmxpYyBjb3VudGVyTnVtOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnaXRodWI6IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2l0aHViLmdldFVzZXJJbmZvKHRoaXMudXNlcm5hbWUpLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICB0aGlzLmNvdW50ZXJOdW0gPSB0aGlzLnVzZXIuZm9sbG93ZXJzO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1mb3JrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItZm9ya3NcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vZm9ya1wiPlxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJvY3RpY29uIG9jdGljb24tcmVwby1mb3JrZWRcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAgMTZcIiBbYXR0ci53aWR0aF09XCJzaXplPT09J2xhcmdlJyA/IDIwIDogMTBcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO0Zvcms8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiY291bnQ9PT0ndHJ1ZSdcIiBbbmdDbGFzc109XCJ7J2doLWJ0bi1jb3VudCc6c2l6ZSE9PSdsYXJnZScsICdnaC1idG4tY291bnQtbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1jb3VudFwiIGlkPVwiZ2gtY291bnRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vbmV0d29ya1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ya0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVzZXJuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcG9uYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBwdWJsaWMgdXNlcjogYW55O1xuICBwdWJsaWMgcmVwbzogYW55O1xuICBwdWJsaWMgY291bnRlck51bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViOiBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdpdGh1Yi5nZXRSZXBvSW5mbyh0aGlzLnVzZXJuYW1lLCB0aGlzLnJlcG9uYW1lKS5zdWJzY3JpYmUocmVwbyA9PiB7XG4gICAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgICAgdGhpcy5jb3VudGVyTnVtID0gdGhpcy5yZXBvLmZvcmtzX2NvdW50O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1naC1zdGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItc3RhcmdhemVyc1wiIGlkPVwiZ2gtYnRuXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS9cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLXN0YXJcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiBbYXR0ci53aWR0aF09XCJzaXplID09PSAnbGFyZ2UnID8gMjggOiAxNFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO1N0YXI8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiY291bnQ9PT0ndHJ1ZSdcIiBbbmdDbGFzc109XCJ7J2doLWJ0bi1jb3VudCc6c2l6ZSE9PSdsYXJnZScsICdnaC1idG4tY291bnQtbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1jb3VudFwiIGlkPVwiZ2gtY291bnRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vc3RhcmdhemVyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVzZXJuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcG9uYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBwdWJsaWMgdXNlcjogYW55O1xuICBwdWJsaWMgcmVwbzogYW55O1xuICBwdWJsaWMgY291bnRlck51bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViOiBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdpdGh1Yi5nZXRSZXBvSW5mbyh0aGlzLnVzZXJuYW1lLCB0aGlzLnJlcG9uYW1lKS5zdWJzY3JpYmUocmVwbyA9PiB7XG4gICAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgICAgdGhpcy5jb3VudGVyTnVtID0gdGhpcy5yZXBvLnN0YXJnYXplcnNfY291bnQ7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLXdhdGNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItd2F0Y2hlcnNcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX1cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLWV5ZVwiIFthdHRyLmhlaWdodF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIFthdHRyLndpZHRoXT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtXYXRjaDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS93YXRjaGVyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0UmVwb0luZm8odGhpcy51c2VybmFtZSwgdGhpcy5yZXBvbmFtZSkuc3Vic2NyaWJlKHJlcG8gPT4ge1xuICAgICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMucmVwby53YXRjaGVyc19jb3VudDtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ya0NvbXBvbmVudCB9IGZyb20gJy4vZm9yay9mb3JrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2xsb3dDb21wb25lbnQgfSBmcm9tICcuL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFdhdGNoQ29tcG9uZW50IH0gZnJvbSAnLi93YXRjaC93YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhckNvbXBvbmVudCB9IGZyb20gJy4vc3Rhci9zdGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JrQ29tcG9uZW50LCBGb2xsb3dDb21wb25lbnQsIFdhdGNoQ29tcG9uZW50LCBTdGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZvcmtDb21wb25lbnQsIEZvbGxvd0NvbXBvbmVudCwgV2F0Y2hDb21wb25lbnQsIFN0YXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJHaXRodWJCdXR0b25zTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsQUFLQSxJQUFBOztxQkFFZSxFQUFFOztlQVBqQjtJQVFDLENBQUE7O0lBU0Msb0NBQXdDLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7c0JBSHZDLHlCQUF5QjtxQkFDckIsRUFBRTtLQUVxQzs7Ozs7SUFFNUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FB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

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Reset\n */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n@media (min-width: 34em) {\n  html {\n    font-size: 18px;\n  }\n}\n\nbody {\n  padding: 1.5rem 1.5rem 3rem;\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n  background-color: #fff;\n}\n\nh1,\nh2 {\n  margin-top: 0;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n}\n\nh1 {\n  margin-bottom: 0.5rem;\n  font-size: 3rem;\n}\n\nh2 {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n}\n\nh3 {\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nh1 + p {\n  font-size: 1.25rem;\n  color: #555;\n}\n\na {\n  color: #08c;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 0.5rem;\n  font-size: 90%;\n  vertical-align: top;\n  border: 1px solid #eee;\n}\n\nth {\n  background-color: #f5f5f5;\n}\n\n.deprecated {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1.6;\n  color: #fff;\n  background-color: #ff4136;\n  border-radius: 0.2rem;\n}\n\n#markdown-toc > li:first-child,\n#markdown-toc > li:last-child {\n  display: none;\n}\n\n/*\n * Code\n */\n\ncode,\npre {\n  font-family: Menlo, 'Courier New', monospace;\n  font-size: 95%;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 85%;\n  color: #d44950;\n  background-color: #f7f7f9;\n  border-radius: 0.2rem;\n}\n\npre {\n  display: block;\n  margin: 0 0 1rem;\n  line-height: 1.4;\n  white-space: pre;\n  white-space: pre-wrap;\n}\n\npre code {\n  padding: 0;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n}\n\n.highlight {\n  margin: 0 0 1rem;\n  padding: 1rem;\n  background-color: #f7f7f9;\n}\n\n.highlight pre {\n  margin-bottom: 0;\n  word-wrap: break-word;\n}\n\n.highlight + .highlight {\n  margin-top: 1rem;\n}\n\n/*\n * Download button\n */\n\n.btn {\n  display: inline-block;\n  padding: 0.5rem 1.25rem;\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);\n  background-color: #3072b3; /* Old browsers */\n  background-repeat: repeat-x; /* Repeat the gradient */ /* Chrome,Safari4+ */ /* Chrome 10+,Safari 5.1+ */ /* FF3.6+ */ /* IE10+ */\n  background-image: -o-linear-gradient(\n    top,\n    #599bdc 0,\n    #3072b3 100%\n  ); /* Opera 11.10+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#599bdc', endColorstr='#3072b3', GradientType=0); /* IE6-9 */\n  border: 1px solid #2967a4;\n  border-radius: 6px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  transition: none;\n}\n\n.btn:hover {\n  text-decoration: none;\n  background-position: 0 -15px;\n}\n\n.btn:active {\n  background-image: none;\n  background-color: #3072b3; /* Old browsers */\n  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.125),\n    0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n/*\n * Masthead\n */\n\n.tweet-button {\n  margin: 0 0 1rem;\n}\n\n.tweet-button + p {\n  color: #999;\n}\n\n/*\n * Grid and columns\n */\n\n.container {\n  min-width: 32rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/*\n * Misc\n */\n\nhr {\n  display: block;\n  width: 7rem;\n  height: 1px;\n  margin: 2.5rem 0;\n  background-color: #eee;\n  border: 0;\n}\n\n/*\n * Embed spacing\n */\n\n.language-html {\n  text-align: left;\n}\n\n.example {\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n\n.example iframe {\n  display: block;\n}\n\n.example iframe + iframe {\n  margin-top: 1rem;\n}\n\n@media (min-width: 34em) {\n  .example {\n    display: inline-block;\n  }\n  .example iframe {\n    float: left;\n  }\n  .example iframe + iframe {\n    margin-top: 5px;\n    margin-left: 1rem;\n  }\n}\n\n/*\n * Syntax highlighting\n */\n\n.hll {\n  background-color: #ffffcc;\n}\n\n/*{ background: #f0f3f3; }*/\n\n.c {\n  color: #999;\n}\n\n/* Comment */\n\n.err {\n  color: #aa0000;\n  background-color: #ffaaaa;\n}\n\n/* Error */\n\n.k {\n  color: #006699;\n}\n\n/* Keyword */\n\n.o {\n  color: #555555;\n}\n\n/* Operator */\n\n.cm {\n  color: #999;\n}\n\n/* Comment.Multiline */\n\n/* Edited to remove italics and make into comment */\n\n.cp {\n  color: #009999;\n}\n\n/* Comment.Preproc */\n\n.c1 {\n  color: #999;\n}\n\n/* Comment.Single */\n\n.cs {\n  color: #999;\n}\n\n/* Comment.Special */\n\n.gd {\n  background-color: #ffcccc;\n  border: 1px solid #cc0000;\n}\n\n/* Generic.Deleted */\n\n.ge {\n  font-style: italic;\n}\n\n/* Generic.Emph */\n\n.gr {\n  color: #ff0000;\n}\n\n/* Generic.Error */\n\n.gh {\n  color: #003300;\n}\n\n/* Generic.Heading */\n\n.gi {\n  background-color: #ccffcc;\n  border: 1px solid #00cc00;\n}\n\n/* Generic.Inserted */\n\n.go {\n  color: #aaaaaa;\n}\n\n/* Generic.Output */\n\n.gp {\n  color: #000099;\n}\n\n/* Generic.Prompt */\n\n.gs {\n}\n\n/* Generic.Strong */\n\n.gu {\n  color: #003300;\n}\n\n/* Generic.Subheading */\n\n.gt {\n  color: #99cc66;\n}\n\n/* Generic.Traceback */\n\n.kc {\n  color: #006699;\n}\n\n/* Keyword.Constant */\n\n.kd {\n  color: #006699;\n}\n\n/* Keyword.Declaration */\n\n.kn {\n  color: #006699;\n}\n\n/* Keyword.Namespace */\n\n.kp {\n  color: #006699;\n}\n\n/* Keyword.Pseudo */\n\n.kr {\n  color: #006699;\n}\n\n/* Keyword.Reserved */\n\n.kt {\n  color: #007788;\n}\n\n/* Keyword.Type */\n\n.m {\n  color: #ff6600;\n}\n\n/* Literal.Number */\n\n.s {\n  color: #d44950;\n}\n\n/* Literal.String */\n\n.na {\n  color: #4f9fcf;\n}\n\n/* Name.Attribute */\n\n.nb {\n  color: #336666;\n}\n\n/* Name.Builtin */\n\n.nc {\n  color: #00aa88;\n}\n\n/* Name.Class */\n\n.no {\n  color: #336600;\n}\n\n/* Name.Constant */\n\n.nd {\n  color: #9999ff;\n}\n\n/* Name.Decorator */\n\n.ni {\n  color: #999999;\n}\n\n/* Name.Entity */\n\n.ne {\n  color: #cc0000;\n}\n\n/* Name.Exception */\n\n.nf {\n  color: #cc00ff;\n}\n\n/* Name.Function */\n\n.nl {\n  color: #9999ff;\n}\n\n/* Name.Label */\n\n.nn {\n  color: #00ccff;\n}\n\n/* Name.Namespace */\n\n.nt {\n  color: #2f6f9f;\n}\n\n/* Name.Tag */\n\n.nv {\n  color: #003333;\n}\n\n/* Name.Variable */\n\n.ow {\n  color: #000000;\n}\n\n/* Operator.Word */\n\n.w {\n  color: #bbbbbb;\n}\n\n/* Text.Whitespace */\n\n.mf {\n  color: #ff6600;\n}\n\n/* Literal.Number.Float */\n\n.mh {\n  color: #ff6600;\n}\n\n/* Literal.Number.Hex */\n\n.mi {\n  color: #ff6600;\n}\n\n/* Literal.Number.Integer */\n\n.mo {\n  color: #ff6600;\n}\n\n/* Literal.Number.Oct */\n\n.sb {\n  color: #cc3300;\n}\n\n/* Literal.String.Backtick */\n\n.sc {\n  color: #cc3300;\n}\n\n/* Literal.String.Char */\n\n.sd {\n  color: #cc3300;\n  font-style: italic;\n}\n\n/* Literal.String.Doc */\n\n.s2 {\n  color: #cc3300;\n}\n\n/* Literal.String.Double */\n\n.se {\n  color: #cc3300;\n}\n\n/* Literal.String.Escape */\n\n.sh {\n  color: #cc3300;\n}\n\n/* Literal.String.Heredoc */\n\n.si {\n  color: #aa0000;\n}\n\n/* Literal.String.Interpol */\n\n.sx {\n  color: #cc3300;\n}\n\n/* Literal.String.Other */\n\n.sr {\n  color: #33aaaa;\n}\n\n/* Literal.String.Regex */\n\n.s1 {\n  color: #cc3300;\n}\n\n/* Literal.String.Single */\n\n.ss {\n  color: #ffcc33;\n}\n\n/* Literal.String.Symbol */\n\n.bp {\n  color: #336666;\n}\n\n/* Name.Builtin.Pseudo */\n\n.vc {\n  color: #003333;\n}\n\n/* Name.Variable.Class */\n\n.vg {\n  color: #003333;\n}\n\n/* Name.Variable.Global */\n\n.vi {\n  color: #003333;\n}\n\n/* Name.Variable.Instance */\n\n.il {\n  color: #ff6600;\n}\n\n/* Literal.Number.Integer.Long */\n\n.css .o,\n.css .o + .nt,\n.css .nt + .nt {\n  color: #999;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tweet-button\">\n    <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\" data-via=\"martzcodes\">Tweet</a>\n  </div>\n\n  <p>Introducing the unofficial</p>\n  <h1>[Angular-ized] GitHub buttons</h1>\n  <p>Showcase your GitHub repo&#39;s success with hotlinkable GitHub star, fork, or follow buttons. Available in two sizes with\n    up-to-date counts.</p>\n  <p>Made by\n    <a href=\"https://twitter.com/martzcodes\">@martzcodes</a>. Available on\n    <a href=\"https://github.com/martzcodes/angular-github-buttons\">GitHub</a>.</p>\n  <p>Inspired by the original (non-Angular) version by\n    <a href=\"https://twitter.com/mdo\">@mdo</a>. Also on\n    <a href=\"https://github.com/mdo/github-buttons\">GitHub</a>.</p>\n  <p>Uses\n    <a href=\"https://twitter.com/jasonaden1\">@jasonaden1</a>'s ng-conf presentation... Also on\n    <a href=\"https://github.com/jasonaden/simple-ui-lib\">GitHub</a>.</p>\n  <p>Licensed\n    <a href=\"http://www.apache.org/licenses/LICENSE-2.0\">Apache 2</a>.</p>\n\n  <hr>\n\n  <h2 id=\"contents\">Contents</h2>\n\n  <ul id=\"markdown-toc\">\n    <li>\n      <a href=\"#contents\">Contents</a>\n    </li>\n    <li>\n      <a href=\"#star\">Star</a>\n    </li>\n    <li>\n      <a href=\"#watch\">Watch</a>\n    </li>\n    <li>\n      <a href=\"#fork\">Fork</a>\n    </li>\n    <li>\n      <a href=\"#follow\">Follow</a>\n    </li>\n    <li>\n      <a href=\"#open-source\">Open source</a>\n    </li>\n  </ul>\n\n  <hr />\n\n  <h2 id=\"star\">Star</h2>\n\n  <div class=\"example\">\n    <ng-gh-star username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"></ng-gh-star>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-star username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-star&gt;\n        </code>\n  </div>\n\n  <div class=\"example\">\n    <ng-gh-star username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\"></ng-gh-star>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-star username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" &gt;&lt;/ng-gh-star&gt;\n        </code>\n  </div>\n\n  <h2 id=\"watch\">Watch</h2>\n  <div class=\"example\">\n    <ng-gh-watch username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"></ng-gh-watch>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-watch username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-watch&gt;\n        </code>\n  </div>\n\n  <div class=\"example\">\n    <ng-gh-watch username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\"></ng-gh-watch>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-watch username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" &gt;&lt;/ng-gh-watch&gt;\n        </code>\n  </div>\n\n  <h2 id=\"fork\">Fork</h2>\n\n  <div class=\"example\">\n    <ng-gh-fork username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"></ng-gh-fork>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-fork username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-fork&gt;\n        </code>\n  </div>\n\n  <div class=\"example\">\n    <ng-gh-fork username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\"></ng-gh-fork>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-fork username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"true\" &gt;&lt;/ng-gh-fork&gt;\n        </code>\n  </div>\n\n  <h2 id=\"follow\">Follow</h2>\n\n  <div class=\"example\">\n    <ng-gh-follow username=\"martzcodes\" count=\"true\" size=\"large\"></ng-gh-follow>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-follow username=\"martzcodes\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-follow&gt;\n        </code>\n  </div>\n\n  <div class=\"example\">\n    <ng-gh-follow username=\"martzcodes\" count=\"true\"></ng-gh-follow>\n  </div>\n\n  <div class=\"highlight\">\n    <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-follow username=\"martzcodes\" count=\"true\" &gt;&lt;/ng-gh-follow&gt;\n        </code>\n  </div>\n\n  <hr />\n\n  <h2 id=\"open-source\">Open source</h2>\n\n  <p>The unofficial Angular GitHub buttons are available on GitHub for downloading, forking, or contributing.</p>\n\n  <div class=\"example\">\n    <ng-gh-star username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"false\" size=\"large\"></ng-gh-star>\n    <ng-gh-fork username=\"martzcodes\" reponame=\"angular-github-buttons\" count=\"false\" size=\"large\"></ng-gh-fork>\n  </div>\n\n  <p>\n    <a href=\"https://github.com/martzcodes/angular-github-buttons\" class=\"btn\">View on GitHub</a>\n  </p>\n\n  <hr />\n\n  <p>&lt;3</p>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_github_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-github-buttons */ "../../dist/angular-github-buttons/fesm5/angular-github-buttons.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_github_buttons__WEBPACK_IMPORTED_MODULE_2__["AngularGithubButtonsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mattmartz/Development/github-buttons/projects/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
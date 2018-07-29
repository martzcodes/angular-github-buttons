/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var User = /** @class */ (function () {
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
    };
    AngularGithubButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularGithubButtonService.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Inject, args: [HttpClient,] }] }
    ]; };
    /** @nocollapse */ AngularGithubButtonService.ngInjectableDef = i0.defineInjectable({ factory: function AngularGithubButtonService_Factory() { return new AngularGithubButtonService(i0.inject(i1.HttpClient)); }, token: AngularGithubButtonService, providedIn: "root" });
    return AngularGithubButtonService;
}());
export { AngularGithubButtonService };
function AngularGithubButtonService_tsickle_Closure_declarations() {
    /** @type {?} */
    AngularGithubButtonService.prototype.apiUrl;
    /** @type {?} */
    AngularGithubButtonService.prototype.users;
    /** @type {?} */
    AngularGithubButtonService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1naXRodWItYnV0dG9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFdkMsSUFBQTs7cUJBRWUsRUFBRTs7ZUFQakI7SUFRQyxDQUFBOzs7Ozs7OztJQVNDLG9DQUF3QyxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO3NCQUh2Qyx5QkFBeUI7cUJBQ3JCLEVBQUU7S0FFcUM7Ozs7O0lBRTVELGdEQUFXOzs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUk7aUJBQ3hDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxRQUFRLENBQUM7aUJBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUk7cUJBQ3hDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxRQUFRLENBQUM7cUJBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUM7S0FDeEM7Ozs7OztJQUVELGdEQUFXOzs7OztJQUFYLFVBQVksUUFBZ0IsRUFBRSxRQUFnQjtRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUk7aUJBQzdDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztpQkFDaEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbEI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUk7cUJBQzdDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztxQkFDaEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDbEI7U0FDRjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3Qzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEsVUFBVSx1QkFnQkosTUFBTSxTQUFDLFVBQVU7OztxQ0FqQmhDOztTQWFhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jbGFzcyBVc2VyIHtcbiAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+O1xuICByZXBvczogYW55ID0ge307XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nOyAvLyBVUkwgdG8gd2ViIEFQSVxuICBwcml2YXRlIHVzZXJzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHBDbGllbnQpIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRVc2VySW5mbyh1c2VybmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnVzZXJzLmhhc093blByb3BlcnR5KHVzZXJuYW1lKSkge1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0gPSBuZXcgVXNlcigpO1xuICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0ub2JzZXJ2YWJsZSA9IHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLycgKyB1c2VybmFtZSlcbiAgICAgICAgLnBpcGUoc2hhcmUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy51c2Vyc1t1c2VybmFtZV0ub2JzZXJ2YWJsZSkge1xuICAgICAgICB0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlID0gdGhpcy5odHRwXG4gICAgICAgICAgLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8nICsgdXNlcm5hbWUpXG4gICAgICAgICAgLnBpcGUoc2hhcmUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVzZXJzW3VzZXJuYW1lXS5vYnNlcnZhYmxlO1xuICB9XG5cbiAgZ2V0UmVwb0luZm8odXNlcm5hbWU6IHN0cmluZywgcmVwb25hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy51c2Vycy5oYXNPd25Qcm9wZXJ0eSh1c2VybmFtZSkpIHtcbiAgICAgIHRoaXMudXNlcnNbdXNlcm5hbWVdID0gbmV3IFVzZXIoKTtcbiAgICAgIHRoaXMudXNlcnNbdXNlcm5hbWVdLnJlcG9zW3JlcG9uYW1lXSA9IHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLycgKyB1c2VybmFtZSArICcvJyArIHJlcG9uYW1lKVxuICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnVzZXJzW3VzZXJuYW1lXS5yZXBvcy5oYXNPd25Qcm9wZXJ0eShyZXBvbmFtZSkpIHtcbiAgICAgICAgdGhpcy51c2Vyc1t1c2VybmFtZV0ucmVwb3NbcmVwb25hbWVdID0gdGhpcy5odHRwXG4gICAgICAgICAgLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8nICsgdXNlcm5hbWUgKyAnLycgKyByZXBvbmFtZSlcbiAgICAgICAgICAucGlwZShzaGFyZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXNlcnNbdXNlcm5hbWVdLnJlcG9zW3JlcG9uYW1lXTtcbiAgfVxufVxuIl19
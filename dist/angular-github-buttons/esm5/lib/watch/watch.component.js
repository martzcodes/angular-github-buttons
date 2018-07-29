/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
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
        { type: Component, args: [{
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
        username: [{ type: Input }],
        reponame: [{ type: Input }],
        count: [{ type: Input }],
        size: [{ type: Input }]
    };
    return WatchComponent;
}());
export { WatchComponent };
function WatchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WatchComponent.prototype.username;
    /** @type {?} */
    WatchComponent.prototype.reponame;
    /** @type {?} */
    WatchComponent.prototype.count;
    /** @type {?} */
    WatchComponent.prototype.size;
    /** @type {?} */
    WatchComponent.prototype.user;
    /** @type {?} */
    WatchComponent.prototype.repo;
    /** @type {?} */
    WatchComponent.prototype.counterNum;
    /** @type {?} */
    WatchComponent.prototype.github;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1naXRodWItYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi93YXRjaC93YXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQTRKNUUsd0JBQW9CLE1BQWtDO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQTRCO0tBQUk7Ozs7SUFFMUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xFLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0tBQ0o7O2dCQWpLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw2bkNBWVQ7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOLGlzSEE2SEM7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBakpRLDBCQUEwQjs7OzJCQW1KaEMsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7eUJBdkpSOztTQW1KYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSB9IGZyb20gJy4uL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZ2gtd2F0Y2gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiZ2gtYnRuLWNvbnRhaW5lclwiPlxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnZ2l0aHViLWJ0bic6c2l6ZSE9PSdsYXJnZScsICdnaXRodWItYnRuLWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIiBpZD1cImdpdGh1Yi1idG5cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtYnRuIGdpdGh1Yi13YXRjaGVyc1wiIGlkPVwiZ2gtYnRuXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fVwiPlxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJvY3RpY29uIG9jdGljb24tZXllXCIgW2F0dHIuaGVpZ2h0XT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgW2F0dHIud2lkdGhdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOC4wNiAyQzMgMiAwIDggMCA4czMgNiA4LjA2IDZDMTMgMTQgMTYgOCAxNiA4cy0zLTYtNy45NC02ek04IDEyYy0yLjIgMC00LTEuNzgtNC00IDAtMi4yIDEuOC00IDQtNCAyLjIyIDAgNCAxLjggNCA0IDAgMi4yMi0xLjc4IDQtNCA0em0yLTRjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO1dhdGNoPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImNvdW50PT09J3RydWUnXCIgW25nQ2xhc3NdPVwieydnaC1idG4tY291bnQnOnNpemUhPT0nbGFyZ2UnLCAnZ2gtYnRuLWNvdW50LWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtY291bnRcIiBpZD1cImdoLWNvdW50XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX0ve3tyZXBvbmFtZX19L3dhdGNoZXJzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiPnt7Y291bnRlck51bSB8IG51bWJlcn19PC9hPlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBib2xkIDExcHgvMTRweCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIEhlbHZldGljYSxcbiAgICAgICAgICBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAgICAgICAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY291bnQtbGFyZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4ge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4tbGFyZ2Uge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXYXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVzZXJuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcG9uYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvdW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBwdWJsaWMgdXNlcjogYW55O1xuICBwdWJsaWMgcmVwbzogYW55O1xuICBwdWJsaWMgY291bnRlck51bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2l0aHViOiBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdpdGh1Yi5nZXRSZXBvSW5mbyh0aGlzLnVzZXJuYW1lLCB0aGlzLnJlcG9uYW1lKS5zdWJzY3JpYmUocmVwbyA9PiB7XG4gICAgICB0aGlzLnJlcG8gPSByZXBvO1xuICAgICAgdGhpcy5jb3VudGVyTnVtID0gdGhpcy5yZXBvLndhdGNoZXJzX2NvdW50O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
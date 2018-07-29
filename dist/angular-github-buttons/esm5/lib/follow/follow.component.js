/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
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
        { type: Component, args: [{
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
        username: [{ type: Input }],
        reponame: [{ type: Input }],
        count: [{ type: Input }],
        size: [{ type: Input }]
    };
    return FollowComponent;
}());
export { FollowComponent };
function FollowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FollowComponent.prototype.username;
    /** @type {?} */
    FollowComponent.prototype.reponame;
    /** @type {?} */
    FollowComponent.prototype.count;
    /** @type {?} */
    FollowComponent.prototype.size;
    /** @type {?} */
    FollowComponent.prototype.user;
    /** @type {?} */
    FollowComponent.prototype.repo;
    /** @type {?} */
    FollowComponent.prototype.counterNum;
    /** @type {?} */
    FollowComponent.prototype.github;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sbG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvZm9sbG93L2ZvbGxvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQThKNUUseUJBQW9CLE1BQWtDO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQTRCO0tBQUk7Ozs7SUFFMUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNuRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztLQUNKOztnQkFuS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsMi9DQWNUO29CQUNELE1BQU0sRUFBRTt3QkFDTixpc0hBNkhDO3FCQUNGO2lCQUNGOzs7O2dCQW5KUSwwQkFBMEI7OzsyQkFxSmhDLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7OzBCQXpKUjs7U0FxSmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLWZvbGxvdycsXG4gIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItbWVcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fVwiPlxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWJcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO0ZvbGxvdyBAe3t1c2VybmFtZX19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImNvdW50PT09J3RydWUnXCIgW25nQ2xhc3NdPVwieydnaC1idG4tY291bnQnOnNpemUhPT0nbGFyZ2UnLCAnZ2gtYnRuLWNvdW50LWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtY291bnRcIiBpZD1cImdoLWNvdW50XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX0vZm9sbG93ZXJzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiPnt7Y291bnRlck51bSB8IG51bWJlcn19PC9hPlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBib2xkIDExcHgvMTRweCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIEhlbHZldGljYSxcbiAgICAgICAgICBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAgICAgICAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY291bnQtbGFyZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4ge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4tbGFyZ2Uge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb2xsb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0VXNlckluZm8odGhpcy51c2VybmFtZSkuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMudXNlci5mb2xsb3dlcnM7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
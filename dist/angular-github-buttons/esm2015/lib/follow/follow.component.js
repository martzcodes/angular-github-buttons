/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
export class FollowComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sbG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvZm9sbG93L2ZvbGxvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBb0o5RSxNQUFNOzs7O0lBVUosWUFBb0IsTUFBa0M7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7S0FBSTs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztLQUNKOzs7WUFuS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZIQztpQkFDRjthQUNGOzs7O1lBbkpRLDBCQUEwQjs7O3VCQXFKaEMsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLWZvbGxvdycsXG4gIHRlbXBsYXRlOiBgXG48c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItbWVcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fVwiPlxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWJcIiBbYXR0ci5oZWlnaHRdPVwic2l6ZT09PSdsYXJnZScgPyAzMiA6IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZ2gtdGV4dFwiIGlkPVwiZ2gtdGV4dFwiPiZuYnNwO0ZvbGxvdyBAe3t1c2VybmFtZX19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImNvdW50PT09J3RydWUnXCIgW25nQ2xhc3NdPVwieydnaC1idG4tY291bnQnOnNpemUhPT0nbGFyZ2UnLCAnZ2gtYnRuLWNvdW50LWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtY291bnRcIiBpZD1cImdoLWNvdW50XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX0vZm9sbG93ZXJzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiPnt7Y291bnRlck51bSB8IG51bWJlcn19PC9hPlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBib2xkIDExcHgvMTRweCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIEhlbHZldGljYSxcbiAgICAgICAgICBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAgICAgICAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY291bnQtbGFyZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4ge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4tbGFyZ2Uge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb2xsb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0VXNlckluZm8odGhpcy51c2VybmFtZSkuc3Vic2NyaWJlKHVzZXIgPT4ge1xuICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMudXNlci5mb2xsb3dlcnM7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
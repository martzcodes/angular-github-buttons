/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
export class ForkComponent {
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
function ForkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ForkComponent.prototype.username;
    /** @type {?} */
    ForkComponent.prototype.reponame;
    /** @type {?} */
    ForkComponent.prototype.count;
    /** @type {?} */
    ForkComponent.prototype.size;
    /** @type {?} */
    ForkComponent.prototype.user;
    /** @type {?} */
    ForkComponent.prototype.repo;
    /** @type {?} */
    ForkComponent.prototype.counterNum;
    /** @type {?} */
    ForkComponent.prototype.github;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zLyIsInNvdXJjZXMiOlsibGliL2ZvcmsvZm9yay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBa0o5RSxNQUFNOzs7O0lBVUosWUFBb0IsTUFBa0M7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7S0FBSTs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ0o7OztZQWpLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZIQztpQkFDRjthQUNGOzs7O1lBakpRLDBCQUEwQjs7O3VCQW1KaEMsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLWZvcmsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiZ2gtYnRuLWNvbnRhaW5lclwiPlxuICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsnZ2l0aHViLWJ0bic6c2l6ZSE9PSdsYXJnZScsICdnaXRodWItYnRuLWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIiBpZD1cImdpdGh1Yi1idG5cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtYnRuIGdpdGh1Yi1mb3Jrc1wiIGlkPVwiZ2gtYnRuXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS9mb3JrXCI+XG4gICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIm9jdGljb24gb2N0aWNvbi1yZXBvLWZvcmtlZFwiIFthdHRyLmhlaWdodF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMCAxNlwiIFthdHRyLndpZHRoXT1cInNpemU9PT0nbGFyZ2UnID8gMjAgOiAxMFwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgPHNwYW4gY2xhc3M9XCJnaC10ZXh0XCIgaWQ9XCJnaC10ZXh0XCI+Jm5ic3A7Rm9yazwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS9uZXR3b3JrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cIlwiPnt7Y291bnRlck51bSB8IG51bWJlcn19PC9hPlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBib2xkIDExcHgvMTRweCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIEhlbHZldGljYSxcbiAgICAgICAgICBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAgICAgICAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgfVxuICAgICAgLm9jdGljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY291bnQtbGFyZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4ge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgICAgLmdpdGh1Yi1idG4tbGFyZ2Uge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgMjcwZGVnLFxuICAgICAgICAgICNmYWZiZmMgMCUsXG4gICAgICAgICAgI2VmZjNmNiA5MCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmYWZiZmMgMCUsICNlZmYzZjYgOTAlKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdXNlcm5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcmVwb25hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY291bnQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuXG4gIHB1YmxpYyB1c2VyOiBhbnk7XG4gIHB1YmxpYyByZXBvOiBhbnk7XG4gIHB1YmxpYyBjb3VudGVyTnVtOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnaXRodWI6IEFuZ3VsYXJHaXRodWJCdXR0b25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2l0aHViLmdldFJlcG9JbmZvKHRoaXMudXNlcm5hbWUsIHRoaXMucmVwb25hbWUpLnN1YnNjcmliZShyZXBvID0+IHtcbiAgICAgIHRoaXMucmVwbyA9IHJlcG87XG4gICAgICB0aGlzLmNvdW50ZXJOdW0gPSB0aGlzLnJlcG8uZm9ya3NfY291bnQ7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
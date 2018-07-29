/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
export class WatchComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1naXRodWItYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi93YXRjaC93YXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBa0o5RSxNQUFNOzs7O0lBVUosWUFBb0IsTUFBa0M7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7S0FBSTs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUMsQ0FBQyxDQUFDO0tBQ0o7OztZQWpLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZIQztpQkFDRjthQUNGOzs7O1lBakpRLDBCQUEwQjs7O3VCQW1KaEMsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi9hbmd1bGFyLWdpdGh1Yi1idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWdoLXdhdGNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImdoLWJ0bi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBbbmdDbGFzc109XCJ7J2dpdGh1Yi1idG4nOnNpemUhPT0nbGFyZ2UnLCAnZ2l0aHViLWJ0bi1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCIgaWQ9XCJnaXRodWItYnRuXCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWJ0biBnaXRodWItd2F0Y2hlcnNcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX1cIj5cbiAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwib2N0aWNvbiBvY3RpY29uLWV5ZVwiIFthdHRyLmhlaWdodF09XCJzaXplPT09J2xhcmdlJyA/IDMyIDogMTZcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIFthdHRyLndpZHRoXT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtXYXRjaDwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJjb3VudD09PSd0cnVlJ1wiIFtuZ0NsYXNzXT1cInsnZ2gtYnRuLWNvdW50JzpzaXplIT09J2xhcmdlJywgJ2doLWJ0bi1jb3VudC1sYXJnZSc6c2l6ZT09PSdsYXJnZSd9XCI+XG4gICAgICA8YSBjbGFzcz1cImdoLWNvdW50XCIgaWQ9XCJnaC1jb3VudFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20ve3t1c2VybmFtZX19L3t7cmVwb25hbWV9fS93YXRjaGVyc1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIj57e2NvdW50ZXJOdW0gfCBudW1iZXJ9fTwvYT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udDogYm9sZCAxMXB4LzE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsXG4gICAgICAgICAgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICAgIC5vY3RpY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2gtYnRuLWNvdW50LWxhcmdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5naXRodWItYnRuLWxhcmdlIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDI3MGRlZyxcbiAgICAgICAgICAjZmFmYmZjIDAlLFxuICAgICAgICAgICNlZmYzZjYgOTAlXG4gICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjIDAlLCAjZWZmM2Y2IDkwJSk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTFweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0UmVwb0luZm8odGhpcy51c2VybmFtZSwgdGhpcy5yZXBvbmFtZSkuc3Vic2NyaWJlKHJlcG8gPT4ge1xuICAgICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMucmVwby53YXRjaGVyc19jb3VudDtcbiAgICB9KTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
export class StarComponent {
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
function StarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    StarComponent.prototype.username;
    /** @type {?} */
    StarComponent.prototype.reponame;
    /** @type {?} */
    StarComponent.prototype.count;
    /** @type {?} */
    StarComponent.prototype.size;
    /** @type {?} */
    StarComponent.prototype.user;
    /** @type {?} */
    StarComponent.prototype.repo;
    /** @type {?} */
    StarComponent.prototype.counterNum;
    /** @type {?} */
    StarComponent.prototype.github;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWdpdGh1Yi1idXR0b25zLyIsInNvdXJjZXMiOlsibGliL3N0YXIvc3Rhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBa0o5RSxNQUFNOzs7O0lBVUosWUFBb0IsTUFBa0M7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7S0FBSTs7OztJQUUxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QyxDQUFDLENBQUM7S0FDSjs7O1lBaktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkhDO2lCQUNGO2FBQ0Y7Ozs7WUFqSlEsMEJBQTBCOzs7dUJBbUpoQyxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyR2l0aHViQnV0dG9uU2VydmljZSB9IGZyb20gJy4uL2FuZ3VsYXItZ2l0aHViLWJ1dHRvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZ2gtc3RhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJnaC1idG4tY29udGFpbmVyXCI+XG4gICAgPHNwYW4gW25nQ2xhc3NdPVwieydnaXRodWItYnRuJzpzaXplIT09J2xhcmdlJywgJ2dpdGh1Yi1idG4tbGFyZ2UnOnNpemU9PT0nbGFyZ2UnfVwiIGlkPVwiZ2l0aHViLWJ0blwiPlxuICAgICAgPGEgY2xhc3M9XCJnaC1idG4gZ2l0aHViLXN0YXJnYXplcnNcIiBpZD1cImdoLWJ0blwiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3t7dXNlcm5hbWV9fS97e3JlcG9uYW1lfX0vXCI+XG4gICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cIm9jdGljb24gb2N0aWNvbi1zdGFyXCIgW2F0dHIuaGVpZ2h0XT1cInNpemU9PT0nbGFyZ2UnID8gMzIgOiAxNlwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDE0IDE2XCIgW2F0dHIud2lkdGhdPVwic2l6ZSA9PT0gJ2xhcmdlJyA/IDI4IDogMTRcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImdoLXRleHRcIiBpZD1cImdoLXRleHRcIj4mbmJzcDtTdGFyPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImNvdW50PT09J3RydWUnXCIgW25nQ2xhc3NdPVwieydnaC1idG4tY291bnQnOnNpemUhPT0nbGFyZ2UnLCAnZ2gtYnRuLWNvdW50LWxhcmdlJzpzaXplPT09J2xhcmdlJ31cIj5cbiAgICAgIDxhIGNsYXNzPVwiZ2gtY291bnRcIiBpZD1cImdoLWNvdW50XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS97e3VzZXJuYW1lfX0ve3tyZXBvbmFtZX19L3N0YXJnYXplcnNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWxhYmVsPVwiXCI+e3tjb3VudGVyTnVtIHwgbnVtYmVyfX08L2E+XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQ6IGJvbGQgMTFweC8xNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLFxuICAgICAgICAgIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLFxuICAgICAgICAgICdTZWdvZSBVSSBTeW1ib2wnO1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAub2N0aWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICB9XG4gICAgICAub2N0aWNvbiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIH1cbiAgICAgIC5naC1idG4tY291bnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmdoLWJ0bi1jb3VudC1sYXJnZSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuZ2l0aHViLWJ0biB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y2O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAyNzBkZWcsXG4gICAgICAgICAgI2ZhZmJmYyAwJSxcbiAgICAgICAgICAjZWZmM2Y2IDkwJVxuICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYyAwJSwgI2VmZjNmNiA5MCUpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB9XG4gICAgICAuZ2l0aHViLWJ0bi1sYXJnZSB7XG4gICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y2O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAyNzBkZWcsXG4gICAgICAgICAgI2ZhZmJmYyAwJSxcbiAgICAgICAgICAjZWZmM2Y2IDkwJVxuICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYyAwJSwgI2VmZjNmNiA5MCUpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTEwJSAxMTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VybmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSByZXBvbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgcHVibGljIHVzZXI6IGFueTtcbiAgcHVibGljIHJlcG86IGFueTtcbiAgcHVibGljIGNvdW50ZXJOdW06IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdpdGh1YjogQW5ndWxhckdpdGh1YkJ1dHRvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5naXRodWIuZ2V0UmVwb0luZm8odGhpcy51c2VybmFtZSwgdGhpcy5yZXBvbmFtZSkuc3Vic2NyaWJlKHJlcG8gPT4ge1xuICAgICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICAgIHRoaXMuY291bnRlck51bSA9IHRoaXMucmVwby5zdGFyZ2F6ZXJzX2NvdW50O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
import { Component, OnInit, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';

@Component({
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
})
export class FollowComponent implements OnInit {
  @Input() username: string;
  @Input() reponame: string;
  @Input() count: string;
  @Input() size: string;

  public user: any;
  public repo: any;
  public counterNum: number;

  constructor(private github: AngularGithubButtonService) {}

  ngOnInit() {
    this.github.getUserInfo(this.username).subscribe(user => {
      this.user = user;
      this.counterNum = this.user.followers;
    });
  }
}

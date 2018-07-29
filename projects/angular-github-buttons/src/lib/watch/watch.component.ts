import { Component, OnInit, Input } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';

@Component({
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
})
export class WatchComponent implements OnInit {
  @Input() username: string;
  @Input() reponame: string;
  @Input() count: string;
  @Input() size: string;

  public user: any;
  public repo: any;
  public counterNum: number;

  constructor(private github: AngularGithubButtonService) {}

  ngOnInit() {
    this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
      this.repo = repo;
      this.counterNum = this.repo.watchers_count;
    });
  }
}

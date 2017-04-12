import {Component, OnInit, Input, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {GithubService} from './github.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'ng-gh-btn',
  templateUrl: './github-button.html',
  styleUrls: ['./github-button.css']
})
export class GithubButton implements OnInit {
    @Input() username: string;
    @Input() reponame: string;
    @Input() type: string;
    @Input() count: string;
    @Input() size: string;

    public user: any;
    public repo: any;
    public mainClass: string;
    public buttonHref: string;
    public buttonType: string;
    public counterHref: string;
    public counterNum: number;

  constructor(@Inject(GithubService) private github: GithubService) {

  }

  ngOnInit() {
    if (this.reponame && this.type !== 'follow') {
      this.github.getRepoInfo(this.username, this.reponame).subscribe(repo => {
        this.repo = repo.json();
        this.process();
      });
    } else if (this.type === 'follow') {
      this.github.getUserInfo(this.username).subscribe(user => {
        this.user = user.json();
        this.process();
      });
    }
  }

  process() {
    switch (this.type) {
      case 'watch':
        this.mainClass += ' github-watchers';
        this.buttonType = 'Watch';
        this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/';
        this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/watchers';
        this.counterNum = this.repo.watchers_count;
        break;
      case 'star':
        this.mainClass += ' github-stargazers';
        this.buttonType = 'Star';
        this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/';
        this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/stargazers';
        this.counterNum = this.repo.stargazers_count;
        break;
      case 'fork':
        this.mainClass += ' github-forks';
        this.buttonType = 'Fork';
        this.buttonHref = 'https://github.com/' + this.username + '/' + this.reponame + '/fork';
        this.counterHref = 'https://github.com/' + this.username + '/' + this.reponame + '/network';
        this.counterNum = this.repo.forks_count;
        break;
      case 'follow':
        this.mainClass += ' github-me';
        this.buttonType = 'Follow @' + this.username;
        this.buttonHref = 'https://github.com/' + this.username;
        this.counterHref = 'https://github.com/' + this.username + '/followers';
        this.counterNum = this.user.followers;
        break;
    }
  }
}

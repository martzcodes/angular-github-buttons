import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ng-gh-btn',
  templateUrl: './github-button.html',
  styleUrls: ['./github-button.css']
})
export class GithubButton implements OnInit {
    @Input() user: string;
    @Input() repo: string;
    @Input() type: string;
    @Input() count: string;
    @Input() size: string;
  constructor() {

  }

  ngOnInit() {

  }

  typeString(): string {
      return this.type === 'star' ? 'Star' : (this.type === 'follow' ? 'Follow' : (this.type === 'fork' ? 'Fork' : 'Watch'));
  }
}

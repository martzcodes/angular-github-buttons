import { OnInit } from '@angular/core';
import { AngularGithubButtonService } from '../angular-github-button.service';
export declare class StarComponent implements OnInit {
    private github;
    username: string;
    reponame: string;
    count: string;
    size: string;
    user: any;
    repo: any;
    counterNum: number;
    constructor(github: AngularGithubButtonService);
    ngOnInit(): void;
}

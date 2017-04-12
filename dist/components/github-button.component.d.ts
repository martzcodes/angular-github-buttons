import { OnInit } from '@angular/core';
import { GithubService } from './github.service';
import 'rxjs/add/operator/map';
export declare class GithubButton implements OnInit {
    private github;
    username: string;
    reponame: string;
    type: string;
    count: string;
    size: string;
    user: any;
    repo: any;
    mainClass: string;
    buttonHref: string;
    buttonType: string;
    counterHref: string;
    counterNum: number;
    constructor(github: GithubService);
    ngOnInit(): void;
    process(): void;
}

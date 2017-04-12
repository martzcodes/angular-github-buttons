import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubButton } from './github-button.component';
import { GithubService } from './github.service';
import { HttpModule } from '@angular/http';
export { GithubButton } from './github-button.component';
var GithubButtonModule = (function () {
    function GithubButtonModule() {
    }
    return GithubButtonModule;
}());
export { GithubButtonModule };
GithubButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule],
                declarations: [GithubButton],
                exports: [GithubButton],
                providers: [GithubService]
            },] },
];
/**
 * @nocollapse
 */
GithubButtonModule.ctorParameters = function () { return []; };
function GithubButtonModule_tsickle_Closure_declarations() {
    /** @type {?} */
    GithubButtonModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    GithubButtonModule.ctorParameters;
}

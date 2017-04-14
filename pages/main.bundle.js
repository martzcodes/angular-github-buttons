webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "/*\n * Reset\n */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font: 14px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n@media (min-width: 34em) {\n  html {\n    font-size: 18px;\n  }\n}\n\nbody {\n  padding: 1.5rem 1.5rem 3rem;\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n  background-color: #fff;\n}\n\nh1, h2 {\n  margin-top: 0;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n}\nh1 {\n  margin-bottom: .5rem;\n  font-size: 3rem;\n}\nh2 {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n}\nh3 {\n  margin-top: 2rem;\n  margin-bottom: .5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nh1 + p {\n  font-size: 1.25rem;\n  color: #555;\n}\n\na {\n  color: #08c;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: .5rem;\n  font-size: 90%;\n  vertical-align: top;\n  border: 1px solid #eee;\n}\n\nth {\n  background-color: #f5f5f5;\n}\n\n.deprecated {\n  display: inline-block;\n  padding: .25rem .5rem;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1.6;\n  color: #fff;\n  background-color: #ff4136;\n  border-radius: .2rem;\n}\n\n#markdown-toc > li:first-child,\n#markdown-toc > li:last-child {\n  display: none;\n}\n\n/*\n * Code\n */\n\ncode,\npre {\n  font-family: Menlo, \"Courier New\", monospace;\n  font-size: 95%;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 85%;\n  color: #d44950;\n  background-color: #f7f7f9;\n  border-radius: .2rem;\n}\n\npre {\n  display: block;\n  margin: 0 0 1rem;\n  line-height: 1.4;\n  white-space: pre;\n  white-space: pre-wrap;\n}\npre code {\n  padding: 0;\n  color: inherit;\n  background-color: transparent;\n  border: 0;\n}\n.highlight {\n  margin: 0 0 1rem;\n  padding: 1rem;\n  background-color: #f7f7f9;\n}\n.highlight pre {\n  margin-bottom: 0;\n  word-wrap: break-word;\n}\n.highlight + .highlight {\n  margin-top: 1rem;\n}\n\n\n/*\n * Download button\n */\n\n.btn {\n  display: inline-block;\n  padding: .5rem 1.25rem;\n  font-weight: 500;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 -1px 0 rgba(0,0,0,.5);\n  background-color: #3072b3; /* Old browsers */\n  background-repeat: repeat-x; /* Repeat the gradient */\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #599bdc), color-stop(100%, #3072b3)); /* Chrome,Safari4+ */\n  background-image: -webkit-linear-gradient(top, #599bdc 0, #3072b3 100%); /* Chrome 10+,Safari 5.1+ */ /* FF3.6+ */ /* IE10+ */ /* Opera 11.10+ */\n  background-image: linear-gradient(top, #599bdc 0, #3072b3 100%); /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#599bdc', endColorstr='#3072b3', GradientType=0); /* IE6-9 */\n  border: 1px solid #2967a4;\n  border-radius: 6px;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n  -webkit-transition: none;\n          transition: none;\n}\n.btn:hover {\n  text-decoration: none;\n  background-position: 0 -15px;\n}\n.btn:active {\n  background-image: none;\n  background-color: #3072b3; /* Old browsers */\n  box-shadow: inset 0 5px 10px rgba(0,0,0,.125), 0 1px 2px rgba(0,0,0,.2);\n}\n\n\n/*\n * Masthead\n */\n\n.tweet-button {\n  margin: 0 0 1rem;\n}\n.tweet-button + p {\n  color: #999;\n}\n\n\n/*\n * Grid and columns\n */\n\n.container {\n  max-width: 32rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n\n/*\n * Misc\n */\n\nhr {\n  display: block;\n  width: 7rem;\n  height: 1px;\n  margin: 2.5rem 0;\n  background-color: #eee;\n  border: 0;\n}\n\n/*\n * Embed spacing\n */\n\n .language-html {\n   text-align: left;\n }\n\n.example {\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n.example iframe {\n  display: block;\n}\n.example iframe + iframe {\n  margin-top: 1rem;\n}\n\n@media (min-width: 34em) {\n  .example {\n    display: inline-block;\n  }\n  .example iframe {\n    float: left;\n  }\n  .example iframe + iframe {\n    margin-top: 5px;\n    margin-left: 1rem;\n  }\n}\n\n/*\n * Syntax highlighting\n */\n\n.hll { background-color: #ffffcc }\n /*{ background: #f0f3f3; }*/\n.c { color: #999; } /* Comment */\n.err { color: #AA0000; background-color: #FFAAAA } /* Error */\n.k { color: #006699; } /* Keyword */\n.o { color: #555555 } /* Operator */\n.cm { color: #999; } /* Comment.Multiline */ /* Edited to remove italics and make into comment */\n.cp { color: #009999 } /* Comment.Preproc */\n.c1 { color: #999; } /* Comment.Single */\n.cs { color: #999; } /* Comment.Special */\n.gd { background-color: #FFCCCC; border: 1px solid #CC0000 } /* Generic.Deleted */\n.ge { font-style: italic } /* Generic.Emph */\n.gr { color: #FF0000 } /* Generic.Error */\n.gh { color: #003300; } /* Generic.Heading */\n.gi { background-color: #CCFFCC; border: 1px solid #00CC00 } /* Generic.Inserted */\n.go { color: #AAAAAA } /* Generic.Output */\n.gp { color: #000099; } /* Generic.Prompt */\n.gs { } /* Generic.Strong */\n.gu { color: #003300; } /* Generic.Subheading */\n.gt { color: #99CC66 } /* Generic.Traceback */\n.kc { color: #006699; } /* Keyword.Constant */\n.kd { color: #006699; } /* Keyword.Declaration */\n.kn { color: #006699; } /* Keyword.Namespace */\n.kp { color: #006699 } /* Keyword.Pseudo */\n.kr { color: #006699; } /* Keyword.Reserved */\n.kt { color: #007788; } /* Keyword.Type */\n.m { color: #FF6600 } /* Literal.Number */\n.s { color: #d44950 } /* Literal.String */\n.na { color: #4f9fcf } /* Name.Attribute */\n.nb { color: #336666 } /* Name.Builtin */\n.nc { color: #00AA88; } /* Name.Class */\n.no { color: #336600 } /* Name.Constant */\n.nd { color: #9999FF } /* Name.Decorator */\n.ni { color: #999999; } /* Name.Entity */\n.ne { color: #CC0000; } /* Name.Exception */\n.nf { color: #CC00FF } /* Name.Function */\n.nl { color: #9999FF } /* Name.Label */\n.nn { color: #00CCFF; } /* Name.Namespace */\n.nt { color: #2f6f9f; } /* Name.Tag */\n.nv { color: #003333 } /* Name.Variable */\n.ow { color: #000000; } /* Operator.Word */\n.w { color: #bbbbbb } /* Text.Whitespace */\n.mf { color: #FF6600 } /* Literal.Number.Float */\n.mh { color: #FF6600 } /* Literal.Number.Hex */\n.mi { color: #FF6600 } /* Literal.Number.Integer */\n.mo { color: #FF6600 } /* Literal.Number.Oct */\n.sb { color: #CC3300 } /* Literal.String.Backtick */\n.sc { color: #CC3300 } /* Literal.String.Char */\n.sd { color: #CC3300; font-style: italic } /* Literal.String.Doc */\n.s2 { color: #CC3300 } /* Literal.String.Double */\n.se { color: #CC3300; } /* Literal.String.Escape */\n.sh { color: #CC3300 } /* Literal.String.Heredoc */\n.si { color: #AA0000 } /* Literal.String.Interpol */\n.sx { color: #CC3300 } /* Literal.String.Other */\n.sr { color: #33AAAA } /* Literal.String.Regex */\n.s1 { color: #CC3300 } /* Literal.String.Single */\n.ss { color: #FFCC33 } /* Literal.String.Symbol */\n.bp { color: #336666 } /* Name.Builtin.Pseudo */\n.vc { color: #003333 } /* Name.Variable.Class */\n.vg { color: #003333 } /* Name.Variable.Global */\n.vi { color: #003333 } /* Name.Variable.Instance */\n.il { color: #FF6600 } /* Literal.Number.Integer.Long */\n\n.css .o,\n.css .o + .nt,\n.css .nt + .nt { color: #999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"tweet-button\">\n        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\" data-via=\"martzcodes\">Tweet</a>\n    </div>\n\n    <p>Introducing the unofficial</p>\n    <h1>[Angular-ized] GitHub buttons</h1>\n    <p>Showcase your GitHub repo&#39;s success with hotlinkable GitHub star, fork, or follow buttons. Available in two sizes\n        with up-to-date counts.</p>\n    <p>Made by <a href=\"https://twitter.com/martzcodes\">@martzcodes</a>. Available on <a href=\"https://github.com/martzcodes/angular-github-buttons\">GitHub</a>.</p>\n    <p>Inspired by the original (non-Angular) version by <a href=\"https://twitter.com/mdo\">@mdo</a>. Also on <a href=\"https://github.com/mdo/github-buttons\">GitHub</a>.</p>\n    <p>Uses <a href=\"https://twitter.com/jasonaden1\">@jasonaden1</a>'s ng-conf presentation... Also on <a href=\"https://github.com/jasonaden/simple-ui-lib\">GitHub</a>.</p>\n    <p>Licensed <a href=\"http://www.apache.org/licenses/LICENSE-2.0\">Apache 2</a>.</p>\n\n    <hr>\n\n    <h2 id=\"contents\">Contents</h2>\n\n    <ul id=\"markdown-toc\">\n        <li><a href=\"#contents\">Contents</a></li>\n        <li><a href=\"#star\">Star</a></li>\n        <li><a href=\"#watch\">Watch</a></li>\n        <li><a href=\"#fork\">Fork</a></li>\n        <li><a href=\"#follow\">Follow</a></li>\n        <li><a href=\"#open-source\">Open source</a></li>\n    </ul>\n\n    <hr />\n\n    <h2 id=\"star\">Star</h2>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"star\" count=\"true\" size=\"large\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"star\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"star\" count=\"true\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"star\" count=\"true\" &gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <h2 id=\"watch\">Watch</h2>\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"watch\" count=\"true\" size=\"large\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"watch\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"watch\" count=\"true\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"watch\" count=\"true\" &gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>    \n\n    <h2 id=\"fork\">Fork</h2>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"fork\" count=\"true\" size=\"large\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"fork\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"fork\" count=\"true\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"fork\" count=\"true\" &gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <h2 id=\"follow\">Follow</h2>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" type=\"follow\" count=\"true\" size=\"large\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" type=\"follow\" count=\"true\" size=\"large\"&gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" type=\"follow\" count=\"true\"></ng-gh-btn>\n    </div>\n\n    <div class=\"highlight\">\n        <code class=\"language-html\" data-lang=\"html\">\n            &lt;ng-gh-btn username=\"martzcodes\" type=\"follow\" count=\"true\" &gt;&lt;/ng-gh-btn&gt;\n        </code>\n    </div>\n\n    <hr />\n\n    <h2 id=\"open-source\">Open source</h2>\n\n    <p>The unofficial Angular GitHub buttons are available on GitHub for downloading, forking, or contributing.</p>\n\n    <div class=\"example\">\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"star\" count=\"false\" size=\"large\"></ng-gh-btn>\n        <ng-gh-btn username=\"martzcodes\" reponame=\"angular-github-buttons\" type=\"fork\" count=\"false\" size=\"large\"></ng-gh-btn>\n    </div>\n\n    <p><a href=\"https://github.com/martzcodes/angular-github-buttons\" class=\"btn\">View on GitHub</a></p>\n\n    <hr />\n\n    <p>&lt;3</p>\n\n</div>"

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 49;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubButton; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GithubButton = (function () {
    function GithubButton(github) {
        this.github = github;
    }
    GithubButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.reponame && this.type !== 'follow') {
            this.github.getRepoInfo(this.username, this.reponame).subscribe(function (repo) {
                _this.repo = repo.json();
                _this.process();
            });
        }
        else if (this.type === 'follow') {
            this.github.getUserInfo(this.username).subscribe(function (user) {
                _this.user = user.json();
                _this.process();
            });
        }
    };
    GithubButton.prototype.process = function () {
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
    };
    return GithubButton;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])()
], GithubButton.prototype, "username");
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])()
], GithubButton.prototype, "reponame");
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])()
], GithubButton.prototype, "type");
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])()
], GithubButton.prototype, "count");
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])()
], GithubButton.prototype, "size");
GithubButton = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ng-gh-btn',
        template: "\n  <span class=\"gh-btn-container\">\n    <span [ngClass]=\"{'github-btn':size!=='large', 'github-btn-large':size==='large'}\" id=\"github-btn\">\n      <a class=\"gh-btn\" [ngClass]=\"mainClass\" id=\"gh-btn\" target=\"_blank\" aria-label=\"\" href=\"{{buttonHref}}\">\n          <svg *ngIf=\"type==='follow' && size!=='large'\" aria-hidden=\"true\" class=\"octicon octicon-mark-github\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>\n          <svg *ngIf=\"type==='watch' && size!=='large'\" aria-hidden=\"true\" class=\"octicon octicon-eye\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"></path></svg>\n          <svg *ngIf=\"type==='star' && size!=='large'\" aria-hidden=\"true\" class=\"octicon octicon-star\" height=\"16\" version=\"1.1\" viewBox=\"0 0 14 16\" width=\"14\"><path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z\"></path></svg>\n          <svg *ngIf=\"type==='fork' && size!=='large'\" aria-hidden=\"true\" class=\"octicon octicon-repo-forked\" height=\"16\" version=\"1.1\" viewBox=\"0 0 10 16\" width=\"10\"><path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"></path></svg>\n\n          <svg *ngIf=\"type==='follow' && size==='large'\" aria-hidden=\"true\" class=\"octicon octicon-mark-github\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg>\n          <svg *ngIf=\"type==='watch' && size==='large'\" aria-hidden=\"true\" class=\"octicon octicon-eye\" height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\"><path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"></path></svg>\n          <svg *ngIf=\"type==='star' && size==='large'\" aria-hidden=\"true\" class=\"octicon octicon-star\" height=\"32\" version=\"1.1\" viewBox=\"0 0 14 16\" width=\"28\"><path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z\"></path></svg>\n          <svg *ngIf=\"type==='fork' && size==='large'\" aria-hidden=\"true\" class=\"octicon octicon-repo-forked\" height=\"32\" version=\"1.1\" viewBox=\"0 0 10 16\" width=\"20\"><path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"></path></svg>\n      <span class=\"gh-text\" id=\"gh-text\">{{buttonType}}</span>\n      </a>\n    </span>\n    <span *ngIf=\"count==='true'\" [ngClass]=\"{'gh-btn-count':size!=='large', 'gh-btn-count-large':size==='large'}\">\n      <a class=\"gh-count\" id=\"gh-count\" href=\"{{counterHref}}\" target=\"_blank\" aria-label=\"\">{{counterNum | number}}</a>\n    </span>\n  </span>\n",
        styles: ["\n  body {\n  padding: 0;\n  margin: 0;\n  font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  overflow: hidden;\n}\na {\n  color: #24292e;\n  text-decoration: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.gh-btn-container {\n  display: block;\n  margin-top: 0em;\n  position: relative;\n}\n.octicon {\n    display: inline-block;\n    vertical-align: text-top;\n    fill: currentColor\n}\n.octicon {\n    vertical-align: text-bottom\n}\n.gh-btn-count {\n  float: left;\n    padding: 3px 10px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 20px;\n    color: #24292e;\n    vertical-align: middle;\n    background-color: #fff;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-left: 0;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n.gh-btn-count-large {\n  float: left;\n    padding: 8px 10px;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 20px;\n    color: #24292e;\n    vertical-align: middle;\n    background-color: #fff;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-left: 0;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n.github-btn {\n  color: #24292e;\n  background-color: #eff3f6;\n  background-image: -webkit-linear-gradient(270deg, #fafbfc 0%, #eff3f6 90%);\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n  float: left;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 3px 10px;\n  font-size: 12px;\n  line-height: 20px;\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(27,31,35,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.github-btn-large {\n  color: #24292e;\n  background-color: #eff3f6;\n  background-image: -webkit-linear-gradient(270deg, #fafbfc 0%, #eff3f6 90%);\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n  float: left;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding: 3px 10px;\n  position: relative;\n  display: inline-block;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(27,31,35,0.2);\n  border-radius: 0.25em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n"]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__github_service__["a" /* GithubService */]))
], GithubButton);

//# sourceMappingURL=github-button.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var User = (function () {
    function User() {
        this.repos = {};
    }
    return User;
}());
var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/'; // URL to web API
        this.users = {};
    }
    GithubService.prototype.getUserInfo = function (username) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
        }
        else {
            if (!this.users[username].observable) {
                this.users[username].observable = this.http.get('https://api.github.com/users/' + username).share();
            }
        }
        return this.users[username].observable;
    };
    GithubService.prototype.getRepoInfo = function (username, reponame) {
        if (!this.users.hasOwnProperty(username)) {
            this.users[username] = new User();
            this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
        }
        else {
            if (!this.users[username].repos.hasOwnProperty(reponame)) {
                this.users[username].repos[reponame] = this.http.get('https://api.github.com/repos/' + username + '/' + reponame).share();
            }
        }
        return this.users[username].repos[reponame];
    };
    return GithubService;
}());
GithubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]))
], GithubService);

//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'mm-root',
        template: __webpack_require__(140),
        styles: [__webpack_require__(138)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src___ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__src___["a" /* GithubButtonModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__github_button_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubButtonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GithubButtonModule = (function () {
    function GithubButtonModule() {
    }
    return GithubButtonModule;
}());
GithubButtonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__github_button_component__["a" /* GithubButton */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__github_button_component__["a" /* GithubButton */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__github_service__["a" /* GithubService */]]
    })
], GithubButtonModule);

//# sourceMappingURL=github-button.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_github_button_module__ = __webpack_require__(83);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_github_button_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ })

},[165]);
//# sourceMappingURL=main.bundle.js.map
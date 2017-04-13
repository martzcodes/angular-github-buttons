import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GithubButton} from './github-button.component';
import {GithubService} from './github.service';
import { HttpModule } from '@angular/http';
export * from './github-button.component';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [GithubButton],
  exports: [GithubButton],
  providers: [GithubService]
})
export class GithubButtonModule {}
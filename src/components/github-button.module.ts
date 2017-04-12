import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GithubButton} from './github-button';
export * from './github-button';

@NgModule({
  imports: [CommonModule],
  declarations: [GithubButton],
  exports: [GithubButton]
})
export class GithubButtonModule {}
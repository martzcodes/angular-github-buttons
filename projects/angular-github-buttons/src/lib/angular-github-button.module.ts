import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ForkComponent } from './fork/fork.component';
import { FollowComponent } from './follow/follow.component';
import { WatchComponent } from './watch/watch.component';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [ForkComponent, FollowComponent, WatchComponent, StarComponent],
  exports: [ForkComponent, FollowComponent, WatchComponent, StarComponent]
})
export class AngularGithubButtonsModule {}

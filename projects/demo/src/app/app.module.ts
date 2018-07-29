import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularGithubButtonsModule } from 'angular-github-buttons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularGithubButtonsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

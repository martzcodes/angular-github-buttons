import { TestBed, inject } from '@angular/core/testing';

import { AngularGithubButtonService } from './angular-github-button.service';

describe('AngularGithubButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularGithubButtonService]
    });
  });

  it('should be created', inject([AngularGithubButtonService], (service: AngularGithubButtonService) => {
    expect(service).toBeTruthy();
  }));
});

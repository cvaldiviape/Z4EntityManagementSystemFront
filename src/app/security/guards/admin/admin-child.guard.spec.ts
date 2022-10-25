import { TestBed } from '@angular/core/testing';

import { AdminChildGuard } from './admin-child.guard';

describe('AdminGuard', () => {
  let guard: AdminChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

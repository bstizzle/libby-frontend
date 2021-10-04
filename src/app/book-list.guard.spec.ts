import { TestBed } from '@angular/core/testing';

import { BookListGuard } from './book-list.guard';

describe('BookListGuard', () => {
  let guard: BookListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

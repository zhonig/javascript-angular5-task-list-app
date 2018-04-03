import { TestBed, inject } from '@angular/core/testing';

import { TaskColumnService } from './task-column.service';

describe('TaskColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskColumnService]
    });
  });

  it('should be created', inject([TaskColumnService], (service: TaskColumnService) => {
    expect(service).toBeTruthy();
  }));
});

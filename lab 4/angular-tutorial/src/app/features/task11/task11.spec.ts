import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task11 } from './task11';

describe('Task11', () => {
  let component: Task11;
  let fixture: ComponentFixture<Task11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

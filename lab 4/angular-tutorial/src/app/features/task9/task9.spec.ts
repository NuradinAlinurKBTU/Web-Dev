import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9 } from './task9';

describe('Task9', () => {
  let component: Task9;
  let fixture: ComponentFixture<Task9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task8 } from './task8';

describe('Task8', () => {
  let component: Task8;
  let fixture: ComponentFixture<Task8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
